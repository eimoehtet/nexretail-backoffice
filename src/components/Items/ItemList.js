import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table,  Space ,Breadcrumb,PageHeader, Button} from 'antd';
import { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {getItems } from '../../store/actions/Item/itemActions';
import DeleteItem from './DeleteItem';
import EditItem from './EditItem';
import './ItemList.css'
const ItemList = () => {

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
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Category',
    dataIndex: ['category','name'],
    key: 'category',
  },
  {
    title: 'Unit',
    key: 'unit',
    dataIndex:['unit','name']
  },
  {
    title: 'SKU',
    key: 'sku',
    dataIndex: 'sku',
  },
  {
    title: 'Stock',
    key: 'stock',
    dataIndex:['inventory','quantity'],
  },
  {
    title: 'Unit Price',
    key: 'unitPrice',
    dataIndex: 'unitPrice',
  },
  {
    title: 'Buying Price',
    key: 'buyingPrice',
    dataIndex: 'buyingPrice',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a onClick={()=>{showEditModal(record)}}><EditOutlined/>Edit</a>
        <DeleteItem handleCancel={handleCancel} handleOk={handleOk}>
        <a style={{color:'red'}} onClick={()=>{showDelete(record)}}> <DeleteOutlined/>Delete</a>
        </DeleteItem>
        
      </Space>
    ),
  },
];
  const token=useSelector(state=>state.auth.token);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getItems(token));
  },[]);
  const items=useSelector(state=>state.items.items);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [selectedItem,setSelectedItem] = useState(null);

  const showEditModal = (record) => {
    setSelectedItem(record);
    setIsModalVisible(true);
    
  };
  const showDelete = async(record) => {
    setSelectedItem(record);
    setIsConfirmVisible(true);
  }
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
    return (
      <>
        <Breadcrumb>
        <Breadcrumb.Item>Items</Breadcrumb.Item>
        </Breadcrumb>
            <PageHeader  
        className="site-page-header"
        extra={[
          <Button type="primary" >
           <Link to='/items/new'>Add New</Link> 
          </Button>
        ]}
      />
        <Table columns={columns} dataSource={items} />
        <EditItem id={selectedItem?.id} name={selectedItem?.name} description={selectedItem?.description}
        categoryId={selectedItem?.category.id} unitId={selectedItem?.unit.id}
        categoryName={selectedItem?.category.name} unitName={selectedItem?.unit.name} sku={selectedItem?.sku}
        unitPrice={selectedItem?.unitPrice} buyingPrice={selectedItem?.buyingPrice}
         visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}/>
        </>
    )
}
export default ItemList;