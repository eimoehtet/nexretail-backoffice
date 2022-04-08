import axios from "axios"
import { CREATE_ITEM,DELETE_ITEM_FAIL, DELETE_ITEM_START, DELETE_ITEM_SUCCESS, GET_ITEMS_FAIL, GET_ITEMS_START, GET_ITEMS_SUCCESS, UPDATE_ITEM } from "./actionTypes"
import { api } from "../../../api/api";

const createItemSuccess = (item) => {
    return {
        type:CREATE_ITEM,
        payload:item
    }
}
const updateItemSuccess = (item) => {
    return {
        type : UPDATE_ITEM,
        payload : item
    }
}

const deleteItemSuccess = (deleteItem) => {
    return {
        type:DELETE_ITEM_SUCCESS,
        payload:deleteItem
    }
}


const getItemsSuccess = (items) => {
    return {
        type:GET_ITEMS_SUCCESS,
        payload:items
    }
}

export const createItem = (obj,token) =>{
    
    return dispatch => {
        console.log('Object is:',obj)
        console.log('Token is:',token)
        axios.post(`${api}/items`,
         
             obj
            
         ,
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(createItemSuccess(res.data));
            
        }).catch(err=>{
            alert(err);
        })
    }
}
export const getItems=(token)=> {
    return dispatch =>{
        axios.get(`${api}/items`,{

            headers:{
                Authorization:"Bearer "+token
            }
        }).then(res=>{
           dispatch(getItemsSuccess(res.data));
    
        }).catch(err=>{
            console.log(err)
        })
    }
   
}
export const updateItem = (id,obj,token) => {
    return dispatch => {
        axios.put(`${api}/items/${id}`,
        obj,
        {
            headers:{
                Authorization : "Bearer " + token
            }
        }).then(res=>{
            dispatch(updateItemSuccess(res.data));
        }).catch(error=> {
            alert(error);
        })
    }
}
export const deleteItem = (id,token) => {
    return dispatch => {
       
        axios.delete(`${api}/items/${id}`,{
            headers:{
                Authorization : "Bearer " + token
            }
        }).then(res=>{
            dispatch(deleteItemSuccess(res.data))
        }).catch(error=> {
            console.log(error)
        })
    }
}