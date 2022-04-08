import { Popconfirm, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUnit, getUnits } from '../../store/actions/Unit/unitActions';
import { useState } from 'react';

const DeleteUnit = (props) => {
  const dispatch = useDispatch();
  const token=useSelector(state=>state.auth.token);  

  const handleOk =async () => {
    await dispatch(deleteUnit(props.id,token));
    dispatch(getUnits(token))
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
export default DeleteUnit;