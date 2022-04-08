import { Modal,Form, Button,Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, updateCategory } from "../../store/actions/Category/categoryActions";
import { updateTax } from "../../store/actions/Tax/taxActions";

const EditTax = (props) => {
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
     const onFinish =(values) => {
        const name=values.name;
        const percentage=values.percentage;
        const data={name,percentage};
         dispatch(updateTax(props.id,data,token));
         props.onOk();
         
        
    }
    return(
        <Modal title="Edit Tax" destroyOnClose={true} visible={props.isVisible} onCancel={props.onCancel} footer={null}>
        <Form
        name="basic"
        initialValues={{name:props.name,percentage:props.percentage}}
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
            label="Percentage"
            name="percentage"
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
export default EditTax;