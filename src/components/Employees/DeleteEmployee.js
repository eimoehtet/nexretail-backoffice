import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee } from '../../store/actions/Employee/employeeActions';

const DeleteEmployee = (props) => {
  const dispatch = useDispatch();
  const token=useSelector(state=>state.auth.token);  
  const employees = useSelector(state=>state.employees.employees);  
  const handleOk =async () => {
    await dispatch(deleteEmployee(props.id,token));
    props.onOK();
  };

 
  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onConfirm={handleOk}
      onCancel={props.onCancel}
    >
        {props.children}
    </Popconfirm>
  );
};
export default DeleteEmployee;