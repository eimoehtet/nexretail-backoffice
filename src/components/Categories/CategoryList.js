import { Table, Button,PageHeader,Breadcrumb, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getCategories } from '../../store/actions/Category/categoryActions';
import EditCategory from './EditCategory';
import { DeleteOutlined,  EditOutlined } from '@ant-design/icons';
import DeleteCategory from './DeleteCategory';
const CategoryList = () => {

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
        <DeleteCategory id={selectedCategory?.id} handleOk={handleOk} handleCancel={handleCancel} >
        <a style={{color:'red'}} onClick={()=>{deletecategory(record)}}><DeleteOutlined/>Delete</a>
        </DeleteCategory>
        
      </Space>
    ),
  },
];

const dispatch=useDispatch();
const token=useSelector(state=>state.auth.token);

useEffect(()=>{
  dispatch(getCategories(token));
},[]);
const categories=useSelector(state=>state.categories.categories);

const [isModalVisible, setIsModalVisible] = useState(false);
const [isConfirmVisible, setIsConfirmVisible] = useState(false);
const [selectedCategory,setSelectedCategory]=useState(null);

const showEditModal = (record) => {
  setSelectedCategory(record);
  setIsModalVisible(true);
};
const deletecategory =(record) => {
  setSelectedCategory(record);
 setIsConfirmVisible(true);
}

const handleOk = () => {
  setIsModalVisible(false);
  setIsConfirmVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
  setIsConfirmVisible(false);
};
    return (
      <>
      <Breadcrumb>
      <Breadcrumb.Item>Categories</Breadcrumb.Item>
      </Breadcrumb>
          <PageHeader  
      className="site-page-header"
      extra={[
       <Link to='/categories/new'> <Button type="primary" >
          Add New
        </Button>
        </Link>
      ]}
    />
        <Table columns={columns} dataSource={categories} />
        <EditCategory id={selectedCategory?.id} name={selectedCategory?.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}/>
        </>
    )
}
export default CategoryList;