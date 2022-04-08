import axios from "axios"
import { CREATE_DAMAGE, DELETE_DAMAGES, GET_DAMAGES, GET_DAMAGES_BY_ID_BETWEEN_DATE } from "./actionTypes"
import { api } from "../../../api/api"

const createDamageSuccess = (damage) => {
    return {
        type : CREATE_DAMAGE,
        payload:damage
    }
}

const getDamagesSuccess = (damages) => {
    return {
        type : GET_DAMAGES,
        payload : damages
    }
}
const deleteDamagesSuccess = (id) => {
    return {
        type : DELETE_DAMAGES,
        payload : id
    }
}


export const createDamage = (obj,token) => {
    return dispatch => {
        axios.post(`${api}/damages`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(createDamageSuccess(res.data))
        }).catch(error=>{
            console.log(error);
        })
    }
}

export const getDamages = (token) => {
    return dispatch => {
        axios.get(`${api}/damages`,
        {
            headers:{
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(getDamagesSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}

export const deleteDamages = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/damages/${id}`,
        {
            headers:{
                Authorization : "Bearer "+ token
            }
        }).then(
            dispatch(deleteDamagesSuccess(id))
        ).catch(error=>{
            console.log(error)
        })
    }
}
export const getDamagesByIdBetweenDate = (obj,token) => {
    return dispatch => {
        axios.post(`${api}/damages/damageBetweenDate`,
        obj,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(getDamagesSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}