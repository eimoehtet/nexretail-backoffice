import axios from "axios"
import { CREATE_UNIT_FAIL, CREATE_UNIT_START, CREATE_UNIT_SUCCESS, DELETE_UNIT_FAIL, DELETE_UNIT_START, DELETE_UNIT_SUCCESS, GET_UNITS_FAIL, GET_UNITS_START, GET_UNITS_SUCCESS, UPDATE_UNIT_FAIL, UPDATE_UNIT_START, UPDATE_UNIT_SUCCESS } from "./actionTypes"
import { api } from "../../../api/api"

const createUnitSuccess = (unit) => {
    return {
        type:CREATE_UNIT_SUCCESS,
        payload:unit

    }
}
const getUnitsSuccess = (units) => {
    return {
        type:GET_UNITS_SUCCESS,
        payload:units
    }
}

const updateUnitSuccess = (unit) => {
    return {
        type:UPDATE_UNIT_SUCCESS,
        payload:unit
    }
}

const deleteUnitSuccess = (unit) => {
    return {
        type : DELETE_UNIT_SUCCESS,
        payload:unit
    }
}

export const createUnit = (name,token)=>{
    return dispatch => {
        axios.post(`${api}/units`,
        {
            name
        },
        {
            headers:{
                Authorization:"Bearer "+token
            }
        }).then(res=>{
            dispatch(createUnitSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const getUnits = (token) => {
    return dispatch => {
        axios.get (`${api}/units`,
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(getUnitsSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const updateUnit = (id,name,token) => {
    return dispatch => {
        axios.put(`${api}/units/${id}`,
        {
            name
        },
        {
            headers:{
                Authorization:"Bearer "+token
            }
        }).then(res=>{
            dispatch(updateUnitSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })

    }
}
export const deleteUnit = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/units/${id}`,
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(deleteUnitSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}