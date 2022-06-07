/** @jsxImportSource @emotion/react */

import { FC } from 'react'
import Header from 'src/components/Header'

const Layout: FC<unknown> = ({ children, ...childrenContainerProps }) => {
  return (
    <>
      <Header />
      <div css={{ padding: '0 20px 20px' }} {...childrenContainerProps}>
        {children}
      </div>
    </>
  )
}

export default Layout
