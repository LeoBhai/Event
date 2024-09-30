'use client'

import { useState } from 'react'
import { Typography, Upload, List, Button, Space, Modal } from 'antd'
import {
  UploadOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import type { UploadFile } from 'antd/es/upload/interface'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function RAGContextManagementPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, checkOrganizationRole } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [ragVectors, setRagVectors] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const { mutateAsync: uploadFile } = useUploadPublic()
  const { mutateAsync: loadFile } = Api.rag.loadFile.useMutation()
  const { data: vectors, refetch } = Api.ragVector.findMany.useQuery({})
  const { mutateAsync: deleteVector } = Api.ragVector.delete.useMutation()

  const isAdmin = checkOrganizationRole('admin')

  const handleUpload = async (file: File) => {
    if (!isAdmin) {
      enqueueSnackbar('You do not have permission to upload files.', {
        variant: 'error',
      })
      return
    }

    setLoading(true)
    try {
      const { url } = await uploadFile({ file })
      const { key } = await loadFile({ url })
      enqueueSnackbar('File uploaded and added to RAG context successfully.', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to upload file.', { variant: 'error' })
    } finally {
      setLoading(false)
      setFileList([])
    }
  }

  const handleRemove = async (id: string) => {
    if (!isAdmin) {
      enqueueSnackbar('You do not have permission to remove files.', {
        variant: 'error',
      })
      return
    }

    Modal.confirm({
      title: 'Are you sure you want to remove this file?',
      icon: <QuestionCircleOutlined />,
      content: 'This action cannot be undone.',
      onOk: async () => {
        try {
          await deleteVector({ where: { id } })
          enqueueSnackbar('File removed from RAG context successfully.', {
            variant: 'success',
          })
          refetch()
        } catch (error) {
          enqueueSnackbar('Failed to remove file.', { variant: 'error' })
        }
      },
    })
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>RAG Context Management</Title>
        <Text>
          Upload files to enhance the AI's knowledge base and manage existing
          files.
        </Text>

        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', marginTop: '20px' }}
        >
          {isAdmin && (
            <Upload
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              beforeUpload={file => {
                handleUpload(file)
                return false
              }}
            >
              <Button icon={<UploadOutlined />} loading={loading}>
                Upload File
              </Button>
            </Upload>
          )}

          <List
            header={<Title level={4}>Current Files in RAG Context</Title>}
            bordered
            dataSource={vectors}
            renderItem={item => (
              <List.Item
                actions={[
                  isAdmin && (
                    <Button
                      key="delete"
                      icon={<DeleteOutlined />}
                      onClick={() => handleRemove(item.id)}
                      danger
                    >
                      Remove
                    </Button>
                  ),
                ]}
              >
                <List.Item.Meta
                  title={item.key}
                  description={`Uploaded on: ${dayjs(item.dateCreated).format('MMMM D, YYYY HH:mm')}`}
                />
              </List.Item>
            )}
          />
        </Space>
      </div>
    </PageLayout>
  )
}
