import React, { useState } from 'react'
import Home from './screens/Home'
import Counries from './screens/Counries'
import { Route, Routes } from 'react-router-dom'
import StatesContext from './store/StatesContext'

const App = () => {

  const [data,setData] = useState({
    from:{},
    destination:{}
  })

  const updateData= data => {
    setData(prev=>({
      ...prev,
      ...data
    }))
  }

  return (
    <StatesContext.Provider value={{data,updateData}}>
    <Routes>
      <Route path='/' exact Component={Home} />
      <Route path='/countries' exact Component={Counries} />
    </Routes>
    </StatesContext.Provider>
  )
}

export default App