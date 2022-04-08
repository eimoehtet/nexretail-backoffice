import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOG_OUT } from "../../actions/Login/actionTypes";
const initialState = {
    token: null,
    isLoggedIn:false,
    error: null,
    
};

const LoginReducer = (state=initialState,action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                token:null,
                isLoggedIn:false,
                error:null 
            }     
        case LOGIN_SUCCESS:
            return{
                token:action.token,
                isLoggedIn:true,
                error:null
            }    
        case LOGIN_FAIL:
            return {
                token:null,
                isLoggedIn:false,
                error:action.error
            }
        case LOG_OUT:
            return {
                token:null,
                isLoggedIn:false,
                error:null
            }  
          
        default:
            return state; 

    }
}
export default LoginReducer;