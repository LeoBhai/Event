'use client'

import { useState, useEffect } from 'react'
import {
  Typography,
  List,
  Button,
  Modal,
  Input,
  Space,
  Card,
  Row,
  Col,
} from 'antd'
import { DeleteOutlined, FolderOutlined, EditOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function BookmarksPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [bookmarks, setBookmarks] = useState<any[]>([])
  const [folders, setFolders] = useState<string[]>([])
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [newFolderName, setNewFolderName] = useState('')

  const {
    data: bookmarksData,
    isLoading,
    refetch,
  } = Api.bookmark.findMany.useQuery({
    where: { userId: user?.id },
    include: { article: true },
  })

  const { mutateAsync: deleteBookmark } = Api.bookmark.delete.useMutation()

  useEffect(() => {
    if (bookmarksData) {
      setBookmarks(bookmarksData)
      const uniqueFolders = Array.from(
        new Set(bookmarksData.map((b: any) => b.folder || 'Uncategorized')),
      )
      setFolders(['All', ...uniqueFolders])
    }
  }, [bookmarksData])

  const handleRemoveBookmark = async (bookmarkId: string) => {
    try {
      await deleteBookmark({ where: { id: bookmarkId } })
      enqueueSnackbar('Bookmark removed successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to remove bookmark', { variant: 'error' })
    }
  }

  const handleFolderChange = (folder: string) => {
    setSelectedFolder(folder === 'All' ? null : folder)
  }

  const handleCreateFolder = () => {
    setIsModalVisible(true)
  }

  const handleModalOk = () => {
    if (newFolderName) {
      setFolders([...folders, newFolderName])
      setIsModalVisible(false)
      setNewFolderName('')
      enqueueSnackbar('Folder created successfully', { variant: 'success' })
    }
  }

  const filteredBookmarks = selectedFolder
    ? bookmarks.filter(b => (b.folder || 'Uncategorized') === selectedFolder)
    : bookmarks

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={18} lg={16} xl={14}>
          <Title level={2}>My Bookmarks</Title>
          <Text>
            Manage your saved articles and organize them into folders.
          </Text>

          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', marginTop: '20px' }}
          >
            <Card>
              <Space>
                <Text strong>Folders:</Text>
                {folders.map(folder => (
                  <Button
                    key={folder}
                    type={
                      selectedFolder === folder ||
                      (folder === 'All' && !selectedFolder)
                        ? 'primary'
                        : 'default'
                    }
                    onClick={() => handleFolderChange(folder)}
                  >
                    {folder}
                  </Button>
                ))}
                <Button icon={<FolderOutlined />} onClick={handleCreateFolder}>
                  New Folder
                </Button>
              </Space>
            </Card>

            <List
              itemLayout="vertical"
              dataSource={filteredBookmarks}
              loading={isLoading}
              renderItem={(bookmark: any) => (
                <List.Item
                  key={bookmark.id}
                  actions={[
                    <Button
                      key="remove"
                      icon={<DeleteOutlined />}
                      onClick={() => handleRemoveBookmark(bookmark.id)}
                      danger
                    >
                      Remove
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    title={
                      <a
                        onClick={() =>
                          router.push(
                            `/organizations/${params.organizationId}/articles/${bookmark.article.id}`,
                          )
                        }
                      >
                        {bookmark.article.title}
                      </a>
                    }
                    description={
                      <>
                        <Text>
                          Folder: {bookmark.folder || 'Uncategorized'}
                        </Text>
                        <br />
                        <Text type="secondary">
                          Bookmarked on:{' '}
                          {dayjs(bookmark.createdAt).format('MMMM D, YYYY')}
                        </Text>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Space>

          <Modal
            title="Create New Folder"
            visible={isModalVisible}
            onOk={handleModalOk}
            onCancel={() => setIsModalVisible(false)}
          >
            <Input
              placeholder="Enter folder name"
              value={newFolderName}
              onChange={e => setNewFolderName(e.target.value)}
            />
          </Modal>
        </Col>
      </Row>
    </PageLayout>
  )
}
