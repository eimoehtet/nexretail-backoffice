import { InputNumber, Modal,Form,Select,Button } from "antd"
import { useState } from "react";
import { useSelector } from "react-redux";
const{Option}=Select;
const AddItem = (props) => {
    const [form] = Form.useForm();
    const items=useSelector(state=>state.items.items);
    const [selectedItem,setSelectedItem]=useState(null);
    const onChangeItem = (v,obj) => {
       setSelectedItem({id:obj.key,name:obj.value});
    }
    const onFinish = (values) => {
        const name=selectedItem.name;
        const id=selectedItem.id;
        const quantity=values.quantity;
        const buyingPrice=values.price;
        const total=values.unitPrice;
        const data={id,name,quantity,buyingPrice,total};
        props.addItem(data);
        props.onOK();
    }

    return (
        <Modal title="Add Item" visible={props.visible} onCancel={props.onCancel} footer={null} destroyOnClose={true}>
             <Form 
        form={form}
         name="basic"
         
         labelCol={{ span: 4 }}
         wrapperCol={{ span: 8 }}
         onFinish={onFinish}
         autoComplete="off"
        >
          <Form.Item
            label="Item"
            name="name"
            >
                <Select placeholder="select item" onChange={onChangeItem}>
                    {
                        items.map((item)=>
                            <Option key={item.id} value={item.name}>{item.name}</Option> 
                        )  
                    }
                    
                </Select>
            </Form.Item>
            <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: 'Please input  quantity!' }]}
            >
                <InputNumber style={{width:'200px'}}/>
            </Form.Item>
            <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Please input  price!' }]}
            >
                <InputNumber/>
            </Form.Item>
            <Form.Item
            label="UnitPrice"
            name="unitPrice"
            rules={[{ required: true, message: 'Please input unit price!' }]}
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
export default AddItem;