/** @jsxImportSource @emotion/react */

import { FC } from 'react'
import Header from 'src/components/Header'

const Layout: FC<any> = ({ children, ...childrenContainerProps }) => {
  return (
    <>
      <Header />
      <div css={{ display: 'flex', height: '100vh' }} {...childrenContainerProps}>
        {children}
      </div>
    </>
  )
}

export default Layout
