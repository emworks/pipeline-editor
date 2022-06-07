/** @jsxImportSource @emotion/react */

import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Layout from 'src/app/Layout'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux'
import { useParams } from 'react-router-dom'
import { fetchPipeline } from 'src/app/store/reducers/pipelineReducer'
import { useTranslation } from 'react-i18next'
import Drawflow from 'drawflow'
import { selectPipeline } from 'src/app/store/selectors'
import { pushErrorMessage } from 'src/components/Message'
import { EditorInstance, PipelineNodeType } from './types'
import { addQueryNode, addReaderNode, addRetrieverNode } from './nodes'
import { getAdjustedPosition } from './utils'
import { ClearButton } from './actions/Clear'
import ExportButton from './actions/Export'

import './Editor.css'

const Editor: FC<any> = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchPipeline(id))
    }
  }, [id])

  const container = useRef<HTMLDivElement>(null)
  const [editor, setEditor] = useState<EditorInstance>()

  useEffect(() => {
    if (!container.current) {
      return
    }
    const editor = new Drawflow(container.current)
    editor.start()
    setEditor(editor as EditorInstance)
  }, [])

  useEffect(() => {
    if (!editor) {
      return
    }
    const elements = document.getElementsByClassName('drag-drawflow')
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('touchend', drop, false)
      elements[i].addEventListener('touchmove', positionMobile, false)
      elements[i].addEventListener('touchstart', drag, false)
    }
    return () => {
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener('touchend', drop)
        elements[i].removeEventListener('touchmove', positionMobile)
        elements[i].removeEventListener('touchstart', drag)
      }
    }
  }, [])

  const { data } = useAppSelector(selectPipeline)

  useEffect(() => {
    if (!editor) {
      return
    }
    editor.import({
      drawflow: {
        Home: {
          data: { ...data },
        },
      },
    })
  }, [data])

  let mobile_item_selec = ''
  let mobile_last_move: any
  function positionMobile(event: any) {
    mobile_last_move = event
  }

  function drag(event: any) {
    if (event.type === 'touchstart') {
      mobile_item_selec = event.target.closest('.drag-drawflow').getAttribute('data-node')
    } else {
      event.dataTransfer.setData('node', event.target.getAttribute('data-node'))
    }
  }

  function drop(event: any) {
    if (event.type === 'touchend') {
      const parentdrawflow = (document as any)
        .elementFromPoint(mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY)
        .closest('#drawflow')
      if (parentdrawflow != null) {
        addNodeToDrawFlow(mobile_item_selec, mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY)
      }
      mobile_item_selec = ''
    } else {
      event.preventDefault()
      const data = event.dataTransfer.getData('node')
      addNodeToDrawFlow(data, event.clientX, event.clientY)
    }
  }

  const addNodeToDrawFlow = useCallback(
    (name: any, pos_x: any, pos_y: any) => {
      const position = getAdjustedPosition(editor!, pos_x, pos_y)
      switch (name) {
        case PipelineNodeType.Query:
          return addQueryNode(editor!, position)
        case PipelineNodeType.Retriever:
          return addRetrieverNode(editor!, position)
        case PipelineNodeType.Reader:
          return addReaderNode(editor!, position)
        default:
          return pushErrorMessage(t('messages.nodeNotImplemented'))
      }
    },
    [editor],
  )

  return (
    <Layout>
      <div className='sidebar'>
        <div className='drag-drawflow' draggable='true' onDragStart={drag} data-node={PipelineNodeType.Query}>
          <span>{t('components.pipeline.queryNode')}</span>
        </div>
        <div className='drag-drawflow' draggable='true' onDragStart={drag} data-node={PipelineNodeType.Retriever}>
          <span>{t('components.pipeline.retrieverNode')}</span>
        </div>
        <div className='drag-drawflow' draggable='true' onDragStart={drag} data-node={PipelineNodeType.Reader}>
          <span>{t('components.pipeline.readerNode')}</span>
        </div>
      </div>
      <div id='drawflow' onDrop={drop} onDragOver={(event) => event.preventDefault()} ref={container}>
        <div css={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
          <ClearButton editor={editor!} />
          <ExportButton editor={editor!} />
        </div>
      </div>
    </Layout>
  )
}

export default Editor
