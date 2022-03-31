import { Form, Input,Button,Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../store/actions/Category/categoryActions";
import './Category.css';
const CreateCategory = () => {
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const [form]=Form.useForm();
    const onFinish = (values) => {
        const name=values.name;
        dispatch(createCategory(name,token));
        form.resetFields();
      }
    return (
        <>
         <Breadcrumb>
        <Breadcrumb.Item><Link to='/categories'>Categories</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="h1">Create Category</h1>
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
            rules={[{ required: true, message: 'Please input category name!' }]}
            >
                <Input/>
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
export default CreateCategory;