import { CREATE_UNIT_FAIL, CREATE_UNIT_START, CREATE_UNIT_SUCCESS, DELETE_UNIT_FAIL, DELETE_UNIT_START, DELETE_UNIT_SUCCESS, GET_UNITS_FAIL, GET_UNITS_START, GET_UNITS_SUCCESS, UPDATE_UNIT_FAIL, UPDATE_UNIT_START, UPDATE_UNIT_SUCCESS } from "../../actions/Unit/actionTypes";

const initialState={
    units:[],
    unit:null
    
}
const UnitReducer = (state=initialState,action) => {
    switch(action.type){
       
        case GET_UNITS_SUCCESS:
            return{
                
                units:action.payload,
                
            } 
        
       
        case CREATE_UNIT_SUCCESS:
            return {
                ...state.units,
                unit:action.payload,
             
            }
       
       
        case UPDATE_UNIT_SUCCESS: 
            return {
                ...state.units,
                unit:action.payload,
                
            }
      
      
        case DELETE_UNIT_SUCCESS:
            return {
                ...state.units,
                unit:action.payload,
                
            }            
        default:
            return state;         
    }
}
export default UnitReducer;