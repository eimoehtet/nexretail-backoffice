import axios from "axios"
import { CREATE_PURCHASE, DELETE_PURCHASE, GET_PURCHASES, UPDATE_PURCHASE } from "./actionTypes"
import { api } from "../../../api/api"
const createPurchaseSuccess = (purchase) => {
    return {
        type : CREATE_PURCHASE,
        payload : purchase
    }
}
const updatePurchaseSuccess = (purchase) => {
    return {
        type : UPDATE_PURCHASE,
        payload : purchase
    }
}
const deletePurchaseSuccess = (id) => {
    return {
        type : DELETE_PURCHASE,
        payload : id
    }
}
const getPurchasesSuccess = (purchases) => {
    return {
        type : GET_PURCHASES,
        payload :purchases
    }
}
export const createPurchase = (obj,token) => {
    return dispatch => {
        console.log("Obj Action:",obj)
        axios.post(`${api}/purchases`,
        obj,
        {
            headers:{
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(createPurchaseSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const updatePurchase = (id,obj,token) => {
    return dispatch => {
        axios.put(`${api}/purchases/${id}`,
        obj,
        {
            headers:{
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(updatePurchaseSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const deletePurchase = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/purchases/${id}`,
        {
            headers:{
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(deletePurchaseSuccess(id))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const getPurchases = (token) => {
    return dispatch => {
        axios.get(`${api}/purchases`,
        {
            headers:{
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            console.log(res.data)
            dispatch(getPurchasesSuccess(res.data))
            
        }).catch(error=>{
            console.log(error)
        })
    }
}