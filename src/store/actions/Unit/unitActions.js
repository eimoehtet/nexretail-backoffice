import axios from "axios"
import { CREATE_UNIT_FAIL, CREATE_UNIT_START, CREATE_UNIT_SUCCESS, DELETE_UNIT_FAIL, DELETE_UNIT_START, DELETE_UNIT_SUCCESS, GET_UNITS_FAIL, GET_UNITS_START, GET_UNITS_SUCCESS, UPDATE_UNIT_FAIL, UPDATE_UNIT_START, UPDATE_UNIT_SUCCESS } from "./actionTypes"
import { api } from "../../../api/api"

const createUnitStart = () => {
    return {
        type:CREATE_UNIT_START
    }
}
const createUnitSuccess = (unit) => {
    return {
        type:CREATE_UNIT_SUCCESS,
        payload:unit

    }
}
const createUnitFail = (error) => {
    return {
        type:CREATE_UNIT_FAIL,
        payload:error
    }
}
const getUnitsStart = () => {
    return {
        type:GET_UNITS_START
    }
}
const getUnitsSuccess = (units) => {
    return {
        type:GET_UNITS_SUCCESS,
        payload:units
    }
}
const getUnitsFail = (error) => {
    return {
        type:GET_UNITS_FAIL,
        payload:error
    }
}
const updateUnitStart = () => {
    return {
        type:UPDATE_UNIT_START
    }
}
const updateUnitSuccess = (unit) => {
    return {
        type:UPDATE_UNIT_SUCCESS,
        payload:unit
    }
}
const updateUnitFail = (error) => {
    return {
        type : UPDATE_UNIT_FAIL,
        payload:error
    }
}
const deleteUnitStart = () => {
    return {
        type : DELETE_UNIT_START
    }
}
const deleteUnitSuccess = (unit) => {
    return {
        type : DELETE_UNIT_SUCCESS,
        payload:unit
    }
}
const deleteUnitFail = (error) => {
    return {
        type : DELETE_UNIT_FAIL,
        payload:error
    }
}
export const createUnit = (name,token)=>{
    return dispatch => {
        dispatch(createUnitStart());
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
            dispatch(createUnitFail(error));
        })
    }
}
export const getUnits = (token) => {
    return dispatch => {
        dispatch(getUnitsStart());
        axios.get (`${api}/units`,
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(getUnitsSuccess(res.data))
        }).catch(error=>{
            dispatch(getUnitsFail(error));
        })
    }
}
export const updateUnit = (id,name,token) => {
    return dispatch => {
        dispatch(updateUnitStart());
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
            dispatch(updateUnitFail(error));
        })

    }
}
export const deleteUnit = (id,token) => {
    return dispatch => {
        dispatch(deleteUnitStart());
        axios.delete(`${api}/units/${id}`,
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(deleteUnitSuccess(res.data))
        }).catch(error=>{
            dispatch(deleteUnitFail(error))
        })
    }
}