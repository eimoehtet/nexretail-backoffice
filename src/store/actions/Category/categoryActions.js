import axios from "axios"
import { CREATE_CATEGORY_FAIL, CREATE_CATEGORY_START, CREATE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL, DELETE_CATEGORY_START, DELETE_CATEGORY_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS, GET_CATEGORY_FAIL, GET_CATEGORY_START, GET_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_START, UPDATE_CATEGORY_SUCCESS } from "./actionTypes"
import {api} from '../../../api/api'

const createCategoryStart = () => {
    return {
        type:CREATE_CATEGORY_START
    }
}
const createCategorySuccess = (category) => {
    return {
        type:CREATE_CATEGORY_SUCCESS,
        payload:category
    }
}
const createCategoryFail = (error) => {
    return {
        type:CREATE_CATEGORY_FAIL,
        payload:error
    }
}

const updateCategoryStart = () => {
    return {
        type:UPDATE_CATEGORY_START
    }
}
const updateCategorySuccess = (category) => {
    return {
        type:UPDATE_CATEGORY_SUCCESS,
        payload:category
    }
}
const updateCategoryFail = (error) => {
    return {
        type:UPDATE_CATEGORY_FAIL,
        payload:error
    }
}

const getCategoriesStart =()=>{
    return {
        type:GET_CATEGORIES_START
    }
}

const getCategoriesSuccess = (categories) => {
    return {
        type:GET_CATEGORIES_SUCCESS,
        payload:categories
    }
}
const getCategoriesFail =(error)=>{
    return {
        type:GET_CATEGORIES_FAIL,
        payload:error
    }
}
const deleteCategoryStart = () => {
    return {
        type: DELETE_CATEGORY_START
    }
}
const deleteCategorySuccess = (category) => {
    return {
        type: DELETE_CATEGORY_SUCCESS,
        payload:category
    }
}
const deleteCategoryFail = () => {
    return {
        type: DELETE_CATEGORY_FAIL
    }
}
export const createCategory = (name,token) => {
    return dispatch => {
        dispatch(createCategoryStart());
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
            dispatch(createCategoryFail(error));
        })
    }
}

export const getCategories = (token) => {
    return dispatch => {
        dispatch(getCategoriesStart());
        axios.get(`${api}/categories`,{
            headers:{
                Authorization:'Bearer '+token
            }
        }).then(res=>{
            console.log("data:",res.data);
            dispatch(getCategoriesSuccess(res.data));
        }).catch(error=>{
            dispatch(getCategoriesFail(error));
        })
    }

}

export const updateCategory = (name,token,id) => {
    return  dispatch =>{
        dispatch(updateCategoryStart());
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
            dispatch(updateCategoryFail(err));
        })
    }
}  
export const deleteCategory = (token,id) => {
    return dispatch => {
        dispatch(deleteCategoryStart());
        axios.delete(`${api}/categories/${id}`,{
            headers:{
                Authorization : "Bearer "+token
            }
        }).then(res=>{
            dispatch(deleteCategorySuccess(res.data));
        }).catch(error=>{
            dispatch(deleteCategoryFail());
        })
    }
}