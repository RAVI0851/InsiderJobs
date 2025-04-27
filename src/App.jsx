import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Applications from './Pages/Applications'
import ApplyJob from './Pages/ApplyJob'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/apply-job/:id' element={<ApplyJob />} />
      <Route path='/applications' element={<Applications />} />
      </Routes>
    </div>
  )
}

export default App