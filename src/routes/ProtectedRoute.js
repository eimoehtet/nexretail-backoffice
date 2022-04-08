
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (prop) => {

   const isLogin = useSelector(state=>state.auth.isLoggedIn);
   
    if(isLogin){
        return(
        
            prop.children
        )
    }else{
        return <Navigate to="/login" replace/>
    }
    
};
export default ProtectedRoute;