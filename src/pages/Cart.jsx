import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetocart } from '../store/slice/CartSlice';

const Cart = () => {
    let {cart} = useSelector((state)=>state.getAddToCart)
    console.log(cart);

   let dispatch = useDispatch()

   const deleted =(item)=>{
    // alert("delete")
   dispatch(deletetocart(item))
   }
  return (
    <>
    <div className="container">
        <div className="row m-3">
          
          {
          cart&&cart.map((item,i)=>(
            <div className="col-3 m-3" key={i}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={item.strCategoryThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.strCategory}</h5>
                <p className="card-text">{item.strCategoryDescription}</p>
                <a href="#" className="btn btn-primary" onClick={()=>deleted(item.id)}>Delete</a>
              </div>
            </div>
            </div>

            ))
          }
        </div>
    </div>
    </>
  )
}

export default Cart