import axios from "axios"
import { CREATE_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE } from "./actionTypes"
import { api } from "../../../api/api"

const getEmployeesSuccess = (employees) => {
    return {
        type : GET_EMPLOYEES,
        payload :employees
    }
}
const createEmployeeSuccess = (employee) => {
    return {
        type : CREATE_EMPLOYEE,
        payload : employee
    }
}
const updateEmployeeSuccess = (employee) => {
    return {
        type : UPDATE_EMPLOYEE,
        payload : employee
    }
}
const deleteEmployeeSuccess = (employee) => {
    return {
        type : DELETE_EMPLOYEE,
        payload : employee
    }
}
export const createEmployee = (obj,token) => {
    return dispatch => {
        axios.post(`${api}/auth/employee/signup`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=> {
            dispatch(createEmployeeSuccess(res.data));
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const updateEmployee = (id,obj,token) => {
    return dispatch => {
        axios.put(`${api}/users/${id}`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=> {
         
            dispatch(updateEmployeeSuccess(res.data));
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const deleteEmployee = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/users/${id}`,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=> {
            console.log("Deleted Response:",res)
            dispatch(deleteEmployeeSuccess(id));
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const getEmployees = (token) => {
    return dispatch => {
        axios.get(`${api}/users`,{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(getEmployeesSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}