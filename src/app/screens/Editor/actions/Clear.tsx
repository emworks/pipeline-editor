import { Button } from 'antd'
import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { pushSuccessMessage } from 'src/components/Message'
import { EditorInstance } from '../types'

export const ClearButton: FC<{ editor: EditorInstance }> = ({ editor }) => {
  const { t } = useTranslation()

  const clear = useCallback(() => {
    editor!.clearModuleSelected()
    pushSuccessMessage(t('messages.pipelineCleared'))
  }, [editor])

  return (
    <Button type='link' onClick={clear}>
      {t('buttons.clear')}
    </Button>
  )
}

export default ClearButton
