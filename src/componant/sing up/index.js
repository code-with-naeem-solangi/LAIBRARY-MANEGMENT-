import { Button, Form, Input } from "antd";
import "./index.css";
import { useNavigate } from "react-router-dom";


 const SingUp = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
    localStorage.setItem("SingUp",JSON.stringify(values));
   navigate("/")
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
      <div className="foam-containr">
        <h1 className="centr">REGISTER ACCOUNT</h1>
        <Form
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="laibraryname"
      name="laibraryname"
      
      rules={[{ required: true, message: 'Please input your laibraryname!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="Email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item 
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </div>
    </>
  );
};
export default SingUp;
