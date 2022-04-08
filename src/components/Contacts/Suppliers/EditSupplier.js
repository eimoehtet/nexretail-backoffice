import { Modal,Form, Button,Input,InputNumber } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomer } from "../../../store/actions/Customer/customerActions";
import { updateSupplier } from "../../../store/actions/Supplier/supplierActions";


const EditSupplier= (props) => {
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const [form] = Form.useForm();
     const onFinish = (values) => {
        const name=values.name;
        const address=values.address;
        const mobile=values.mobile;
        const businessName=values.businessName;
        const balance=values.balance;
        const supplier={name,address,mobile,businessName,balance};
        dispatch(updateSupplier(props.id,supplier,token));
         props.onOK();
    }
    return(
        <Modal title="Edit Supplier" destroyOnClose visible={props.visible}  onCancel={props.onCancel} footer={null}>
         <Form 
        form={form}
         name="basic"
         initialValues={{name:props.name,address:props.address,mobile:props.mobile,
            businessName:props.businessName,balance:props.balance }}
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
      </Modal>
    )
}
export default EditSupplier;