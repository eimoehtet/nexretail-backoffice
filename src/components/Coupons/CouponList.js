import { Table, Space ,Breadcrumb,PageHeader,Button} from 'antd';
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getCoupons } from '../../store/actions/Coupon/couponActions';
import { Link } from 'react-router-dom';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import EditCoupon from './EditCoupon';
import DeleteCoupon from './DeleteCoupon';

const CouponList = () => {
  const dispatch=useDispatch();
  const token=useSelector(state=>state.auth.token);
  const [selectedIndex,setSelectedIndex] = useState(null);
  const [isModalVisible,setIsModalVisible]=useState(false);
  const [isConfirmVisible,setIsConfirmVisible]=useState(false);
  useEffect(()=>{
    dispatch(getCoupons(token))
  },[])
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a onClick={()=>{showEditModal(record)}}><EditOutlined/> Edit</a>
        <DeleteCoupon id={selectedIndex?.id} onCancel={handleCancel} onOK={handleOK}>
        <a style={{color:'red'}} onClick={()=>{showDeleteConfirm(record)}}><DeleteOutlined/> Delete</a>
        </DeleteCoupon>
        
      </Space>
    ),
  },
];

const showEditModal = (record) => {
  setSelectedIndex(record);
  setIsModalVisible(true);

}
const handleOK = () => {
  setIsModalVisible(false);
  setIsConfirmVisible(false);
}

const handleCancel = () => {
  setIsModalVisible(false);
  setIsConfirmVisible(false);
}

const showDeleteConfirm = (record) => {
  setSelectedIndex(record);
  setIsConfirmVisible(true);
}
  const coupons=useSelector(state=>state.coupons.coupons);
    return (
        <>
        <Breadcrumb>
          <Breadcrumb.Item>
            Coupons
          </Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
           
          className="site-page-header"
          extra={[
           <Link to='/coupons/new'> <Button type="primary" >
              Add New
            </Button>
            </Link>
          ]}
        />

       
        <Table columns={columns} dataSource={coupons} />
        <EditCoupon id={selectedIndex?.id} amount={selectedIndex?.amount} visible={isModalVisible} onOK={handleOK} onCancel={handleCancel}/>
        </>
    )
}
export default CouponList;