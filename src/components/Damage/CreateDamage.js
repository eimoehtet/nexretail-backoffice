import { Breadcrumb, Button, Form,InputNumber,Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDamage } from "../../store/actions/Damage/damageActions";
import { getItems } from "../../store/actions/Item/itemActions";

const{Option}=Select;

const CreateDamage = () => {
    const [form] = Form.useForm();
    const token=useSelector(state=>state.auth.token);
    const dispatch=useDispatch();
    const [selectedItem,setSelectedItem]=useState(null);
    useEffect(()=>{
        dispatch(getItems(token))
    },[])
    const items=useSelector(state=>state.items.items);
    const onChangeItem = (item) => {
        setSelectedItem(item);
    }
    const onFinish = (values) => {
        const itemId=selectedItem;
        const quantity=values.quantity;
        const data={itemId,quantity}
        dispatch(createDamage(data,token));
        form.resetFields();
    }
    return (
        <>
        <Breadcrumb>
        <Breadcrumb.Item><Link to='/inventory/damages'>Damages</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Create Damage</h1>
        <Form
        form={form}
        labelCol={{span:4}}
        wrapperCol={{span:4}}
        onFinish={onFinish}
        >
            <Form.Item
            label="Item"
            name="item"
            rules={[{ required: true, message: 'Please select item !' }]}
            >
                <Select placeholder="select item" onChange={onChangeItem}>
                    {items.map((item)=>(
                        <Option value={item.id}>{item.name}</Option>
                    ))}
                    
                </Select>
            </Form.Item>
            <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: 'Please input quantity!' }]}
            >
                <InputNumber/>
            </Form.Item>
            <Form.Item wrapperCol={{offset:4}}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
        </>
    )
}
export default CreateDamage;