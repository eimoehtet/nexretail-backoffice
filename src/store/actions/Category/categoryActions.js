import axios from "axios"
import {CREATE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL, DELETE_CATEGORY_START, DELETE_CATEGORY_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS,UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_START, UPDATE_CATEGORY_SUCCESS } from "./actionTypes"
import {api} from '../../../api/api'

const createCategorySuccess = (category) => {
    return {
        type:CREATE_CATEGORY_SUCCESS,
        payload:category
    }
}

const updateCategorySuccess = (category) => {
    return {
        type:UPDATE_CATEGORY_SUCCESS,
        payload:category
    }
}

const getCategoriesSuccess = (categories) => {
    return {
        type:GET_CATEGORIES_SUCCESS,
        payload:categories
    }
}
const deleteCategorySuccess = (category) => {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        payload:category
    }
}

export const createCategory = (name,token) => {
    return dispatch => {
        axios.post(`${api}/categories`,
        {
            name
        }
        ,{
            headers:{
                Authorization : "Bearer "+ token
            }  
        }).then(res=> {
            dispatch(createCategorySuccess(res.data));
        }).catch(error=>{
           console.log(error)
        })
    }
}

export const getCategories = (token) => {
    return dispatch => {
        axios.get(`${api}/categories`,{
            headers:{
                Authorization:'Bearer '+token
            }
        }).then(res=>{
            dispatch(getCategoriesSuccess(res.data));
        }).catch(error=>{
            console.log(error)
        })
    }

}

export const updateCategory = (name,token,id) => {
    return  dispatch =>{
        axios.put(`${api}/categories/${id}`,{
            name
        },
        {
            headers:{
                Authorization : "Bearer "+token
            }
        }
        ).then(res=>{
            dispatch(updateCategorySuccess(res.data));
        }).catch(err=>{
            console.log(err)
        })
    }
}  
export const deleteCategory = (id,token) => {
    return dispatch => {
       
        axios.delete(`${api}/categories/${id}`,{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(deleteCategorySuccess(id));
        }).catch(error=>{
            console.log(error)
        })
    }
}