import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table, Breadcrumb, Space, PageHeader, Button } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllDiscounts } from '../../store/actions/Discount/discountActions';
import DeleteDiscount from './DeleteDiscount';
import EditDiscount from './EditDiscount';
const DiscountList = () => {
  const [selectedIndex,setSelectedIndex]=useState(null);
  const token =useSelector(state=>state.auth.token);
  const dispatch=useDispatch();
  useEffect (()=>{
    dispatch(getAllDiscounts(token));
  },[])

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Percentage',
    dataIndex: 'percentage',
    key: 'percentage',
  },
 
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a onClick={()=>{showModal(record)}}><EditOutlined/> Edit </a>
        <DeleteDiscount id={selectedIndex?.id} onCancel={handleCancel} onOK={handleOk}>
        <a style={{color:'red'}} onClick={()=>{showDeleteConfirm(record)}}><DeleteOutlined/> Delete</a>
        </DeleteDiscount>
       
      </Space>
    ),
  },
];

const [isModalVisible, setIsModalVisible] = useState(false);
const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const showModal = (record) => {
    setSelectedIndex(record)
    setIsModalVisible(true);
  };
  const showDeleteConfirm = (record) => {
    setSelectedIndex(record);
    setIsConfirmVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
    setIsConfirmVisible(false)
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsConfirmVisible(false)
  };

const discounts = useSelector(state=>state.discounts.discounts);
    return (
      <>
       <Breadcrumb>
        <Breadcrumb.Item>Discounts</Breadcrumb.Item>

        </Breadcrumb>
      <PageHeader
      className="site-page-header"
      extra={[
       <Link to='/discounts/new'> <Button type="primary" >
          Add New
        </Button>
        </Link>
      ]}
        />
      
        <Table columns={columns} dataSource={discounts} />
        <EditDiscount id={selectedIndex?.id} title={selectedIndex?.title} percentage={selectedIndex?.percentage} visible={isModalVisible} onOK={handleOk} onCancel={handleCancel}/>
        </>
    )
}
export default DiscountList;