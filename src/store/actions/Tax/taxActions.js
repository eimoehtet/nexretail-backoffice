import axios from "axios"
import { CREATE_TAX, DELETE_TAX, GET_TAXES, UPDATE_TAX } from "./actionTypes"
import { api } from "../../../api/api"

const createTaxSuccess = (tax) => {
    return {
        type : CREATE_TAX,
        payload : tax
    }
}
const updateTaxSuccess = (tax) => {
    return {
        type : UPDATE_TAX,
        payload : tax
    }
}
const deleteTaxSuccess = (id) => {
    return {
        type : DELETE_TAX,
        payload : id
    }
}
const getTaxesSuccess = (taxes) => {
    return {
        type : GET_TAXES,
        payload : taxes
    }
}
export const createTax = (obj,token) => {
    return dispatch => {
        axios.post(`${api}/taxes`,
        obj,
        {
            headers : {
                Authorization : "Bearer " + token
            }
        }).then(res=>{
            dispatch(createTaxSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const updateTax = (id,obj,token) => {
    return dispatch => {
        axios.put(`${api}/taxes/${id}`,
        obj,
        {
            headers : {
                Authorization : "Bearer " + token
            }
        }).then(res=>{
            dispatch(updateTaxSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const getTaxes = (token) => {
    return dispatch => {
        axios.get(`${api}/taxes`,
        {
            headers : {
                Authorization : "Bearer " + token
            }
        }).then(res=>{
            dispatch(getTaxesSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}
export const deleteTax = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/taxes/${id}`,
        {
            headers : {
                Authorization : "Bearer " + token
            }
        }).then(res=>{
            dispatch(deleteTaxSuccess(id))
        }).catch(err=>{
            console.log(err)
        })
    }
}