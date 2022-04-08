import { Form,Input,Button, Breadcrumb } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createEmployee } from "../../store/actions/Employee/employeeActions";
const CreateEmployee = () => {
    const [form]=Form.useForm();
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const onFinish = (values) => {
        const name=values.name;
        const username=values.username;
        const password=values.password;
        const data={name,username,password};
        dispatch(createEmployee(data,token));
        form.resetFields();
      };
    
    return (
        <>
         <Breadcrumb>
        <Breadcrumb.Item><Link to='/employees'>Employees</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="h1">Create Employee </h1>
        <Form
      form={form}
      name="basic"
    
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 8 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input unit name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input unit name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input unit name!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </>
    )
}
export default CreateEmployee;