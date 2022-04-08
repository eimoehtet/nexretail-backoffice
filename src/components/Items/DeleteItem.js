import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, getItems } from '../../store/actions/Item/itemActions';

const DeleteItem = (props) => {
  const dispatch = useDispatch();
  const token=useSelector(state=>state.auth.token);  

  const handleOk =async () => {
    await dispatch(deleteItem(props.id,token));
    dispatch(getItems(token))
    props.handleOk();
  };

  const handleCancel = () => {
    props.handleCancel();
  };
  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onConfirm={handleOk}
      onCancel={handleCancel}
    >
        {props.children}
    </Popconfirm>
  );
};
export default DeleteItem;