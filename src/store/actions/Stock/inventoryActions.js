import axios from "axios"
import { GET_INVENTORIES } from "./actionTypes"
import { api } from "../../../api/api"

const getInventoriesSuccess = (inventories) => {
    return {
        type : GET_INVENTORIES,
        payload : inventories
    }
}

export const getInventories = (token) => {
    return dispatch => {
        axios.get(`${api}/items`,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(getInventoriesSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}