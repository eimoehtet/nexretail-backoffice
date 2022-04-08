import { Breadcrumb, Form ,Input,InputNumber,Button} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createTax } from "../../store/actions/Tax/taxActions";
import { Link } from "react-router-dom";

const CreateTax = () => {
    const [form] = Form.useForm();
    const token=useSelector(state=>state.auth.token);
    const dispatch=useDispatch();
    const onFinish = (values) => {
        const name= values.name;
        const percentage=values.percentage;
        const data={name,percentage};
        dispatch(createTax(data,token));
        form.resetFields();
    }
    return (
        <>
        <Breadcrumb>
        <Breadcrumb.Item><Link to='/setting/taxes'>Taxes</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <Form 
        form={form}
        labelCol={{span:4}}
        wrapperCol={{span:6}}
        onFinish={onFinish}
        >
            <Form.Item  
            label="Name"
            name='name'
            rules={[{ required: true, message: 'Please input  name!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item 
            label="Percentage"
            name='percentage'
            rules={[{ required: true, message: 'Please input percentage !' }]}
            >
                <InputNumber/>
            </Form.Item>
            <Form.Item wrapperCol={{offset:4}}>
                <Button type='primary' htmlType='submit'>Submit</Button>
            </Form.Item>
        </Form>
        </>
    )
}
export default CreateTax;