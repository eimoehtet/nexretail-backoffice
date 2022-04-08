import { Table,Space, Breadcrumb, PageHeader, Button,Select ,DatePicker} from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getLosts, getLostsByIdBetweenDate } from '../../store/actions/Lost/lostActions';
import DeleteLost from './DeleteLost';
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getInstance } from 'antd/lib/message';
import { getItems } from '../../store/actions/Item/itemActions';
const {RangePicker} = DatePicker;
const {Option} = Select;
const LostList = () => {
  const token = useSelector(state=>state.auth.token);
  const dispatch=useDispatch();
  const [selectedRecord,setSelectedRecord] = useState(null);
  const [isConfirmVisible,setIsConfirmVisible]=useState(false);
  const [selectedItem,setSelectedItem] = useState(null);
  const [selectedDate,setSelectedDate]=useState(null);
  useEffect(()=>{
    dispatch(getLosts(token));
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
        <DeleteLost id={selectedRecord?.id} handleOK={handleOK} handleCancel={handleCancel}>
        <a style={{color:'red'}} onClick={()=>{
          showDeleteConfirm(record)
        }}><DeleteOutlined/> Delete</a>
        </DeleteLost>
      </Space>
    ),
  },
];
const losts = useSelector(state=>state.losts.losts)
const items = useSelector (state=>state.items.items)
const handleOK = () => {
  setIsConfirmVisible(false)
}

const handleCancel = () => {
  setIsConfirmVisible(false)
}

const showDeleteConfirm = (record) => {
  setSelectedRecord(record)
}
const onChangeItem = (item) => {
  setSelectedItem(item)
}
const onChangeDate = (moments,dateString) =>{
  setSelectedDate([moments[0].format('YYYY-MM-DDTHH:mm:ss[Z]'),moments[1].format('YYYY-MM-DDTHH:mm:ss[Z]')]);
}
const onSearchLosts = () => {
  const itemId=selectedItem;
  const startDate=selectedDate[0];
  const endDate=selectedDate[1];
  const data={itemId,startDate,endDate};
  console.log(data)
  dispatch(getLostsByIdBetweenDate(data,token));
}
    return (
        <>
        <Breadcrumb>
        <Breadcrumb.Item>Losts</Breadcrumb.Item>
        </Breadcrumb>
        <PageHeader
        className='site-page-header'
        extra={[
          <div style={{paddingRight:300}}>
            <Select placeholder = "select item" onChange={onChangeItem} style={{width:'200px'}}>
              {items.map((item)=>(
                 <Option value={item.id}>{item.name}</Option>
              ))}
               
            </Select>,
            <RangePicker onChange={onChangeDate}/>,
            <Button type='primary' htmlType='submit' onClick={onSearchLosts}>Load</Button>
          </div>,
         <Link to='/inventory/losts/new'><Button type='primary'><PlusCircleOutlined/>Add New</Button></Link>
        ]}
        />
        <Table columns={columns} dataSource={losts} />
        </>
    )
}
export default LostList;