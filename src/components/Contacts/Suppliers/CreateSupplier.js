import { Form, Input,Button,Breadcrumb, InputNumber } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSupplier } from "../../../store/actions/Supplier/supplierActions";
const CreateSupplier = () => {
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    
    const [form]=Form.useForm();
    const onFinish = (values) => {
        const name=values.name;
        const address=values.address;
        const mobile=values.mobile;
        const businessName=values.businessName;
        const balance=values.balance;
        const supplier={name,address,mobile,businessName,balance};
        dispatch(createSupplier(supplier,token)); 
        form.resetFields();
      }
    return (
        <>
         <Breadcrumb>
        <Breadcrumb.Item><Link to='/contacts/suppliers'>Customers</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="h1">Create Supplier</h1>
        <Form 
        form={form}
         name="basic"
         initialValues={{ remember: true }}
         labelCol={{ span: 4 }}
         wrapperCol={{ span: 8 }}
         onFinish={onFinish}
         autoComplete="off"
        >
         
            <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please input customer name!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: 'Please input  address!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Mobile"
            name="mobile"
            rules={[{ required: true, message: 'Please input your mobile number!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Business Name"
            name="businessName"
            rules={[{ required: true, message: 'Please input business name!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Balance"
            name="balance"
            rules={[{ required: true, message: 'Please input  balance!' }]}
            >
                <InputNumber style={{width:'200px'}}/>
            </Form.Item>
            <Form.Item
             wrapperCol={{ offset: 4}}
            >
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
        </>
    )
}
export default CreateSupplier;