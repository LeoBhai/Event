'use client'

import { useState, useEffect } from 'react'
import { Typography, Input, List, Checkbox, Card, Row, Col } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NewsSourcesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSources, setSelectedSources] = useState<string[]>([])

  const { data: newsSources, isLoading: newsSourcesLoading } =
    Api.newsSource.findMany.useQuery({})
  const { data: userPreference, isLoading: userPreferenceLoading } =
    Api.userPreference.findFirst.useQuery({
      where: { userId: user?.id },
    })
  const { mutateAsync: updateUserPreferences } =
    Api.userPreference.update.useMutation()

  useEffect(() => {
    if (userPreference) {
      setSelectedSources(
        userPreference.categoryId ? [userPreference.categoryId] : [],
      )
    }
  }, [userPreference])

  const handleSourceToggle = async (sourceId: string) => {
    if (!user?.id || !userPreference) return

    const updatedSources = selectedSources.includes(sourceId)
      ? selectedSources.filter(id => id !== sourceId)
      : [...selectedSources, sourceId]

    setSelectedSources(updatedSources)

    try {
      await updateUserPreferences({
        where: { id: userPreference.id },
        data: { categoryId: updatedSources[0] || null },
      })
      enqueueSnackbar('Preferences updated successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to update preferences', { variant: 'error' })
    }
  }

  const filteredSources = newsSources?.filter(source =>
    source.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const isLoading = newsSourcesLoading || userPreferenceLoading

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Title level={2}>News Sources</Title>
          <Paragraph>
            Select or deselect news sources to customize your feed.
          </Paragraph>

          <Input
            prefix={<SearchOutlined />}
            placeholder="Search news sources"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ marginBottom: 16 }}
          />

          <List
            loading={isLoading}
            dataSource={filteredSources}
            renderItem={source => (
              <List.Item>
                <Card style={{ width: '100%' }}>
                  <Checkbox
                    checked={selectedSources.includes(source.id)}
                    onChange={() => handleSourceToggle(source.id)}
                  >
                    {source.name}
                  </Checkbox>
                </Card>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </PageLayout>
  )
}
