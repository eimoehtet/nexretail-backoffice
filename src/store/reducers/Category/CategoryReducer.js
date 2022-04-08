import { CREATE_CATEGORY_SUCCESS, DELETE_CATEGORY_SUCCESS, GET_CATEGORIES_FAIL, GET_CATEGORIES_START, GET_CATEGORIES_SUCCESS,UPDATE_CATEGORY_FAIL, UPDATE_CATEGORY_START, UPDATE_CATEGORY_SUCCESS } from "../../actions/Category/actionTypes";

const initialState={
    categories:[],
    category:null,

}
const CategoryReducer = (state=initialState,action) => {
    switch(action.type){
     
        case GET_CATEGORIES_SUCCESS:
            return {
                categories:action.payload,
            } 
       
        case CREATE_CATEGORY_SUCCESS:
            return {
                categories:[...state.categories,action.payload]
            }  
        
        case UPDATE_CATEGORY_SUCCESS:
            return {
                ...state.categories,
                category:action.payload,
            }   
     
        case DELETE_CATEGORY_SUCCESS:
            return {
               categories : state.categories.filter(category=>action.payload !== category.id)
            }             
        default:
            return state;    
    }
}
export default CategoryReducer;