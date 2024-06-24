import React, { useEffect } from "react";
import axios from "axios";
import {setProducts} from '../redux/actions/productActions'
import ProductComponent from "./productComponent";
import { useDispatch } from "react-redux";
const ProductListing = () => {
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        const response = await axios.get("https:/fakestoreapi.com/products")
        .catch((err) => {
            console.log('err: ', err);
            })
            dispatch(setProducts(response.data))
         console.log('response: ', response.data);
    }
    useEffect(() => {
        fetchProducts()
    }, [])
    return (

        <div className="row row-cols-1 row-cols-md-3 ">
            <ProductComponent />
        </div>
    )
}

export default ProductListing