import { Form,Input,Button, Breadcrumb } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createUnit } from "../../store/actions/Unit/unitActions";
const CreateUnit = () => {
    const [form]=Form.useForm();
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const onFinish = (values) => {
        const name=values.name;
        dispatch(createUnit(name,token));
        form.resetFields();
      };
    
    return (
        <>
         <Breadcrumb>
        <Breadcrumb.Item><Link to='/units'>Units</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="h1">Create Unit </h1>
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
      <Form.Item wrapperCol={{ offset: 4}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </>
    )
}
export default CreateUnit;