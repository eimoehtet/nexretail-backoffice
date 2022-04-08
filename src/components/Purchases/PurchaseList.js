import { Table, Button, Breadcrumb, PageHeader,Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchases } from '../../store/actions/Purchase/purchaseActions';
import { Link } from 'react-router-dom';
import { EyeOutlined } from '@ant-design/icons';
const PurchaseList = () => {
  const token= useSelector (state=>state.auth.token);
  const dispatch=useDispatch();
  useEffect(()=> {
    dispatch(getPurchases(token))
  },[]);
const columns = [
  {
    title: 'Date',
    dataIndex: 'purchaseTime',
    key: 'date',

  },
  {
    title: 'User',
    dataIndex: ['user','name'],
    key: 'user',
  },
  {
    title: 'Supplier',
    dataIndex: ['supplier','name'],
    key: 'supplier',
  },
  {
    title: 'Total',
    key: 'total',
    dataIndex: 'total',
  },
  {
    title: 'Detail',
    key: 'detail',
    render: (text, record) => (
      <Space size="middle">
        <a><Link to={'/purchases/details/'+record.id}><EyeOutlined/></Link></a>
        
      </Space>
    ),
  },
];

  const purchases = useSelector(state=>state.purchases.purchases);
  
    return (
        <>
        <Breadcrumb>
        <Breadcrumb.Item>Purchases</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
        className='site-page-header'
        extra={[
         <Link to='/purchases/new'> <Button type='primary'>Add New</Button></Link>
        ]}
        />
        <Table columns={columns} dataSource={purchases} />
        </>
    )
}
export default PurchaseList;