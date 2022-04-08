import { act } from "react-dom/test-utils"
import { CREATE_PURCHASE, DELETE_PURCHASE, GET_PURCHASES, GET_PURCHASES_BY_ID, UPDATE_PURCHASE } from "../../actions/Purchase/actionTypes"

const initialState = {
    purchases : []
}
const PurchaseReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATE_PURCHASE:
            return {
                purchases : [
                    ...state.purchases,action.payload
                ]
            }
        case GET_PURCHASES:
            return {
                purchases : action.payload
            } 
        case UPDATE_PURCHASE:
            return {
                purchases : state.purchases.map((purchase)=>{
                    if(action.payload.id === purchase.id){
                        return action.payload
                    }else{
                        return purchase
                    }
                })
            }
        case DELETE_PURCHASE:
            return {
                purchases : state.purchases.filter(purchase =>action.payload !== purchase.id )
            }
        default:
            return state    
    }
}
export default PurchaseReducer;