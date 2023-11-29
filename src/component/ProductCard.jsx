import React from 'react'

const ProductCard = (props) => {

 function getDesc (description,wordcount){

   let word = description.split("")
    let shortdesc = word.slice(0,wordcount).join(" ");
    return shortdesc

 }


  // console.log("hello",props.data)
  const { strCategory, strCategoryDescription, strCategoryThumb } = props.data
   let shortpara = getDesc(strCategoryDescription,100) 
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-3 mt-2">
            <div className="card" style={{ width: "15rem" }}>
              <img src={strCategoryThumb} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{strCategory}</h5>
                <p className="card-text">{shortpara}</p>
                <a href="#" className="btn btn-primary" onClick={props.btn}>Add To Cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductCard