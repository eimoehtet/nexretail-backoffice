import { Form, InputNumber,Button, Breadcrumb } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createCoupon } from "../../store/actions/Coupon/couponActions";

const CreateCoupon = () => {
    const [form] =Form.useForm();
    const token = useSelector(state=>state.auth.token);
    const dispatch=useDispatch();
    const onFinish = (values) => {
        const amount =values.amount;
        dispatch(createCoupon(amount,token));
        form.resetFields();
    }
    return (
        <>
        <Breadcrumb>
        <Breadcrumb.Item><Link to='/coupons'>Coupons</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <h1 style={{fontSize:'20px'}}>Create Coupon</h1>
        <Form 
        form={form}
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
        </>
    )
}
export default CreateCoupon;