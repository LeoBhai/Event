'use client'

import { Typography, Form, Switch, Select, Checkbox, Button, Space } from 'antd'
import {
  MailOutlined,
  ClockCircleOutlined,
  TagsOutlined,
} from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NewsletterSettingsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: newsletter, isLoading } = Api.newsletter.findFirst.useQuery({
    where: { userId: user?.id },
  })

  const { data: categories } = Api.category.findMany.useQuery({})

  const { mutateAsync: updateNewsletter } = Api.newsletter.update.useMutation()
  const { mutateAsync: createNewsletter } = Api.newsletter.create.useMutation()

  const [form] = Form.useForm()

  const onFinish = async (values: any) => {
    try {
      if (newsletter) {
        await updateNewsletter({
          where: { id: newsletter.id },
          data: {
            ...values,
            userId: user?.id,
          },
        })
      } else {
        await createNewsletter({
          data: {
            ...values,
            userId: user?.id,
          },
        })
      }
      enqueueSnackbar('Newsletter settings updated successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to update newsletter settings', {
        variant: 'error',
      })
    }
  }

  if (isLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <MailOutlined /> Newsletter Settings
        </Title>
        <Paragraph>
          Customize your newsletter preferences to receive the content you're
          most interested in.
        </Paragraph>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={newsletter || {}}
        >
          <Form.Item
            name="notificationEnabled"
            valuePropName="checked"
            label="Receive Newsletters"
          >
            <Switch />
          </Form.Item>

          <Form.Item
            name="frequency"
            label={
              <>
                <ClockCircleOutlined /> Delivery Frequency
              </>
            }
          >
            <Select>
              <Select.Option value="daily">Daily</Select.Option>
              <Select.Option value="weekly">Weekly</Select.Option>
              <Select.Option value="monthly">Monthly</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="categories"
            label={
              <>
                <TagsOutlined /> Content Preferences
              </>
            }
          >
            <Checkbox.Group>
              <Space direction="vertical">
                {categories?.map(category => (
                  <Checkbox key={category.id} value={category.id}>
                    {category.name}
                  </Checkbox>
                ))}
              </Space>
            </Checkbox.Group>
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
