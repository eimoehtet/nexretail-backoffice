import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Button,PageHeader, Space ,Breadcrumb} from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUnit, getUnits } from '../../store/actions/Unit/unitActions';
import DeleteUnit from './DeleteUnit';
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
       
        <DeleteUnit id={selectedUnit?.id} handleCancel={handleCancel} handleOk={handleOk}>
        <a onClick={()=>{deleteUnitMethod(record)} } style={{color:'red'}}><DeleteOutlined />Delete
       </a>
        </DeleteUnit>
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
const [isPopConfirmvisible, setIsPopConfirmVisible] =useState(false);
 
 const handleOk = () => {
    setIsModalVisible(false);
    setIsPopConfirmVisible(false)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsPopConfirmVisible(false)
  };
  const showEditModal = (record)=> {
    setSelectedUnit(record);
    setIsModalVisible(true);
  }
  const deleteUnitMethod = (record) =>{
    setSelectedUnit(record);
    setIsPopConfirmVisible(true);
    
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
      
        <Table columns={columns} dataSource={units}   />
        
        <EditUnit id={selectedUnit?.id} name={selectedUnit?.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}/>
        
        </>
    )
}
export default UnitList;