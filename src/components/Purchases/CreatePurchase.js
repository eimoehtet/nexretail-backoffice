import { PlusOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Form, Select,Card } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createPurchase } from "../../store/actions/Purchase/purchaseActions";
import { getSuppliers } from "../../store/actions/Supplier/supplierActions";
import {getItems } from '../../store/actions/Item/itemActions';
import AddItem from "./AddItem";
import PurchaseItemTable from "./PurchaseItemTable";
const {Option} =Select;
const CreatePurchase = () => {
    const token = useSelector(state=>state.auth.token);
    const dispatch=useDispatch();
    const suppliers=useSelector(state=>state.suppliers.suppliers);
    const [isModalVisible,setIsModalVisible]=useState(false);
    const [purchaseItemsList,setPurchaseItemsList] = useState([]);
    const [selectedSupplier,setSelectedSupplier]=useState(null);
    useEffect(()=>{
      dispatch(getSuppliers(token));
      dispatch(getItems(token))
    },[])
    const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 4,
      },
    },
    wrapperCol: {
      xs: {
        span: 20,
      },
      sm: {
        span: 8,
      },
    },
  };
  const handleOK=()=>{
      setIsModalVisible(false)
  }
  const handleCancel=()=>{
      setIsModalVisible(false)
  }
  const showAddItemForm = () => {
    setIsModalVisible(true);
  }

  const addPurchaseItem=(item)=>{
    setPurchaseItemsList([...purchaseItemsList,item]);
  }
  const onChangeSupplier = (supplier)=>{
      setSelectedSupplier(supplier);
  }
 
  const onFinish =(values) => {
      const supplierId=selectedSupplier;
      const items=purchaseItemsList.map(item=>(
        {itemId:item.id,quantity:item.quantity,unitPrice:item.total,price:item.buyingPrice}
      )
      )
     
     const data={supplierId,
      purchaseItems:items}
     
    console.log("Purchase Data:",data);

  dispatch(createPurchase(data,token));
      
  }
    return (
        <>
        <Breadcrumb>
        <Breadcrumb.Item><Link to='/purchases'>Purchases</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Create Purchase</h1>
        <Form 
        {...formItemLayout}
        onFinish={onFinish}
        >
            <Form.Item
            label="Supplier"
            name="supplier"
            >
                <Select placeholder="select supplier" onChange={onChangeSupplier}>
                    {
                        suppliers.map((supplier)=>
                            <Option value={supplier.id}>{supplier.name}</Option> 
                        )  
                    }
                    
                </Select>
            </Form.Item>
           
            <Form.Item 
         
          label="Add Item"
            >
                <Button type="primary"  onClick={showAddItemForm}><PlusOutlined/>New</Button>
            </Form.Item>
            <Form.Item   wrapperCol={{ offset: 4}}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
        
        <AddItem addItem={addPurchaseItem} visible={isModalVisible} onOK={handleOK} onCancel={handleCancel}/>
        <PurchaseItemTable items={purchaseItemsList}/>            
        
        </>
    )
}
export default CreatePurchase;