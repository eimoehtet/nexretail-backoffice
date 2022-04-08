import { Table, Space, PageHeader,Breadcrumb,Button, Tooltip } from 'antd';
import {DeleteOutlined, EditOutlined, PropertySafetyFilled} from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteBrand, getBrandsList } from '../../store/actions/Brand/brandActions';
import EditBrand from './EditBrand';
import DeleteBrand from './DeleteBrand';

const BrandList = () => {
const [selectedBrand,setSelectedBrand] = useState(null);
const token=useSelector(state=>state.auth.token);
const dispatch=useDispatch();
useEffect(()=>{
dispatch(getBrandsList(token));
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
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a onClick={()=>{showEditBrandModal(record)}}><EditOutlined />Edit</a>
        <DeleteBrand id={selectedBrand?.id} handleCancel={handleCancel} handleOk={handleOk}>
        <a onClick={()=>{deleteBrandHandler(record)} } style={{color:'red'}}><DeleteOutlined />Delete
       </a>
        </DeleteBrand>
      </Space>
    ),
  },
];
const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};
const [isModalVisible,setIsModalVisible]=useState(false);
const [isPopConfirmvisible, setIsPopConfirmVisible] =useState(false);
const showEditBrandModal = (record) => {
setSelectedBrand(record);
setIsModalVisible(true);
}

const deleteBrandHandler = async(record) => {
  setSelectedBrand(record);
  setIsPopConfirmVisible(true);
 
}
const brands = useSelector(state=>state.brands.brands);
    return (
        <>
          <Breadcrumb>
        <Breadcrumb.Item>Brands</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
         className="site-page-header"
         extra={[
          <Link to='/brands/new'> <Button type="primary" >
             Add New
           </Button>
           </Link>
         ]}
        />

        <Table columns={columns} dataSource={brands} />
       <EditBrand id={selectedBrand?.id} name={selectedBrand?.name} visible={isModalVisible} onOK={handleOk} onCancel={handleCancel}/>
        </>
    )
}
export default BrandList;