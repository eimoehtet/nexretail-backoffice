import { CREATE_TAX, DELETE_TAX, GET_TAXES, UPDATE_TAX } from "../../actions/Tax/actionTypes"

const initialState = {
    taxes : []
}
const TaxReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATE_TAX:
            return {
                taxes : [...state.taxes,action.payload]
            }
        case GET_TAXES:
            return {
                taxes : action.payload
            }
        case UPDATE_TAX:
            return {
                taxes:state.taxes.map((tax)=>{
                    if(action.payload.id === tax.id){
                        return action.payload
                    }else{
                        return tax
                    }
                }
                  
                )
            }
        case DELETE_TAX:
            return {
                taxes : state.taxes.filter(tax=>action.payload !== tax.id)
            } 
        default:
            return state;               
    }
}
export default TaxReducer;