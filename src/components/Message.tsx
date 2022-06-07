import { message } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import './Message.css'

export const pushSuccessMessage = (content: any) => {
  message.success({
    content,
    icon: <CheckCircleOutlined />,
  })
}
