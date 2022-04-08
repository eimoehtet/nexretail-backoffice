import axios from "axios"
import { CREATE_LOST, DELETE_LOSTS, GET_LOSTS } from "./actionTypes"
import { api } from "../../../api/api"

const createLostSuccess = (lost) => {
    return {
        type : CREATE_LOST,
        payload : lost
    }
}
const getLostsSuccess = (losts) => {
    return {
        type : GET_LOSTS,
        payload : losts
    }
}
const deleteLostsSuccess = (id) => {
    return {
        type : DELETE_LOSTS,
        payload : id
    }
}

export const createLost = (obj,token) => {
    return dispatch => {
        axios.post(`${api}/losts`,
        obj,
        {
            headers : {
                Authorization : "Bearer " + token
            }
        }).then(res=>{
            dispatch(createLostSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const getLosts = (token) => {
    return dispatch => {
        axios.get(`${api}/losts`,
        {
            headers : {
                Authorization : "Bearer " + token
            }
        }).then(res=>{
            dispatch(getLostsSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const deleteLost = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/losts/${id}`,
        {
            headers : {
                Authorization : "Bearer " + token
            }
        }).then(
            dispatch(deleteLostsSuccess(id))
        ).catch(error=>{
            console.log(error)
        })
    }
}
export const getLostsByIdBetweenDate = (obj,token) => {
    return dispatch => {
        axios.post(`${api}/losts/lostBetweenDate`,
        obj,
        {
            headers : {
                Authorization : "Bearer " + token
            }
        }).then(res=>{
            dispatch(getLostsSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}