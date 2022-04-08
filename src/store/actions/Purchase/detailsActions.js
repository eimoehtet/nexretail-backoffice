import axios from "axios"
import { GET_PURCHASE_BY_ID } from "./actionTypes"
import { api } from "../../../api/api"

const getPurchaseById = (purchase) => {
    return {
        type : GET_PURCHASE_BY_ID,
        payload : purchase
    }
}
export const getPurchaseDetail = (id,token) => {
    return async dispatch => {
         await axios.get(`${api}/purchases/${id}`,{
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(getPurchaseById(res.data));
        }
           
        ).catch(error=>{
            console.log(error)
        })
    }
}