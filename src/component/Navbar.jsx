import React from 'react'
import '../App.css'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  let navigate = useNavigate()
  let UserData = localStorage.getItem('UserData')
  
  const Logout = () =>{
    localStorage.removeItem('UserData')
    navigate('/')
  }

  let {quantity} = useSelector((state)=>state.getAddToCart)
  return (
    <>
    <header className='bg-dark text-white '>
       <div className="container">
        <div className="row">
          <div className="col-3 align-item-center mt-2">
            <h3>Food-App</h3>
          </div>
          <div className="col-6 align-item-center">
            <ul className='d-flex mt-2 justify-content-center'>
              <NavLink to='/home'>Home</NavLink>
              <NavLink to='/cart'>Cart</NavLink>

              {
                !UserData &&(
                  <NavLink to='/'>Login</NavLink>
                )
              }
              {
                UserData &&(
                  <button className='btn btn-danger'onClick={Logout}>LogOut</button>

                )
              }
            </ul>
          </div>

        <div className="col-3 mt-2">
          <FaShoppingCart />
          <span>{quantity}</span>
        </div>

        </div>
       </div>
    </header>
    </>
  )
}

export default Navbar