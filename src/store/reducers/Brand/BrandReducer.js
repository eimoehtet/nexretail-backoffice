import { CREATE_BRAND, DELETE_BRAND, GET_BRANDS, UPDATE_BRAND } from "../../actions/Brand/actionTypes";

const initialState={
    brands:[],
}

const BrandReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATE_BRAND:
            return {
               brands:[...state.brands,action.payload]
            }
        case GET_BRANDS:
            return {
                brands : action.payload
            }
        case UPDATE_BRAND:
            return {
            
                brands : state.brands.map((brand)=>{
                    if(action.payload.id === brand.id){
                        return action.payload
                    }else{
                        return brand;
                    }
                }
                  )
            }
        case DELETE_BRAND:{
            return {
                
                brands : state.brands.filter(brand=>action.payload !== brand.id)
            }
        }        
        default:    
        return state;
    }
}
export default BrandReducer;