import { useTranslation } from 'react-i18next'
import { AdjustedPosition, EditorInstance, PipelineNodeType } from '../types'
import { renderToString } from 'react-dom/server'
import { pushInfoMessage } from 'src/components/Message'
import { t } from 'i18next'
import { hasQueryNode } from '../utils'

export const QueryNode = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='title-box'>{t('components.pipeline.queryNode')}</div>
    </div>
  )
}

export const addQueryNode = (editor: EditorInstance, position: AdjustedPosition) => {
  if (editor!.hasQueryNode || hasQueryNode(editor)) {
    editor.hasQueryNode = true
    return pushInfoMessage(t('messages.hasQueryNode'))
  }

  editor!.addNode(
    PipelineNodeType.Query,
    0,
    1,
    position.x,
    position.y,
    PipelineNodeType.Query,
    {},
    renderToString(<QueryNode />),
    false,
  )
}

export default QueryNode
