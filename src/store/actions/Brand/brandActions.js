import axios from "axios"
import { CREATE_BRAND, DELETE_BRAND, GET_BRANDS, UPDATE_BRAND } from "./actionTypes"
import { api } from "../../../api/api"

const getBrandsSuccess = (brands) => {
    return {
        type : GET_BRANDS,
        payload : brands
    }
}
const createBrandSuccess = (brand) => {
    return {
        type : CREATE_BRAND,
        payload : brand
    }
}
const updateBrandSuccess = (brand) => {
    return {
        type : UPDATE_BRAND,
        payload : brand
    }
}
const deleteBrandSuccess = (brand) => {
    return {
        type : DELETE_BRAND,
        payload : brand
    }
}
export const createBrand = (name,token) => {
    return dispatch => {
        axios.post(`${api}/brands`,
        {
            name
        },
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(createBrandSuccess(res.data));
        }).catch(error=>{
            console.log(error);
        })
    }
}

export const getBrandsList = (token) => {
    return dispatch => {
        axios.get (`${api}/brands`,
        {
            headers:{
                Authorization : "Bearer "+ token
            }
        }).then(res=>{
            dispatch(getBrandsSuccess(res.data))
        }).catch(err=>{
            console.log(err);
        })
    }
}

export const updateBrand = (id,name,token) => {
    return dispatch => {
        axios.put(`${api}/brands/${id}`,
        {
            name
        },
        {
            headers : {
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(updateBrandSuccess(res.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}

export const deleteBrand = (id,token) => {
    return dispatch => {
        axios.delete(`${api}/brands/${id}`,
        {
            headers : {
                Authorization : "Bearer "+ token
            }
        }).then(
            dispatch(deleteBrandSuccess(id))
        ).catch(error=>{
            console.log(error)
        })
    }
}