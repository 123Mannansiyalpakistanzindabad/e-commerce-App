import { actionTypes } from "../contents/actionTypes"
const initialState = {
    productss :[]
}
export const productReducer = (state = initialState,{type,payload})=>{
switch (type){
case  actionTypes.set_products : return {...state,productss : payload};
default : return state;
}
}
export const selectReducer = (state = initialState,{type,payload})=>{
    switch (type){
    case  actionTypes.selected_products : return {...state, ...payload };
    case  actionTypes.remove_selected_Products : return {};

    default : return state;
    }
    }