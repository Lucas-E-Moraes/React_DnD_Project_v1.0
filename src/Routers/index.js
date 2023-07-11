import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Home from '../pages/Home'
import Books from '../pages/Books'
import Maps from '../pages/Maps'

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' Component={Home} exact />
          <Route path='/books' Component={Books} />
          <Route path='/maps'  Component={Maps}  />
      </Routes>
    </BrowserRouter>
  )
}

export default index