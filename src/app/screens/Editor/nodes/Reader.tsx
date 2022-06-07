import { useTranslation } from 'react-i18next'
import { AdjustedPosition, EditorInstance, PipelineNodeType } from '../types'
import { renderToString } from 'react-dom/server'

export const ReaderNode = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className='title-box'>{t('components.pipeline.readerNode')}</div>
    </div>
  )
}

export const addReaderNode = (editor: EditorInstance, position: AdjustedPosition) =>
  editor!.addNode(
    PipelineNodeType.Reader,
    1,
    1,
    position.x,
    position.y,
    PipelineNodeType.Reader,
    {},
    renderToString(<ReaderNode />),
    false,
  )

export default ReaderNode
