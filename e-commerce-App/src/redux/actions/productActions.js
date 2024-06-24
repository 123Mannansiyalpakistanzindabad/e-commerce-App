import { actionTypes } from "../contents/actionTypes"
export const setProducts = (products)=>{
return {
    type  : actionTypes.set_products,
    payload : products
}
}

export const selectedProducts = (products)=>{
    return {
        type  : actionTypes.selected_products,
        payload : products
    }
    }

    export const removeSelectedProducts = ()=>{
        return {
            type  : actionTypes.remove_selected_Products,
        }
        }