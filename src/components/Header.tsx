/** @jsxImportSource @emotion/react */

import './Header.css'
import logo from 'src/assets/img/logo.svg'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Menu from './Menu'

export function AppLogo() {
  return (
    <Link to='/' css={{ display: 'flex' }}>
      <img src={logo} className='logo' alt='logo' />
    </Link>
  )
}

export function User() {
  return (
    <div>
      <Avatar size='large' icon={<UserOutlined />} css={{ marginLeft: 8 }} />
    </div>
  )
}

function Header() {
  return (
    <header
      css={{
        padding: '20px',
        height: '72px',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--border-color)',
      }}>
      <AppLogo />
      <Menu />
      <User />
    </header>
  )
}

export default Header
