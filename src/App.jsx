import React from 'react'
import Home from './screens/Home'
import Counries from './screens/Counries'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/countries' exact Component={Counries} />
    </Routes>
  )
}

export default App