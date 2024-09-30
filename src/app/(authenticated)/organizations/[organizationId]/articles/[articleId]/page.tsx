'use client'

import { Typography, Space, Button, Spin, Row, Col } from 'antd'
import { BookOutlined, ShareAltOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ArticleViewPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const articleId = params.articleId

  const { data: article, isLoading } = Api.article.findUnique.useQuery({
    where: { id: articleId },
    include: { author: true, newsSource: true, category: true },
  })

  const { mutateAsync: createBookmark } = Api.bookmark.create.useMutation()

  const handleBookmark = async () => {
    if (!user) {
      enqueueSnackbar('Please log in to bookmark articles', { variant: 'info' })
      return
    }

    try {
      await createBookmark({
        data: {
          createdAt: new Date().toISOString(),
          userId: user.id,
          articleId: articleId,
        },
      })
      enqueueSnackbar('Article bookmarked successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to bookmark article', { variant: 'error' })
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: article?.title,
          text: 'Check out this article!',
          url: window.location.href,
        })
        .then(() => {
          enqueueSnackbar('Article shared successfully', { variant: 'success' })
        })
        .catch(error => {
          console.error('Error sharing:', error)
          enqueueSnackbar('Failed to share article', { variant: 'error' })
        })
    } else {
      enqueueSnackbar('Sharing is not supported on this device', {
        variant: 'info',
      })
    }
  }

  if (isLoading) {
    return (
      <PageLayout layout="full-width">
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
          <Col>
            <Spin size="large" />
          </Col>
        </Row>
      </PageLayout>
    )
  }

  if (!article) {
    return (
      <PageLayout layout="full-width">
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
          <Col>
            <Title level={3}>Article not found</Title>
          </Col>
        </Row>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={14} xl={12}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', padding: '24px' }}
          >
            <Title level={1}>{article.title}</Title>
            <Space>
              <Paragraph type="secondary">
                By {article.author?.name} |{' '}
                {dayjs(article.publishDate).format('MMMM D, YYYY')}
              </Paragraph>
              <Paragraph type="secondary">
                Source: {article.newsSource?.name} | Category:{' '}
                {article.category?.name}
              </Paragraph>
            </Space>
            <Space>
              <Button icon={<BookOutlined />} onClick={handleBookmark}>
                Bookmark
              </Button>
              <Button icon={<ShareAltOutlined />} onClick={handleShare}>
                Share
              </Button>
            </Space>
            <Paragraph>{article.content}</Paragraph>
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
