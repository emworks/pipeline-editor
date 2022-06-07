import { useTranslation } from 'react-i18next'
import { AdjustedPosition, EditorInstance, PipelineNodeType } from '../types'
import { renderToString } from 'react-dom/server'

export const RetrieverNode = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='title-box'>{t('components.pipeline.retrieverNode')}</div>
    </div>
  )
}

export const addRetrieverNode = (editor: EditorInstance, position: AdjustedPosition) =>
  editor!.addNode(
    PipelineNodeType.Retriever,
    1,
    1,
    position.x,
    position.y,
    PipelineNodeType.Retriever,
    {},
    renderToString(<RetrieverNode />),
    false,
  )

export default RetrieverNode
