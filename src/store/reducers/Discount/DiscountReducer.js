import { CREATE_DISCOUNT, DELETE_DISCOUNT, GET_DISCOUNTS, UPDATE_DISCOUNT } from "../../actions/Discount/actionTypes";

const initialState = {
    discounts : []
}

const DiscountReducer = (state = initialState,action) => {
    switch(action.type){
        case CREATE_DISCOUNT:
            return {
                
                discounts : [...state.discounts,action.payload]
            }
        case GET_DISCOUNTS:
            return {
                discounts : action.payload
                
            }
        
        case UPDATE_DISCOUNT:
            return {
                discounts : state.discounts.map((discount)=>{
                    if(action.payload.id === discount.id){
                        return action.payload;
                    }else{
                        return discount;
                    }
                })
            }
        case DELETE_DISCOUNT:
            return {
                discounts : state.discounts.filter(discount=>action.payload !== discount.id)
            }    
        default:
            return state   
        }    
    }

export default DiscountReducer;