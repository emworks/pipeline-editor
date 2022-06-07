import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { PipelineNodeType } from '../types'

type SidebarItemProps = {
  onDragStart: (event: any) => void
}

export const QueryNodeItem: FC<SidebarItemProps> = ({ onDragStart }) => {
  const { t } = useTranslation()

  return (
    <div className='drag-drawflow' draggable='true' onDragStart={onDragStart} data-node={PipelineNodeType.Query}>
      <span>{t('components.pipeline.queryNode')}</span>
    </div>
  )
}

export const RetrieverNodeItem: FC<SidebarItemProps> = ({ onDragStart }) => {
  const { t } = useTranslation()

  return (
    <div className='drag-drawflow' draggable='true' onDragStart={onDragStart} data-node={PipelineNodeType.Retriever}>
      <span>{t('components.pipeline.retrieverNode')}</span>
    </div>
  )
}

export const ReaderNodeItem: FC<SidebarItemProps> = ({ onDragStart }) => {
  const { t } = useTranslation()

  return (
    <div className='drag-drawflow' draggable='true' onDragStart={onDragStart} data-node={PipelineNodeType.Reader}>
      <span>{t('components.pipeline.readerNode')}</span>
    </div>
  )
}
