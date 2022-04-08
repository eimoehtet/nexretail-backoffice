import { Modal,Form,Input,InputNumber,Button } from "antd"
import { getAllDiscounts, updateDiscount } from "../../store/actions/Discount/discountActions";
import { useSelector,useDispatch } from "react-redux";

const EditDiscount = (props) => {
    const [form]=Form.useForm();
    const token=useSelector(state=>state.auth.token);
    const dispatch =useDispatch();
    const onFinish =  (values)=>{
        const title=values.title;
        const percentage=values.percentage;
        const data={title,percentage};
         dispatch(updateDiscount(props.id,data,token));
        props.onOK();
        
       
        form.resetFields();
    }
    return (
        <Modal visible={props.visible} footer={null} destroyOnClose={true} onCancel={props.onCancel}>
             <Form 
            form={form}
         name="basic"
         initialValues={{ title:props.title, percentage:props.percentage }}
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
        </Modal>
    )
}
export default EditDiscount;