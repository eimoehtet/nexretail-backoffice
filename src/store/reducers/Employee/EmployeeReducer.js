import { act } from "react-dom/test-utils";
import { CREATE_EMPLOYEE, DELETE_EMPLOYEE, GET_EMPLOYEES, UPDATE_EMPLOYEE } from "../../actions/Employee/actionTypes";

const initialState = {
    employees : [],
}
const EmployeeReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATE_EMPLOYEE:
            return {
               employees :[ ...state.employees,action.payload]
            }
        case GET_EMPLOYEES:
            return {
                employees:action.payload
            }

        case UPDATE_EMPLOYEE:
            return {
                employees:state.employees.map((emp)=>{

                    if(action.payload.id===emp.id){
                        return action.payload
                    }else{
                        return emp;
                    }
                })
            } 
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees:state.employees.filter(emp =>  action.payload !== emp.id )    
            }  
        default:
            return state         
    }
}
export default EmployeeReducer;