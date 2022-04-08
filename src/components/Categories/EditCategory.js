import { Modal,Form, Button,Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, updateCategory } from "../../store/actions/Category/categoryActions";

const EditCategory = (props) => {
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);

     const onFinish =async (values) => {
        const name=values.name;
        await dispatch(updateCategory(name,token,props.id));
         props.onOk();
         dispatch(getCategories(token));
        
    }
    return(
        <Modal title="Edit Category" destroyOnClose visible={props.visible}  onCancel={props.onCancel} footer={null}>
        <Form
        name="basic"
        initialValues={{name:props.name}}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        onFinish={onFinish}
        autoComplete="off"
        
        >
            <Form.Item
            label="Name"
            name="name"
            >
                <Input/>
            </Form.Item>
            <Form.Item
             wrapperCol={{ offset: 4}}
            >
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
        </Form>
      </Modal>
    )
}
export default EditCategory;