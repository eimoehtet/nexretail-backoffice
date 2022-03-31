import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Button,PageHeader, Space ,Breadcrumb} from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUnit, getUnits } from '../../store/actions/Unit/unitActions';
import EditUnit from './EditUnit';
import './Unit.css';
const UnitList = () => {
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
 
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a onClick={()=>{showEditModal(record)}}><EditOutlined/>Edit</a>
        <a onClick={()=>{deleteUnitMethod(record)}}><DeleteOutlined/>Delete</a>
      </Space>
    ),
  },
];
const dispatch=useDispatch();
const token=useSelector(state=>state.auth.token);
useEffect(()=>{
  dispatch(getUnits(token))
},[])
const units=useSelector(state=>state.units.units);
const [isModalVisible, setIsModalVisible] = useState(false);
const [selectedUnit,setSelectedUnit]=useState(null);
 
 const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showEditModal = (record)=> {
    setSelectedUnit(record);
    setIsModalVisible(true);
  }
  const deleteUnitMethod = (record) =>{
    setSelectedUnit(record);
    dispatch(deleteUnit(record.id,token));
    dispatch(getUnits(token));
  }
    return (
        <>
         <Breadcrumb>
        <Breadcrumb.Item>Units</Breadcrumb.Item>
        </Breadcrumb>
            <PageHeader  
        className="site-page-header"
        extra={[
         <Link to='/units/new'> <Button type="primary" >
            Add New
          </Button>
          </Link>
        ]}
      />
        <Table columns={columns} dataSource={units} />
        <EditUnit id={selectedUnit?.id} name={selectedUnit?.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}/>
        </>
    )
}
export default UnitList;