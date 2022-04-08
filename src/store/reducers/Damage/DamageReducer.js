import { CREATE_DAMAGE, DELETE_DAMAGES, GET_DAMAGES, GET_DAMAGES_BY_ID_BETWEEN_DATE } from "../../actions/Damage/actionTypes"

const initialState={
    damages : []
}
const DamageReducer = (state=initialState,action) => {
    switch (action.type){
        case CREATE_DAMAGE:
            return {
                damages:[
                    ...state.damages,action.payload
                ]
            }
        case GET_DAMAGES:
            return {
                damages:action.payload
            }
        case DELETE_DAMAGES:
            return {
                damages : state.damages.filter(damage=>action.payload !== damage.id)
            } 
        default:
            return state    
    }
}
export default DamageReducer;