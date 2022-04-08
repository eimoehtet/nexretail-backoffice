import { Form, Input, Button, Checkbox, Row ,Col} from 'antd';
import './login.css';
import {useDispatch} from 'react-redux'
import { login } from '../../store/actions/Login/login';
import { useNavigate } from 'react-router';
import { SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ChangeServerModal from './ChangeServerModal';
const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [isModalVisible,setIsModalVisible]=useState(false);
  const onFinish = async (values) => {
    const username=values.username;
    const password=values.password;
    await dispatch(login(username,password));
    navigate('/')

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
 const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};
const changeServerIP = () =>{
  setIsModalVisible(true);
}
  return (
      <div className='main' style={{height:'100vh'}}>
    <div className='header'>
      <span style={{fontSize:22,paddingLeft:50}}>Nex Retail Backoffice Manager</span> <SettingOutlined className='setting' style={{fontSize:24}} onClick={changeServerIP} />
      </div>
      <Row justify='center' className='form-container'>
             <Col
               sm={18}
               md={16}
               xl={12}
             >
              <Row justify='center'>
                  <Col
                  xs={20}
                  sm={20}
                  md={20}
                  lg={8}
                  xl={14}
                  xxl={14}
                  >
                  <Form
                className='form'
                name="basic"
          
            labelCol={{ span: 6 }}
            wrapperCol={{
            span: 24,
             }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset:6,
          span: 10,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
                  </Col>
              </Row>
          
              </Col>
         
      </Row>
      <ChangeServerModal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}/>
      </div>
  );
};
export default Login;