import axios from "axios"
import { CREATE_CUSTOMER, DELETE_CUSTOMER, GET_CUSTOMERS, UPDATE_CUSTOMER } from "./actionTypes"
import {api} from '../../../api/api'

const createCustomerSuccess = (customer) => {
    return {
        type : CREATE_CUSTOMER,
        payload : customer
    }
}
const updateCustomerSuccess= (customer) => {
    return {
        type : UPDATE_CUSTOMER,
        payload : customer
    }
}
const deleteCustomerSuccess = (id) => {
    return {
        type : DELETE_CUSTOMER,
        payload : id
    }
}
const getCustomersSuccess = (customers) => {
    return {
        type : GET_CUSTOMERS,
        payload : customers
    }
}
export const createCustomer = (obj,token) => {
    return dispatch => {
        axios.post(`${api}/customers`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(createCustomerSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const updateCustomer = (id,obj,token) => {
    return dispatch => {
        axios.put(`${api}/customers/${id}`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(updateCustomerSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const deleteCustomer = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/customers/${id}`,
        {
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(deleteCustomerSuccess(id))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const getCustomers = (token) => {
    return dispatch => {
        axios.get(`${api}/customers`,
        {
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(getCustomersSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}