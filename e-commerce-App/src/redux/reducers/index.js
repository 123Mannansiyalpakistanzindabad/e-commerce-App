import { combineReducers } from "redux";
import { productReducer, selectReducer } from "./productReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    selectOne  :selectReducer
})

export default reducers