import { GET_INVENTORIES } from "../../actions/Stock/actionTypes"

const initialState={
    inventories: []
}
const InventoryReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_INVENTORIES:
            return {
                inventories : action.payload
            }
        default:
            return state    
    }
}
export default InventoryReducer;