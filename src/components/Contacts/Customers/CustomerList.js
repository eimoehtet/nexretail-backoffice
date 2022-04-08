import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table,Space,Breadcrumb,PageHeader,Button } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../../../store/actions/Customer/customerActions";
import EditCustomer from "./EditCustomer";
import DeleteCustomer from "./DeleteCustomer";
const CustomerList = () => {
  const [selectedIndex,setSelectedIndex] = useState(null);
  const [isModalVisible,setIsModalVisible] = useState(false);
  const [isConfirmVisible,setIsConfirmVisible] = useState(false);
  const token= useSelector(state=>state.auth.token);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getCustomers(token));
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
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'mobile',
        },
        {
          title: 'Business Name',
          dataIndex: 'businessName',
          key: 'businessName',
        },
        {
          title: 'Balance',
          dataIndex: 'balance',
          key: 'balance',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a onClick={()=>{showEditModal(record)}}><EditOutlined/>Edit</a>
              <DeleteCustomer id={selectedIndex?.id} handleOK={handleOK} handleCancel={handleCancel}> 
              <a style={{color:'red'}} onClick={()=>{showDeleteConfirm(record)}}><DeleteOutlined/> Delete</a>
              </DeleteCustomer>
              
            </Space>
          ),
        },
      ];
      const showEditModal = (record) => {
        setSelectedIndex(record);
        setIsModalVisible(true);
      }
      const showDeleteConfirm = (record) => {
        setSelectedIndex(record);
        setIsConfirmVisible(true);
      }
      const handleOK = () => {
        setIsModalVisible(false);
        setIsConfirmVisible(false);
      };
      
      const handleCancel = () => {
        setIsModalVisible(false);
        setIsConfirmVisible(false);
      };
        
      const customers = useSelector(state=>state.customers.customers);
          return (
            <>
            <Breadcrumb>
            <Breadcrumb.Item>Customers</Breadcrumb.Item>
            </Breadcrumb>
                <PageHeader  
            className="site-page-header"
            extra={[
            <Link to='/contacts/customers/new'> <Button type="primary" >
                Add New
              </Button>
              </Link>
            ]}
    />
              <Table columns={columns} dataSource={customers} />
              <EditCustomer
              id={selectedIndex?.id} name={selectedIndex?.name} address={selectedIndex?.address}
              mobile={selectedIndex?.mobile} businessName={selectedIndex?.businessName} balance={selectedIndex?.balance}
              visible={isModalVisible} onOK={handleOK} onCancel={handleCancel}/>
              </>
          )
}
export default CustomerList;