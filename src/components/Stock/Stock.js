import { Table, Tag, Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInventories } from '../../store/actions/Stock/inventoryActions';
import './Stock.css'
const Stock = () => {
  const token=useSelector(state=>state.auth.token);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getInventories(token))
  },[])
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex:'name',
    key: 'name',
  },
  {
    title: 'Stock',
    dataIndex: ['inventory','quantity'],
    key: 'stock',
  },
  {
    title: 'Inventory Cost',
    dataIndex: ['inventory','inventoryCost'],
    key: 'inventoryCost',
  },
  {
    title: 'Retail Value',
    dataIndex: ['inventory','retailValue'],
    key:'retailValue'
    
  }
];

  const items = useSelector(state=>state.inventory.inventories);
  
  const inventories=items.map((inventory)=>(
    inventory.inventory
  ));

  const inventoryCostTotal = inventories.map(cost=>cost.inventoryCost).reduce((prev, curr) => prev + curr, 0);

  const retailTotal = inventories.map(retail=>retail.retailValue).reduce((prev, curr) => prev + curr, 0);
  
  return (
        <>
        <Table columns={columns} dataSource={items} pagination={false}/>
        <div className='total'><span style={{paddingRight:40}}>Total=</span>
        
        <span style={{padding:200}}>{inventoryCostTotal}</span> 
        <span style={{paddingLeft:30}}>{retailTotal}</span>
        </div>
         
       
        </>
    )
}
export default Stock;