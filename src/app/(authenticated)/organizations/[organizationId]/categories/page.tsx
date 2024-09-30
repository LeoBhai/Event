'use client'

import { Typography, List, Checkbox, Space, Card } from 'antd'
import { TagOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CategoriesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const { data: categories, isLoading: categoriesLoading } =
    Api.category.findMany.useQuery({})
  const {
    data: userPreferences,
    isLoading: preferencesLoading,
    refetch: refetchPreferences,
  } = Api.userPreference.findMany.useQuery({
    where: { userId: user?.id },
    include: { category: true },
  })

  const { mutateAsync: updatePreference } =
    Api.userPreference.update.useMutation()
  const { mutateAsync: createPreference } =
    Api.userPreference.create.useMutation()

  useEffect(() => {
    if (userPreferences) {
      setSelectedCategories(userPreferences.map(pref => pref.categoryId))
    }
  }, [userPreferences])

  const handleCategoryToggle = async (categoryId: string) => {
    try {
      const isSelected = selectedCategories.includes(categoryId)
      let newSelectedCategories: string[]

      if (isSelected) {
        newSelectedCategories = selectedCategories.filter(
          id => id !== categoryId,
        )
      } else {
        newSelectedCategories = [...selectedCategories, categoryId]
      }

      setSelectedCategories(newSelectedCategories)

      const existingPreference = userPreferences?.find(
        pref => pref.categoryId === categoryId,
      )

      if (existingPreference) {
        await updatePreference({
          where: { id: existingPreference.id },
          data: { notificationEnabled: !isSelected },
        })
      } else {
        await createPreference({
          data: {
            userId: user!.id,
            categoryId: categoryId,
            notificationEnabled: true,
          },
        })
      }

      await refetchPreferences()
      enqueueSnackbar('Preferences updated successfully', {
        variant: 'success',
      })
    } catch (error) {
      console.error('Error updating preferences:', error)
      enqueueSnackbar('Failed to update preferences', { variant: 'error' })
    }
  }

  if (categoriesLoading || preferencesLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 800, margin: '0 auto' }}>
        <Title level={2}>News Categories</Title>
        <Paragraph>
          Select or deselect categories to customize your news feed.
        </Paragraph>
        <List
          dataSource={categories}
          renderItem={category => (
            <List.Item>
              <Space>
                <Checkbox
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryToggle(category.id)}
                />
                <TagOutlined style={{ color: '#1890ff' }} />
                <span>{category.name}</span>
              </Space>
            </List.Item>
          )}
        />
      </Card>
    </PageLayout>
  )
}
