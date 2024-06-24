import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'
const ProductComponent = ()=>{
    const products = useSelector(state => state.allProducts.productss)
    const renderList = products.map(product=>{
        const {id,title,image,price,category} = product
      return(
        // <Link to = {`product/${id}`} >
         <div className="col">
        <div  className="card" style={{width: "20rem"}} key={id}>
                  <img src={image} className="card-img-top" alt="..."/>
                      <div className="card-body">
                          <h5 className="card-title">{title}--{price}</h5>
                          <p className="card-text"></p>
                          <a href={`product/${id}`} className="btn btn-primary">Go for detail</a>
                      </div> 
              </div>
              </div>
            // </Link>
      )
    })
    console.log('products:comp ', products);
    return (
       renderList
    )
}

export default ProductComponent