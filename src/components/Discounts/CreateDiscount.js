import { Form, Input,Button,Breadcrumb, InputNumber } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../../store/actions/Category/categoryActions";
import { createDiscount } from "../../store/actions/Discount/discountActions";
const CreateDiscount = () => {
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const [form]=Form.useForm();
    const onFinish = (values) => {
        const title=values.title;
        const percentage=values.percentage;
        const data={
            title,percentage
        }
        dispatch(createDiscount(data,token));
        form.resetFields();
      }
    return (
        <>
         <Breadcrumb>
        <Breadcrumb.Item><Link to='/discounts'>Discounts</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="h1">Create Discount</h1>
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
            label="Title"
            name="title"
            rules={[{ required: true, message: 'Please input title !' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
            label="Percentage"
            name="percentage"
            rules={[{ required: true, message: 'Please input percentage!' }]}
            >
                <InputNumber/>
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
export default CreateDiscount;