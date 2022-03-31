import axios from "axios"
import { GET_ITEMS_FAIL, GET_ITEMS_START, GET_ITEMS_SUCCESS } from "./actionTypes"
import { api } from "../../../api/api";
import { GET_CATEGORIES_START } from "../Category/actionTypes";
const getItemsStart = () => {
    return {
        type:GET_ITEMS_START,
    }
}
const getItemsSuccess = (items) => {
    return {
        type:GET_ITEMS_SUCCESS,
        payload:items
    }
}
const getItemsFail = (error) => {
    return {
        type:GET_ITEMS_FAIL,
        payload:error
    }
}
export const getItems=(token)=> {
    return dispatch =>{
        dispatch(getItemsStart());
        axios.get(`${api}/items`,{

            headers:{
                Authorization:"Bearer "+token
            }
        }).then(res=>{
            console.log("data",res.data);
           dispatch(getItemsSuccess(res.data));
    
        }).catch(err=>{
            dispatch(getItemsFail(err));
        })
    }
   
}