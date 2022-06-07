/** @jsxImportSource @emotion/react */

import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import Layout from 'src/app/Layout'
import { useAppDispatch, useAppSelector } from 'src/app/hooks/redux'
import { useParams } from 'react-router-dom'
import { fetchPipeline } from 'src/app/store/reducers/pipelineReducer'
import { useTranslation } from 'react-i18next'
import Drawflow from 'drawflow'
import './Editor.css'
import { selectPipeline } from 'src/app/store/selectors'
import Button from 'src/components/Button'
import { pushSuccessMessage } from 'src/components/Message'

const Editor: FC<any> = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(fetchPipeline(id))
    }
  }, [id])

  const container: any = useRef(null)
  const [editor, setEditor] = useState<any>()

  useEffect(() => {
    if (!container.current) {
      return
    }
    const editor = new Drawflow(container.current)
    editor.start()
    setEditor(editor)
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
  function positionMobile(ev: any) {
    mobile_last_move = ev
  }

  function drag(ev: any) {
    if (ev.type === 'touchstart') {
      mobile_item_selec = ev.target.closest('.drag-drawflow').getAttribute('data-node')
    } else {
      ev.dataTransfer.setData('node', ev.target.getAttribute('data-node'))
    }
  }

  function drop(ev: any) {
    if (ev.type === 'touchend') {
      const parentdrawflow = (document as any)
        .elementFromPoint(mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY)
        .closest('#drawflow')
      if (parentdrawflow != null) {
        addNodeToDrawFlow(mobile_item_selec, mobile_last_move.touches[0].clientX, mobile_last_move.touches[0].clientY)
      }
      mobile_item_selec = ''
    } else {
      ev.preventDefault()
      const data = ev.dataTransfer.getData('node')
      addNodeToDrawFlow(data, ev.clientX, ev.clientY)
    }
  }

  function allowDrop(ev: any) {
    ev.preventDefault()
  }

  function addNodeToDrawFlow(name: any, pos_x: any, pos_y: any) {
    pos_x =
      pos_x * (editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom)) -
      editor.precanvas.getBoundingClientRect().x *
        (editor.precanvas.clientWidth / (editor.precanvas.clientWidth * editor.zoom))
    pos_y =
      pos_y * (editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom)) -
      editor.precanvas.getBoundingClientRect().y *
        (editor.precanvas.clientHeight / (editor.precanvas.clientHeight * editor.zoom))

    switch (name) {
      case 'query':
        const query = `
        <div>
          <div class="title-box">Query</div>
        </div>
        `
        editor.addNode('query', 0, 1, pos_x, pos_y, 'query', {}, query)
        break

      case 'retriever':
        const retriever = `
        <div>
          <div class="title-box">Retriever</div>
        </div>
        `
        editor.addNode('retriever', 1, 1, pos_x, pos_y, 'retriever', {}, retriever)
        break

      default:
        break
    }
  }

  const exportPipeline = useCallback(() => {
    const data = editor.export()
    console.log(JSON.stringify(data, null, 4))
    pushSuccessMessage(t('messages.pipelineExported'))
  }, [editor])

  const clear = useCallback(() => {
    editor.clearModuleSelected()
    pushSuccessMessage(t('messages.pipelineCleared'))
  }, [editor])

  return (
    <Layout>
      <div className='sidebar'>
        <div className='drag-drawflow' draggable='true' onDragStart={drag} data-node='query'>
          <span>{t('components.pipeline.queryNode')}</span>
        </div>
        <div className='drag-drawflow' draggable='true' onDragStart={drag} data-node='retriever'>
          <span>{t('components.pipeline.retrieverNode')}</span>
        </div>
        <div className='drag-drawflow' draggable='true' onDragStart={drag} data-node='reader'>
          <span>{t('components.pipeline.readerNode')}</span>
        </div>
      </div>
      <div id='drawflow' onDrop={drop} onDragOver={allowDrop} ref={container}>
        <div css={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
          <Button type='link' onClick={clear}>
            {t('buttons.clear')}
          </Button>
          <Button type='primary' onClick={exportPipeline}>
            {t('buttons.export')}
          </Button>
        </div>
      </div>
    </Layout>
  )
}

export default Editor
