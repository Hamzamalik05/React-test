import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Private from '../privateRoute/Private'

const Router = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route element={<Private />}>
        <Route path='home' element={<Home />}/> 
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
    </>
  )
}

export default Router