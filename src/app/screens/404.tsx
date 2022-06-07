/** @jsxImportSource @emotion/react */

import { useTranslation } from 'react-i18next'
import Layout from 'src/app/Layout'

function NotFound() {
  const { t } = useTranslation()
  return (
    <Layout>
      <div css={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 css={{ marginTop: '-25%' }}>{t('notFound')}</h2>
      </div>
    </Layout>
  )
}

export default NotFound
