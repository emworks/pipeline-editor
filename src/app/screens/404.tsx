import { useTranslation } from 'react-i18next'
import Layout from 'src/app/Layout'

function NotFound() {
  const { t } = useTranslation()
  return (
    <Layout>
      <h2>{t('notFound')}</h2>
    </Layout>
  )
}

export default NotFound
