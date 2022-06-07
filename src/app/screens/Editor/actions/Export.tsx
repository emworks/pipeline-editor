import { Button } from 'antd'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { pushSuccessMessage } from 'src/components/Message'
import { EditorInstance } from '../types'

export const ExportButton: FC<{ editor: EditorInstance }> = ({ editor }) => {
  const { t } = useTranslation()

  const exportPipeline = useCallback(() => {
    const data = editor!.export()
    console.log(JSON.stringify(data, null, 4))
    pushSuccessMessage(t('messages.pipelineExported'))
  }, [editor])

  return (
    <Button type='primary' onClick={exportPipeline}>
      {t('buttons.export')}
    </Button>
  )
}

export default ExportButton
