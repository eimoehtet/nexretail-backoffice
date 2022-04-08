import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table,Space, Breadcrumb, PageHeader, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getEmployees } from "../../store/actions/Employee/employeeActions";
import DeleteEmployee from "./DeleteEmployee";
import EditEmployee from "./EditEmployee";
const EmployeeList= () => {
  const [selectedIndex,setSelectedIndex]=useState(null);
  const token=useSelector(state=>state.auth.token);
  const dispatch = useDispatch();
  const employeeList = useSelector(state=>state.employees.employees);
  const [employees,setEmployees]=useState(employeeList);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  useEffect(()=>{
    dispatch(getEmployees(token));
  },[])
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
      },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },

        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a onClick={()=>{showEditModal(record)}}><EditOutlined/>Edit</a>
              <DeleteEmployee id={selectedIndex?.id} onOK={handleOK} onCancel={handleCancel}>
              <a style={{color:'red'}} onClick={()=> {showDeleteConfirm(record)}}><DeleteOutlined/> Delete</a>
              </DeleteEmployee>
              
            </Space>
          ),
        },
      ];
     
      const handleOK = ()=>{
        setIsConfirmVisible(false);
        setIsModalVisible(false);
      }
      const handleCancel = () => {
        setIsModalVisible(false);
        setIsConfirmVisible(false)
      };
     const showEditModal = (record) => {
        setSelectedIndex(record);
        setIsModalVisible(true);
     }
     const showDeleteConfirm = (record) => {
       setSelectedIndex(record);
       setIsConfirmVisible(true);
     }
 
          return (
              <>
              <Breadcrumb>
              <Breadcrumb.Item>Employees</Breadcrumb.Item>
              </Breadcrumb>
              <PageHeader
              className="site-page-header"
              extra={[
                <Link to='/employees/new'> <Button type="primary" >
                   Add New
                 </Button>
                 </Link>
               ]}
              />
              <Table columns={columns} dataSource={employeeList} />
              <EditEmployee id={selectedIndex?.id} name={selectedIndex?.name} username={selectedIndex?.username}  visible={isModalVisible} onOK={handleOK} onCancel={handleCancel}/>
              </>
          )
}
export default EmployeeList;