import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

           let navigate = useNavigate()

       let emailCrtl= useRef()
       let passwordCrtl = useRef()
     const formHandler =(e)=>{
         e.preventDefault()
         let email = emailCrtl.current.value
         let password = passwordCrtl.current.value
       if(!email || !password){
             alert("Please fill the form")
             return
       }
        console.log("form submitted")
        localStorage.setItem('UserData',true)
             
        navigate("/home")
    
    }


  return (
   <>
   
       <div className="container mt-5">
        <div className="row">
         <div className="col-7 shadow-lg rounded">
   <form className='p-4' onSubmit={formHandler}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" ref={emailCrtl} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" ref={passwordCrtl} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
         </div>
        </div>
       </div>

   
   </>
  )
}

export default Login