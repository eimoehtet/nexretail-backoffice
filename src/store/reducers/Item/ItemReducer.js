import { CREATE_ITEM, GET_ITEMS_FAIL, GET_ITEMS_START, GET_ITEMS_SUCCESS ,UPDATE_ITEM,
DELETE_ITEM_START,DELETE_ITEM_SUCCESS,DELETE_ITEM_FAIL
} from "../../actions/Item/actionTypes";

const initialState={
    items:[],
    item:null
}
const ItemReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATE_ITEM:
            return {
                ...state.items,
                item:action.payload,
               
            }
     
        case GET_ITEMS_SUCCESS:
            return {
                items:action.payload,
            }
        case UPDATE_ITEM:   
            return {
                ...state.items,
                item:action.payload,
            } 
       
        case DELETE_ITEM_SUCCESS:
            return {
                ...state.items,
                item:action.payload,
               
            }  
         
    default:
        return state;        
    }
}
export default ItemReducer;