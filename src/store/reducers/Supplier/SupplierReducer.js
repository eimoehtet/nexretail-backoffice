import { CREATE_SUPPLIER, DELETE_SUPPLIER, GET_SUPPLIERS, UPDATE_SUPPLIER } from "../../actions/Supplier/actionTypes"

const initialState = {
    suppliers:[]
}

const SupplierReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATE_SUPPLIER:
            return {
                suppliers : [
                    ...state.suppliers,
                    action.payload
                ]
            }
        case GET_SUPPLIERS:
            return {
                suppliers : action.payload
            }  
        case UPDATE_SUPPLIER:
            return {
                suppliers : state.suppliers.map((supplier)=>{
                    if(action.payload.id === supplier.id){
                        return action.payload
                    }else{
                        return supplier
                    }
                })
            } 
        case DELETE_SUPPLIER:
            return {
                suppliers : state.suppliers.filter(supplier => action.payload !== supplier.id)
            } 
        default:
            return state            
    }
}
export default SupplierReducer;