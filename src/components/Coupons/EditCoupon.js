import { Modal,InputNumber,Form,Button } from "antd";
import { useSelector,useDispatch } from "react-redux";
import { getCoupons, updateCoupon } from "../../store/actions/Coupon/couponActions";
const EditCoupon = (props) => {
    const [form] =Form.useForm();
    const token = useSelector(state=>state.auth.token);
    const dispatch=useDispatch();
    const onFinish = async(values) => {
        const amount = values.amount;
        await dispatch(updateCoupon(props.id,amount,token));
        props.onOK();
        dispatch(getCoupons(token));
    }
    return (
        <Modal visible={props.visible} onCancel={props.onCancel} destroyOnClose={true} footer={null}>
        <Form 
        form={form}
        initialValues={{amount:props.amount}}
        labelCol={{span:4}}
        wrapperCol={{span:8}}
        onFinish={onFinish}
        >
            <Form.Item 
            label="Amount"
            name='amount'
            >
                <InputNumber style={{width:'200px'}}/>
            </Form.Item>
            <Form.Item wrapperCol={{offset:4}}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        </Modal>
    )
}
export default EditCoupon;