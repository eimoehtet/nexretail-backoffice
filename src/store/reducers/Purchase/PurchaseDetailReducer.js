import { GET_PURCHASE_BY_ID } from "../../actions/Purchase/actionTypes";

const initialState = {
    purchase : null
}
const PurchaseDetailReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_PURCHASE_BY_ID:
            return {
                purchase : action.payload
            }
        default:
            return state    
    }
}
export default PurchaseDetailReducer;