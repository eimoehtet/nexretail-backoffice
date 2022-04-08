import React, { useEffect, useState } from 'react';
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Breadcrumb,
} from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getCategories} from '../../store/actions/Category/categoryActions'
import {getUnits} from '../../store/actions/Unit/unitActions'
import { createItem } from '../../store/actions/Item/itemActions';
const { Option } = Select;

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
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

const CreateItem = () => {
  const [seletedCategory,setSelectedCategory] = useState(null);  
  const [seletedUnit,setSelectedUnit] = useState(null); 
  const [form] = Form.useForm();
  const dispatch=useDispatch();
  const token=useSelector(state=>state.auth.token);
  console.log(token)
  useEffect(()=>{
    dispatch(getCategories(token));
    dispatch(getUnits(token));
  },[])
  const categories=useSelector(state=>state.categories.categories);
  const units=useSelector(state=>state.units.units);
  const onFinish = (values) => {
    const name=values.name;
    const description=values.description;
    const categoryId=seletedCategory;
    const unitId=seletedUnit;
    const sku=values.sku;
    const unitPrice=values.unitPrice;
    const buyingPrice=values.buyingPrice;
    const data={
        name,
        description,
        categoryId,
        unitId,
        sku,
        unitPrice,
        buyingPrice
    }
    dispatch(createItem(data,token));
    form.resetFields();
  };

  const onChangeCategory = (item) => {
    setSelectedCategory(item);
  }
  const onChangeUnit = (index) => {
      setSelectedUnit(index);
  }
  return (
     
      <>
        <Breadcrumb>
        <Breadcrumb.Item><Link to='/items'>Items</Link></Breadcrumb.Item>
        <Breadcrumb.Item>New</Breadcrumb.Item>
        </Breadcrumb>
    <Form
      {...formItemLayout}
      form={form}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input item name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: 'Please input description!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="category"
        label="Category"
    
        rules={[
          {
            required: true,
            message: 'Please select category!',
          }
         
        ]}
      >
        
        <Select onChange={onChangeCategory} placeholder="select category">
           {categories.map((category)=>
           <Option  value={category.id}>{category.name}</Option>
            )}
          
        </Select>
      </Form.Item>

      <Form.Item
        name="unit"
        label="Unit"
        rules={[
          {
            required: true,
            message: 'Please select Unit!',
          },
        ]}
      >
        
        <Select onChange={onChangeUnit} placeholder="select unit">
            {units.map((unit)=>
                <Option value={unit.id}>{unit.name}</Option>
             ) }
          
        </Select>
      </Form.Item>

      <Form.Item
        name="sku"
        label="SKU"
        rules={[
          {
            required: true,
            message: 'Please input SKU!',
          },
        ]}
      >
          <Input/>
      </Form.Item>

      <Form.Item
        name="unitPrice"
        label="Unit Price"
        rules={[
          {
            required: true,
            message: 'Please input unit price!',
          },
        ]}
      >
        <InputNumber style={{width:355}}/>
      </Form.Item>

      <Form.Item
        name="buyingPrice"
        label="Buying Price"
        rules={[
          {
            required: true,
            message: 'Please input buying price!',
          },
        ]}
      >
        <InputNumber style={{width:355}}/>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};
export default CreateItem;