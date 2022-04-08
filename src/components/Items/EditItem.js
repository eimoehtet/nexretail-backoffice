import { Form,Input,InputNumber,Button,Modal,Select } from "antd";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getCategories } from "../../store/actions/Category/categoryActions";
import { getItems, updateItem } from "../../store/actions/Item/itemActions";
import { getUnits } from "../../store/actions/Unit/unitActions";

const {Option} = Select;
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
  
const EditItem = (props) => {
  console.log("EditItem Component created.")
  const [form]=Form.useForm();
  const [seletedCategory,setSelectedCategory] = useState(null);  
  const [seletedUnit,setSelectedUnit] = useState(null); 
  const dispatch=useDispatch();
  const token=useSelector(state=>state.auth.token);
  useEffect(()=>{
    dispatch(getCategories(token));
    dispatch(getUnits(token));
    setSelectedCategory(props.categoryId);
    setSelectedUnit(props.unitId);
  },[props.categoryId,props.unitId])
  const categories=useSelector(state=>state.categories.categories);
  const units=useSelector(state=>state.units.units);
    const onChangeCategory = (item) => {
        setSelectedCategory(item);
      }
      const onChangeUnit = (index) => {
          setSelectedUnit(index);
      }
      const onFinish =async (values) => {
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
        await dispatch(updateItem(props.id,data,token));
      
        props.onOk()
        form.resetFields();
        dispatch(getItems(token));

      }
      const onCancel = () => {
       props.onCancel();
       form.resetFields();
      };
     
    return (
        <Modal title="Basic Modal" visible={props.visible} onCancel={onCancel} footer={null}>
            <Form
      {...formItemLayout}
      form={form}
      initialValues={{name:props.name,description:props.description,category:props.categoryName,
        unit:props.unitName,sku:props.sku,unitPrice:props.unitPrice,buyingPrice:props.buyingPrice}}
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
        
        <Select onChange={onChangeCategory} placeholder="select category" >
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
        
        <Select onChange={onChangeUnit} placeholder="select unit" >
            {units.map((unit)=>
                <Option value={unit.id} >{unit.name}</Option>
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
      </Modal>
    )
}
export default EditItem;