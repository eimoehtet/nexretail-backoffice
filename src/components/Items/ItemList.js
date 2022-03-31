import { Table,  Space ,Breadcrumb,PageHeader, Button} from 'antd';
import { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { getItems } from '../../store/actions/Item/item';
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
        <a>Edit</a>
        <a>Delete</a>
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
    return (
      <>
        <Breadcrumb>
        <Breadcrumb.Item>Items</Breadcrumb.Item>
        </Breadcrumb>
            <PageHeader  
        className="site-page-header"
        extra={[
          <Button type="primary">
            Add New
          </Button>
        ]}
      />
        <Table columns={columns} dataSource={items} />
        </>
    )
}
export default ItemList;