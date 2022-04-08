import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Table, Tag, Space, Breadcrumb, PageHeader, Button, Select,DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDamages, getDamagesByIdBetweenDate } from '../../store/actions/Damage/damageActions';
import { Link } from 'react-router-dom';
import DeleteDamage from './DeleteDamage';
import { getItems } from '../../store/actions/Item/itemActions';
const {Option} = Select;
const {RangePicker}=DatePicker;
const DamageList = () => {
  const token= useSelector(state=>state.auth.token);
  const dispatch=useDispatch();
  const [isConfirmVisible,setIsConfirmVisible]=useState(false);
  const [selectedRecord,setSelectedRecord]=useState(null);
  const [selectedItem,setSelectedItem]=useState(null);
  const [selectedDate,setSelectedDate] = useState(null);
  useEffect(()=>{
    dispatch(getDamages(token));
    dispatch(getItems(token))
  },[])
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Item',
    dataIndex: ['item','name'],
    key: 'item',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <DeleteDamage id={selectedRecord?.id} handleOK={handleOK} handleCancel={handleCancel}>
        <a style={{color:'red'}} onClick={()=>{
          showDeleteConfirm(record)
        }}><DeleteOutlined/> Delete</a>
        </DeleteDamage>
      </Space>
    ),
  },
];

const showDeleteConfirm = (record) => {
  setSelectedRecord(record);
}
const handleOK= () =>{
  setIsConfirmVisible(false);

}
const handleCancel = () => {
  setIsConfirmVisible(false)
}
const onChangeItem = (item) => {
  setSelectedItem(item);
}
const onSearchDamage = () => {
   const itemId=selectedItem;
   const startDate=selectedDate[0]
   const endDate=selectedDate[1];
   const data={itemId,startDate,endDate};
   dispatch(getDamagesByIdBetweenDate(data,token));
 }
const onChangeDate = (moments,dateString) => {
  setSelectedDate([moments[0].format('YYYY-MM-DDTHH:mm:ss[Z]'),moments[1].format('YYYY-MM-DDTHH:mm:ss[Z]')]);
}

  const damages=useSelector(state=>state.damages.damages)
  const items=useSelector(state=>state.items.items);
    return (
        <>
        <Breadcrumb>
        <Breadcrumb.Item>Damages</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
        className='site-page-header'
        extra={[
          <div style={{paddingRight:300}}>
            <Select placeholder="select item" onChange={onChangeItem} style={{width:'200px'}}>
          {items.map((item)=>(
              <Option value={item.id}>{item.name}</Option>
          ))}
          
      </Select>,
     
          <RangePicker  onChange={onChangeDate}  />,
          <Button type='primary' htmlType='submit' onClick={onSearchDamage}>Load</Button>,
          </div>,
         <Link to='/inventory/damages/new'> <Button type='primary'><PlusCircleOutlined/> Add New</Button></Link>
        ]}
        />
        <Table columns={columns} dataSource={damages} />
        </>
    )
}
export default DamageList;