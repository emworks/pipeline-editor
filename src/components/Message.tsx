import { message } from 'antd'
import { CheckCircleOutlined, InfoCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import './Message.css'

export const pushSuccessMessage = (content: any) => {
  message.success({
    content,
    icon: <CheckCircleOutlined />,
  })
}

export const pushInfoMessage = (content: any) => {
  message.info({
    content,
    icon: <InfoCircleOutlined />,
  })
}

export const pushErrorMessage = (content: any) => {
  message.error({
    content,
    icon: <CloseCircleOutlined />,
  })
}
