import { Modal,Form,Input,Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUnits, updateUnit } from "../../store/actions/Unit/unitActions";

const EditUnit = (props) => {
    const dispatch=useDispatch();
    const token=useSelector(state=>state.auth.token);
    const onFinish =async (values) => {
       const name=values.name;
      await dispatch(updateUnit(props.id,name,token));
       props.onOk();
       dispatch(getUnits(token));
      
      };
    return(
        <Modal title="Basic Modal" destroyOnClose={true} visible={props.visible}  onCancel={props.onCancel} footer={null}>
             <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ name:props.name}}
      onFinish={onFinish}
      
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    )

}
export default EditUnit;