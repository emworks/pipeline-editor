/** @jsxImportSource @emotion/react */

import React, { FC, useEffect } from 'react'
import './Editor.css'

import api from 'src/api'
import Layout from 'src/app/Layout'
import { t } from 'i18next'
import { useAppDispatch } from 'src/app/hooks/redux'
import { useParams } from 'react-router-dom'
import { fetchPipeline } from 'src/app/store/reducers/pipelineReducer'

const Editor:FC<{}> = () => {
  const {id} = useParams()

  const dispatch = useAppDispatch()
  
  useEffect(() => {
    if (id) {
      dispatch(fetchPipeline(id))
    }
  }, [id])

  return (
    <Layout>
      <h2>{t('titles.editor')}</h2>
      <div css={{ textAlign: 'center' }}>
        Editor
      </div>
    </Layout>
  )
}

export default Editor
