import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLost } from '../../store/actions/Lost/lostActions';
const DeleteLost= (props) => {
  const dispatch = useDispatch();
  const token=useSelector(state=>state.auth.token);  
  
  const handleOk = () => {
    dispatch(deleteLost(props.id,token));
    props.handleOK();
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
export default DeleteLost;