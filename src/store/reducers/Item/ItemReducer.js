import { GET_ITEMS_FAIL, GET_ITEMS_START, GET_ITEMS_SUCCESS } from "../../actions/Item/actionTypes";

const initialState={
    items:[],
    error:null
}
const ItemReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_ITEMS_START:
            return{
                items:[],
                error:null
            }
        case GET_ITEMS_SUCCESS:
            return {
                items:action.payload,
                error:null
            }
        case GET_ITEMS_FAIL:
            return {
                items:[],
                error:action.payload
            }    
    default:
        return state;        
    }
}
export default ItemReducer;