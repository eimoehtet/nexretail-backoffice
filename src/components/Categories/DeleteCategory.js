import { Popconfirm, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, getCategories } from '../../store/actions/Category/categoryActions';

const DeleteCategory = (props) => {
  const dispatch = useDispatch();
  const token=useSelector(state=>state.auth.token);  

  const handleOk = () => {
     dispatch(deleteCategory(props.id,token));
    props.handleOk();
  };

  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      onConfirm={handleOk}
      onCancel={props.handleCancel}
    >
        {props.children}
    </Popconfirm>
  );
};
export default DeleteCategory;