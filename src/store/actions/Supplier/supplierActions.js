import axios from "axios"
import { CREATE_SUPPLIER, DELETE_SUPPLIER, GET_SUPPLIERS, UPDATE_SUPPLIER } from "./actionTypes"
import { api } from "../../../api/api"
const createSupplierSuccess = (supplier) => {
    return {
        type : CREATE_SUPPLIER,
        payload : supplier
    }
}
const getSuppliersSuccess = (suppliers) => {
    return {
        type : GET_SUPPLIERS,
        payload :suppliers
    }
}
const updateSupplierSuccess = (supplier) => {
    return {
        type : UPDATE_SUPPLIER,
        payload : supplier
    }
}
const deleteSupplierSuccess = (supplier) => {
    return {
        type : DELETE_SUPPLIER,
        payload : supplier
    }
}

export const createSupplier= (obj,token) => {
    return dispatch => {
        axios.post(`${api}/suppliers`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(createSupplierSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const updateSupplier = (id,obj,token) => {
    return dispatch => {
        axios.put(`${api}/suppliers/${id}`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(updateSupplierSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}

export const deleteSupplier = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/suppliers/${id}`,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(
            dispatch(deleteSupplierSuccess(id))
        ).catch(error=>{
            console.log(error)
        })
    }
}

export const getSuppliers = (token) => {
    return dispatch => {
        axios.get(`${api}/suppliers`,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(getSuppliersSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}