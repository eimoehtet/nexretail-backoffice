import { act } from "react-dom/test-utils";
import { CREATE_CATEGORY_FAIL, CREATE_CATEGORY_START, CREATE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAIL, DELETE_CATEGORY_START, DELETE_CATEGORY_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS, GET_CATEGORY_FAIL, GET_CATEGORY_START, GET_CATEGORY_SUCCESS, UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_START, UPDATE_CATEGORY_SUCCESS } from "../../actions/Category/actionTypes";

const initialState={
    categories:[],
    category:null,
    one:null,
    error:null
}
const CategoryReducer = (state=initialState,action) => {
    switch(action.type){
       case GET_CATEGORIES_START:
           return {
               categories:[],
               error:null
           }
        case GET_CATEGORIES_SUCCESS:
            return {
                categories:action.payload,
                error:null
            } 
        case GET_CATEGORIES_FAIL:
            return {
                categories:[],
                error:action.payload
            }     
        case CREATE_CATEGORY_START:
            return {
                category:null,
                error:null
            }     
        case CREATE_CATEGORY_SUCCESS:
            return {
                category:action.payload,
                error:null
            }  
        case CREATE_CATEGORY_FAIL:
            return {
                category:null,
                error:action.payload
            }  
        case UPDATE_CATEGORY_START:
            return {
                category:null,
                error:null
            }      
        case UPDATE_CATEGORY_SUCCESS:
            return {
                category:action.payload,
                error:null
            }   
        case UPDATE_CATEGORY_FAIL:
            return {
                category:null,
                error:null
            }      
        case DELETE_CATEGORY_START:
            return {
                category:null,
                error:null
            } 
        case DELETE_CATEGORY_SUCCESS:
            return {
                category:action.payload,
                error:null
            }
        case DELETE_CATEGORY_FAIL:
            return {
                category:null,
                error:action.payload
            }             
        default:
            return state;    
    }
}
export default CategoryReducer;