import { CREATE_COUPON, DELETE_COUPON, GET_COUPONS, UPDATE_COUPON } from "../../actions/Coupon/actionTypes"

const initialState = {
    coupons : [],
    coupon : null
}

const CouponReducer = (state=initialState,action) => {
    switch (action.type) {
        case CREATE_COUPON :
            return {
                ...state.coupons,
                coupon:action.payload
            }
        case GET_COUPONS :
            return {
                coupons:action.payload
            }
        case UPDATE_COUPON : 
            return {
                ...state.coupons,
                coupon:action.payload
            }
        case DELETE_COUPON :
            return {
                ...state.coupons,
                coupon:action.payload
            }        
        default:
            return state    
    }
}
export default CouponReducer;