import axios from "axios"
import { useNavigate } from "react-router"
import { api } from "../../../api/api"
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOG_OUT } from "./actionTypes"

export const loginStart=()=>{
    return{
        type:LOGIN_START
    }
}
export const loginSuccess = (token) => {
    return{
        type:LOGIN_SUCCESS,
        token:token
    }
}
export const loginFail = (error) => {
    return{
        type:LOGIN_FAIL,
        error:error
    }
}
export const logout = () => {
    return {
        type:LOG_OUT
    }
}

export const login= (username,password) => {
    
    return async dispatch => {
        
    dispatch(loginStart());
     
    try {
        const res = await axios.post(`${api}/auth/admin/login`,{
            username,
            password
        });
        localStorage.setItem('token',res.data.accessToken);
        dispatch(loginSuccess(res.data.accessToken));
        console.log(res.data.accessToken);
    } catch (err) {
        dispatch(loginFail(err));
    }
   

    

        
    }
    
}