import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getApi } from '../store/slice/ApiFetchingSlice';
import ProductCard from './ProductCard';
import { addtocart } from '../store/slice/CartSlice';

const Product = () => {


  let { product:{categories}, status } = useSelector((state) => state.getProductApi)
  let sel = useSelector((state)=>state.getAddToCart)
 console.log(sel);
  // console.log(categories);
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getApi())
  }, [])

 const AddToCart=(item)=>{
  alert("added")
 dispatch(addtocart(item))
 }

  return (
    
    <>
      <div className="container">
        <div className="row">
          {
            categories && categories.map((item,i)=>(
              <div className="col-3" key={i}>
                <ProductCard data={item} btn={()=>{
                  AddToCart(item)
                }}/>

              </div>
              
            ))
          }

          {/* {
          product.length >0 && product.categories.map((item,i)=>{
            return(
              <div className="col-3" key={i}>
              </div>

            )
              
            })
          } */}
        </div>
      </div>
    </>
  )
}

export default Product