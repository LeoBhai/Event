'use client'

import { Typography, Space, Card } from 'antd'
import {
  InfoCircleOutlined,
  ReadOutlined,
  BookOutlined,
} from '@ant-design/icons'
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
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  return (
    <PageLayout layout="full-width">
      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}
      >
        <Title level={1} style={{ textAlign: 'center' }}>
          Welcome to Our News Application
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '18px' }}>
          Discover, read, and bookmark your favorite news articles all in one
          place.
        </Paragraph>

        <Card>
          <Space direction="vertical" size="middle">
            <Title level={3}>
              <InfoCircleOutlined /> How It Works
            </Title>
            <Paragraph>
              Our application provides a seamless experience for staying
              up-to-date with the latest news. Here's how you can make the most
              of it:
            </Paragraph>
            <ul>
              <li>Browse through various news sources and categories</li>
              <li>Read full articles that interest you</li>
              <li>Bookmark articles to read later</li>
              <li>
                Set your preferences for personalized news recommendations
              </li>
              <li>Subscribe to newsletters for regular updates</li>
            </ul>
          </Space>
        </Card>

        <Space size="large" style={{ justifyContent: 'center', width: '100%' }}>
          <Card
            hoverable
            style={{ width: 300 }}
            onClick={() =>
              router.push(`/organizations/${params.organizationId}/sources`)
            }
          >
            <ReadOutlined style={{ fontSize: '24px', marginBottom: '16px' }} />
            <Title level={4}>Explore News Sources</Title>
            <Paragraph>
              Discover a wide range of news sources and start reading articles
              that matter to you.
            </Paragraph>
          </Card>
          <Card
            hoverable
            style={{ width: 300 }}
            onClick={() =>
              router.push(`/organizations/${params.organizationId}/preferences`)
            }
          >
            <BookOutlined style={{ fontSize: '24px', marginBottom: '16px' }} />
            <Title level={4}>Set Your Preferences</Title>
            <Paragraph>
              Customize your news feed by setting your preferences and favorite
              categories.
            </Paragraph>
          </Card>
        </Space>

        <Paragraph style={{ textAlign: 'center' }}>
          Ready to dive in? Start exploring our news sources or set your
          preferences to get personalized content!
        </Paragraph>
      </Space>
    </PageLayout>
  )
}
