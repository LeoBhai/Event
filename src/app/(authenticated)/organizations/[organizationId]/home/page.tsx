'use client'

import { Typography, List, Card, Spin, Button } from 'antd'
import { ReadOutlined, BookOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [page, setPage] = useState(1)
  const pageSize = 10

  const { data: userPreferences, isLoading: preferencesLoading } =
    Api.userPreference.findMany.useQuery({
      where: { userId: user?.id },
      include: { category: true },
    })

  const {
    data: articles,
    isLoading: articlesLoading,
    fetchNextPage,
    hasNextPage,
  } = Api.article.findMany.useInfiniteQuery(
    {
      where: {
        categoryId: { in: userPreferences?.map(pref => pref.categoryId) },
      },
      include: { category: true, newsSource: true },
      orderBy: { publishDate: 'desc' },
      take: pageSize,
    },
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === pageSize ? allPages.length + 1 : undefined,
    },
  )

  const { mutateAsync: createBookmark } = Api.bookmark.create.useMutation()

  const handleReadArticle = (articleId: string) => {
    router.push(`/organizations/${params.organizationId}/articles/${articleId}`)
  }

  const handleBookmark = async (articleId: string) => {
    try {
      await createBookmark({
        data: {
          userId: user?.id,
          articleId: articleId,
          createdAt: new Date().toISOString(),
        },
      })
      enqueueSnackbar('Article bookmarked successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to bookmark article', { variant: 'error' })
    }
  }

  const loadMore = () => {
    setPage(prevPage => prevPage + 1)
    fetchNextPage()
  }

  if (preferencesLoading || articlesLoading) {
    return (
      <PageLayout layout="full-width">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Your Personalized News Feed</Title>
        <Paragraph>
          Stay updated with the latest news from your selected categories and
          sources.
        </Paragraph>

        <List
          dataSource={articles?.pages.flat()}
          renderItem={article => (
            <List.Item>
              <Card
                title={article.title}
                extra={
                  <div>
                    <Button
                      icon={<ReadOutlined />}
                      onClick={() => handleReadArticle(article.id)}
                      style={{ marginRight: '8px' }}
                    >
                      Read
                    </Button>
                    <Button
                      icon={<BookOutlined />}
                      onClick={() => handleBookmark(article.id)}
                    >
                      Bookmark
                    </Button>
                  </div>
                }
              >
                <Paragraph ellipsis={{ rows: 2 }}>{article.content}</Paragraph>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                  }}
                >
                  <span>Category: {article.category?.name}</span>
                  <span>Source: {article.newsSource?.name}</span>
                  <span>
                    Published:{' '}
                    {dayjs(article.publishDate).format('MMMM D, YYYY')}
                  </span>
                </div>
              </Card>
            </List.Item>
          )}
        />

        {hasNextPage && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button onClick={loadMore}>Load More</Button>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
