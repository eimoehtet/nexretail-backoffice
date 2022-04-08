import { Form,Input,Button, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux"
import { getEmployees, updateEmployee } from "../../store/actions/Employee/employeeActions";
const EditEmployee = (props) => {
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const onFinish =async (values) => {
        const name=values.name;
        const username=values.username;
        const data={name,username};
        await dispatch(updateEmployee(props.id,data,token));
        props.onOK();
      };
     
    return (
        <>
        <Modal visible={props.visible} destroyOnClose={true} onOk={props.onOK} onCancel={props.onCancel} footer={null}>
        <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{name:props.name,username:props.username}}
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
        <Form.Item wrapperCol={{ offset: 4}}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Modal>
      </>
    )

}
export default EditEmployee;