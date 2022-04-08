import { CREATE_LOST, DELETE_LOSTS, GET_LOSTS } from "../../actions/Lost/actionTypes"

const initialState= {
    losts : []
}
const LostReducer = (state=initialState,action)=> {
    switch(action.type){
        case CREATE_LOST:
            return {
                losts :[...state.losts,action.payload]
            }
        case GET_LOSTS:
            return {
                losts : action.payload
            } 
        case DELETE_LOSTS:
            return {
                losts : state.losts.filter(lost=>action.payload !== lost.id)
            }    
        default:
            return state;       
    }
}
export default LostReducer;