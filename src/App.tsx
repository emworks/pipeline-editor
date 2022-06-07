import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Editor from './app/screens/Editor'
import NotFound from './app/screens/404'
import Mainpage from './app/screens/Mainpage'

function App() {
  return (
    <>
      <Router basename={`${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='/editor/:id' element={<Editor />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
