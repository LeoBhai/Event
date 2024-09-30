'use client'

import { useState } from 'react'
import {
  Typography,
  Input,
  DatePicker,
  Select,
  Button,
  Card,
  List,
  Space,
} from 'antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { RangePicker } = DatePicker
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SearchPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchKeyword, setSearchKeyword] = useState('')
  const [dateRange, setDateRange] = useState<
    [dayjs.Dayjs | null, dayjs.Dayjs | null] | null
  >(null)
  const [selectedSource, setSelectedSource] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const {
    data: articles,
    isLoading,
    refetch,
  } = Api.article.findMany.useQuery({
    where: {
      title: { contains: searchKeyword, mode: 'insensitive' },
      ...(dateRange &&
        dateRange[0] &&
        dateRange[1] && {
          publishDate: {
            gte: dateRange[0].toISOString(),
            lte: dateRange[1].toISOString(),
          },
        }),
      ...(selectedSource && { newsSourceId: selectedSource }),
      ...(selectedCategory && { categoryId: selectedCategory }),
    },
    include: { newsSource: true, category: true },
  })

  const { data: sources } = Api.newsSource.findMany.useQuery({})
  const { data: categories } = Api.category.findMany.useQuery({})

  const handleSearch = () => {
    refetch()
  }

  const handleArticleClick = (articleId: string) => {
    router.push(`/organizations/${params.organizationId}/articles/${articleId}`)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Article Search</Title>
        <Text>
          Search for articles using keywords and apply filters to refine your
          results.
        </Text>

        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', marginTop: '24px' }}
        >
          <Input
            placeholder="Enter keywords"
            value={searchKeyword}
            onChange={e => setSearchKeyword(e.target.value)}
            prefix={<SearchOutlined />}
            size="large"
          />

          <Space wrap>
            <RangePicker onChange={dates => setDateRange(dates)} size="large" />
            <Select
              style={{ width: 200 }}
              placeholder="Select source"
              onChange={value => setSelectedSource(value)}
              allowClear
              size="large"
            >
              {sources?.map(source => (
                <Select.Option key={source.id} value={source.id}>
                  {source.name}
                </Select.Option>
              ))}
            </Select>
            <Select
              style={{ width: 200 }}
              placeholder="Select category"
              onChange={value => setSelectedCategory(value)}
              allowClear
              size="large"
            >
              {categories?.map(category => (
                <Select.Option key={category.id} value={category.id}>
                  {category.name}
                </Select.Option>
              ))}
            </Select>
            <Button
              type="primary"
              icon={<FilterOutlined />}
              onClick={handleSearch}
              size="large"
            >
              Apply Filters
            </Button>
          </Space>

          <List
            loading={isLoading}
            dataSource={articles}
            renderItem={article => (
              <List.Item>
                <Card
                  hoverable
                  onClick={() => handleArticleClick(article.id)}
                  title={article.title}
                  extra={dayjs(article.publishDate).format('MMMM D, YYYY')}
                >
                  <Text>{article.content.substring(0, 200)}...</Text>
                  <div>
                    <Text type="secondary">
                      Source: {article.newsSource?.name}
                    </Text>
                    <br />
                    <Text type="secondary">
                      Category: {article.category?.name}
                    </Text>
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Space>
      </div>
    </PageLayout>
  )
}
