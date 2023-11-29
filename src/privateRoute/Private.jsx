import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Private = () => {
  
  let UserData = localStorage.getItem('UserData')
    return (

    <>
    {
        UserData?<Outlet />:<Navigate to='/' />
    }
    
    </>
   
  )
}

export default Private