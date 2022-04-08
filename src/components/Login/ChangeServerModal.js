import { Form,Modal,Input,Button } from "antd";
const ChangeServerModal = (props) => {
    const onFinish = (values)=>{
        const server=values.name;
        console.log("server",server)
        localStorage.setItem('nexretailServer',server);
        props.onOk();
    }
    return (
        <Modal title="Basic Modal" destroyOnClose={true} visible={props.visible}  onCancel={props.onCancel} footer={null} >
        <Form
 name="basic"
 labelCol={{ span: 8 }}
 wrapperCol={{ span: 16 }}
 initialValues={{ name:props.name}}
 onFinish={onFinish}
 
 autoComplete="off"
>
 <Form.Item
   label="Name"
   name="name"
 >
   <Input />
 </Form.Item>
 <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
 
</Form>
 </Modal>
    )
}
export default ChangeServerModal;