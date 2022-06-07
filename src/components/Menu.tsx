/** @jsxImportSource @emotion/react */

import { Menu as AntdMenu } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import './Menu.css'

function Menu() {
  const { t } = useTranslation()
  const location = useLocation()
  return (
    <AntdMenu selectedKeys={[location.pathname]} mode='horizontal' css={{ flex: 1, border: 'none' }}>
      <AntdMenu.Item key='/dashboard'>
        <Link to='/dashboard'>{t('routes.dashboard')}</Link>
      </AntdMenu.Item>
      <AntdMenu.Item key='/issues'>
        <Link to='/issues'>{t('routes.issues')}</Link>
      </AntdMenu.Item>
    </AntdMenu>
  )
}

export default Menu
