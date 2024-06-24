import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {selectedProducts,removeSelectedProducts} from '../redux/actions/productActions'

import { useDispatch, useSelector } from "react-redux";
const ProductDetail = ()=>{
    const selectedOne = useSelector(state => state.selectOne)
    const {productId} = useParams()
    const dispatch = useDispatch()
    console.log('productId: ', productId);

    async function getDetail(){
      const getProduct = await axios.get(`https:/fakestoreapi.com/products/${productId}`)
      .catch(err=>console.log('err',err))
      dispatch(selectedProducts(getProduct.data))
      
      }
      useEffect(()=>{
          if(productId && productId !== '') getDetail()
  
                dispatch(removeSelectedProducts())
    },[productId])

    if(Object.keys(selectedOne).length === 0){
        return (
        <div>loading....</div>
        )}
        else return (
        <div  style={{width: "15rem"}}>
            {/* <div>{selectedOne.id}</div> */}
            <h4>{selectedOne.title}</h4>
          <div> category : {selectedOne.category}</div>
            
            <img src={selectedOne.image} className="card-img-top" />
        </div>
    )
}

export default ProductDetail