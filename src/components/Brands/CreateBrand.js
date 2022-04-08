import { Breadcrumb, Button, Form ,Input} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createBrand } from "../../store/actions/Brand/brandActions";

const CreateBrand = () => {
    const [form] =Form.useForm();
    const token=useSelector(state=>state.auth.token)
    const dispatch = useDispatch();
    const onFinish = (values) => {
       const name=values.name;
       dispatch(createBrand(name,token)) 
       form.resetFields();
    }
    return (
        <>
          <Breadcrumb>
        <Breadcrumb.Item><Link to='/brands'>Brands</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <h1 style={{fontSize:'20px'}}>Create Brand</h1>
        <Form
         labelCol={{ span: 4 }}
         wrapperCol={{ span: 8 }}
         onFinish={onFinish}
         form={form}
        >
            <Form.Item
            label="Name"
            name="name"
            rules={
                [
                    require = true
                ]
            }
            >
                <Input/>
            </Form.Item>
            <Form.Item
            wrapperCol={{ offset: 4, span: 16 }}
            >
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
        </>
    )
}
export default CreateBrand;