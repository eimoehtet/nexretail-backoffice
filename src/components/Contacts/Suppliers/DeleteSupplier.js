import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCustomer } from '../../../store/actions/Customer/customerActions';
import { deleteSupplier } from '../../../store/actions/Supplier/supplierActions';
const DeleteSupplier= (props) => {
  const dispatch = useDispatch();
  const token=useSelector(state=>state.auth.token);  
  
  const handleOk = async() => {
    await dispatch(deleteSupplier(props.id,token));
    props.handleOk();
  };
  
  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      visible={props.visible}
      onConfirm={handleOk}
      onCancel={props.handleCancel}
    >
     {props.children}
    </Popconfirm>
  );
};
export default DeleteSupplier;