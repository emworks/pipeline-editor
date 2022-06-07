import React from 'react'

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Editor from './app/screens/Editor'
import NotFound from './app/screens/404'

function App() {
  return (
    <>
      <Router basename={`${process.env.PUBLIC_URL}`}>
            <Routes>
              <Route path='/' element={<Navigate to='/editor' />} />
              <Route path='/editor' element={<Editor />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
      </Router>
    </>
  )
}

export default App
