import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrand } from '../../store/actions/Brand/brandActions';
import { getBrandsList } from '../../store/actions/Brand/brandActions';
const DeleteBrand = (props) => {
  const dispatch = useDispatch();
  const token=useSelector(state=>state.auth.token);  
  
  const handleOk = () => {
     dispatch(deleteBrand(props.id,token));
    props.handleOk();
  };

  const handleCancel = () => {
   props.handleCancel();
  };
  return (
    <Popconfirm
      title="Are you sure you want to delete?"
      visible={props.visible}
      onConfirm={handleOk}
      onCancel={handleCancel}
    >
     {props.children}
    </Popconfirm>
  );
};
export default DeleteBrand;