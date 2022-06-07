/** @jsxImportSource @emotion/react */

import { Menu as AntdMenu } from 'antd'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import './Menu.css'

function Menu() {
  const { t } = useTranslation()
  const location = useLocation()

  const menuItems = useMemo(
    () => [
      {
        key: 'editor',
        label: <Link to='/editor'>{t('routes.editor')}</Link>,
      },
    ],
    [],
  )

  return (
    <AntdMenu
      selectedKeys={[location.pathname]}
      mode='horizontal'
      css={{ flex: 1, border: 'none' }}
      items={menuItems}
    />
  )
}

export default Menu
