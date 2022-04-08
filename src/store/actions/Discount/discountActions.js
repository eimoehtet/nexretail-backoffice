import axios from "axios"
import { CREATE_DISCOUNT, DELETE_DISCOUNT, GET_DISCOUNTS, UPDATE_DISCOUNT } from "./actionTypes"
import {api} from '../../../api/api'

const createDiscontSuccess = (discount) => {
    return {
        type : CREATE_DISCOUNT,
        payload : discount
    }
}
const getDiscountsSuccess = (discounts) => {
    return {
        type : GET_DISCOUNTS,
        payload : discounts
    }
}
const updateDiscountSuccess = (discount) => {
    return {
        type : UPDATE_DISCOUNT,
        payload : discount
    }
}
const deleteDiscountSuccess = (discount) => {
    return {
        type : DELETE_DISCOUNT,
        payload : discount
    }
}

export const createDiscount = (obj,token) => {
    return dispatch => {
        axios.post (`${api}/discounts`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+token
            }
        }
        ).then(res=>{
            dispatch(createDiscontSuccess(res.data))
        }).catch(error=>{
            console.log(error);
        })
    }
}
export const getAllDiscounts = (token) => {
    return dispatch => {
        axios.get(`${api}/discounts`,
        {
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(getDiscountsSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const updateDiscount = (id,obj,token) => {
    return dispatch => {
        axios.put(`${api}/discounts/${id}`,
        obj,
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(updateDiscountSuccess(res.data))
        }).catch(error=>{
            console.log(error);
        })
    }
}
export const deleteDiscount =(id,token) => {
    return dispatch => {
        axios.delete(`${api}/discounts/${id}`,
        {
            headers:{
                Authorization : "Bearer "+ token
            }
        }).then(
            dispatch(deleteDiscountSuccess(id))
        ).catch(error=>{
            console.log(error)
        })
    }
}