import { Form, Input, Button, Checkbox, Row ,Col} from 'antd';
import './login.css'
const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div className='main' style={{height:'100vh'}}>
    <div className='div'><h2 className='h2'>Nex Retail Backoffice Manager</h2></div>
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
      </div>
  );
};
export default Login;