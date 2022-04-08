import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Table,Space, Breadcrumb, PageHeader, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTaxes } from '../../store/actions/Tax/taxActions';
import DeleteTax from './DeleteTax';
import EditTax from './EditTax';
const TaxList = () => {
  const token = useSelector(state=>state.auth.token);
  const dispatch = useDispatch();
  const [isModalVisible,setIsModalVisible] = useState(false);
  const [isConfirmVisible,setIsConfirmVisible]=useState(false);
  const [selectedIndex,setSelectedIndex] = useState(null);
  useEffect(()=>{
    dispatch(getTaxes(token))
  },[])

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
    title: 'Percent',
    dataIndex: 'percentage',
    key: 'percentage',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a onClick={()=>{showEditModal(record)}}><EditOutlined/> Edit</a>
        <DeleteTax id={selectedIndex?.id} onCancel={handleCancel} onOk={handleOk}>
        <a style={{color : 'red'}} onClick={()=>{showDeleteConfirm(record)}}><DeleteOutlined/>Delete</a>
        </DeleteTax>
        
      </Space>
    ),
  },
];
const showDeleteConfirm = (record) => {
setSelectedIndex(record);
setIsConfirmVisible(true);

}
const showEditModal = (record) => {
  setSelectedIndex(record);
  setIsModalVisible(true);
}
const handleCancel = () => {
  setIsModalVisible(false);
  setIsConfirmVisible(false)
}
const handleOk = () => {
  setIsModalVisible(false);
  setIsConfirmVisible(false);
}
    const taxes = useSelector(state=>state.taxes.taxes);
    return (
        <>
        <Breadcrumb>
        <Breadcrumb.Item>Taxes</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader 
        extra={[
       <Link to='/setting/taxes/new'><Button type='primary' htmlType='submit'><PlusCircleOutlined/> Add New</Button></Link> 
        ]}
        />
        <Table columns={columns} dataSource={taxes}  />
        <EditTax id={selectedIndex?.id} name={selectedIndex?.name} percentage={selectedIndex?.percentage} isVisible={isModalVisible} onCancel={handleCancel} onOk={handleOk}/>
        </>
    )
}
export default TaxList;