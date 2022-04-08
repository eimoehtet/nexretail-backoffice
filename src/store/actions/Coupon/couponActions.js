import axios from "axios"
import { CREATE_COUPON, DELETE_COUPON, GET_COUPONS, UPDATE_COUPON } from "./actionTypes"
import { api } from "../../../api/api"

const getCouponsSuccess = (coupons) => {
    return {
        type : GET_COUPONS,
        payload : coupons
    }
}
const createCouponSuccess = (coupon) => {
    return {
        type : CREATE_COUPON,
        payload : coupon
    }
}
const updateCouponSuccess = (coupon) => {
    return {
        type : UPDATE_COUPON,
        payload : coupon
    }
}
const deleteCouponSuccess = (coupon) => {
    return {
        type : DELETE_COUPON,
        payload : coupon
    }
}
export const createCoupon = (amount,token) => {
    return dispatch => {
        axios.post(`${api}/coupons`,
        {
            amount
        },
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }
        ).then(res=>{
            dispatch(createCouponSuccess(res.data))
        }).catch(error=>{
            console.log(error);
        })
    }
}

export const updateCoupon = (id,amount,token) => {
    return dispatch => {
        axios.put(`${api}/coupons/${id}`,{
            amount
        },
        {
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=> {
            dispatch(updateCouponSuccess(res.data))
        }).catch(error=> {
            console.log(error)
        })
    }
}

export const deleteCoupon = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/coupons/${id}`,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(deleteCouponSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}

export const getCoupons = (token) => {
    return dispatch => {
        axios.get(`${api}/coupons`,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(getCouponsSuccess(res.data))
        }).catch(err=>{
            console.log(err)
        })
    }
}