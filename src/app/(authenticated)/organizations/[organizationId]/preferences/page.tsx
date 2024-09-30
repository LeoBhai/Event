'use client'

import { Typography, Select, Switch, Space, Form, Button } from 'antd'
import {
  GlobalOutlined,
  BulbOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function UserPreferencesPage() {
  const router = useRouter()
  const params = useParams<{ organizationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()

  const [preferences, setPreferences] = useState({
    language: 'en',
    darkMode: false,
    timezone: 'UTC',
  })

  const { data: userPreference, isLoading } =
    Api.userPreference.findFirst.useQuery({
      where: { userId: user?.id },
    })

  const { mutateAsync: updatePreference } =
    Api.userPreference.update.useMutation()

  useEffect(() => {
    if (userPreference) {
      setPreferences({
        language: userPreference.language || 'en',
        darkMode: userPreference.darkMode || false,
        timezone: userPreference.timezone || 'UTC',
      })
      form.setFieldsValue({
        language: userPreference.language || 'en',
        darkMode: userPreference.darkMode || false,
        timezone: userPreference.timezone || 'UTC',
      })
    }
  }, [userPreference, form])

  const onFinish = async (values: typeof preferences) => {
    try {
      await updatePreference({
        where: { id: userPreference?.id },
        data: values,
      })
      enqueueSnackbar('Preferences updated successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to update preferences', { variant: 'error' })
    }
  }

  if (isLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>User Preferences</Title>
        <Text>Customize your news reading experience</Text>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={preferences}
          style={{ marginTop: '20px' }}
        >
          <Form.Item
            name="language"
            label={
              <Space>
                <GlobalOutlined /> Preferred Language
              </Space>
            }
          >
            <Select>
              <Select.Option value="en">English</Select.Option>
              <Select.Option value="es">Spanish</Select.Option>
              <Select.Option value="fr">French</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="darkMode"
            label={
              <Space>
                <BulbOutlined /> Dark Mode
              </Space>
            }
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="timezone"
            label={
              <Space>
                <ClockCircleOutlined /> Time Zone
              </Space>
            }
          >
            <Select>
              <Select.Option value="UTC">UTC</Select.Option>
              <Select.Option value="America/New_York">
                Eastern Time
              </Select.Option>
              <Select.Option value="America/Los_Angeles">
                Pacific Time
              </Select.Option>
              <Select.Option value="Europe/London">London</Select.Option>
              <Select.Option value="Asia/Tokyo">Tokyo</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Preferences
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
