import { CREATE_CUSTOMER, DELETE_CUSTOMER, GET_CUSTOMERS, UPDATE_CUSTOMER } from "../../actions/Customer/actionTypes"

const initialState = {
    customers : []
}

const CustomerReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATE_CUSTOMER:
            return {
                customers:[
                    ...state.customers,
                    action.payload
                ]
            }
        case GET_CUSTOMERS:
            return {
                customers : action.payload
            }   
        case UPDATE_CUSTOMER:
            return {
                customers : state.customers.map((customer)=>{
                    if(action.payload.id === customer.id){
                        return action.payload
                    }else{
                        return customer
                    }
                })
            }   
        case DELETE_CUSTOMER:{
            return {
                customers : state.customers.filter(customer=>action.payload !== customer.id)
            }
        }  
    default:
        return state       
    }
}
export default CustomerReducer;