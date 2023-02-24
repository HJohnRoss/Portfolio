import { useState } from 'react'
import Dashboard from './veiws/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Resume from './veiws/Resume'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/resume' element={<Resume/>}/>
    </Routes>
  )
}

export default App
