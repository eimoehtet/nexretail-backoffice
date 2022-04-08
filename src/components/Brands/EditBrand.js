import { Form,Modal,Input,Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import {  updateBrand } from "../../store/actions/Brand/brandActions";
const EditBrand = (props) => {
    const token = useSelector(state=>state.auth.token);
    const dispatch =useDispatch();
    const onFinish =(values) => {
        const name=values.name;
        dispatch(updateBrand(props.id,name,token));
        props.onOK();
        
        
    }
    return (
        <Modal title="Basic Modal" destroyOnClose={true} visible={props.visible}  onCancel={props.onCancel} footer={null}>
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
export default EditBrand;