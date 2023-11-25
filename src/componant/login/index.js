import "./index.css";
import {
  FacebookFilled,
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Divider, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/indexslice";

const Login = () => {
  const recive = useDispatch();
  const onFinish = (values) => {
    console.log("Success:", values);
    const singUPUser = JSON.parse(localStorage.getItem("SingUp" ));
    
    if (singUPUser) {
      if (
        singUPUser.email === values.email &&
        singUPUser.password === values.password
        ) {
          alert("wellcome")
          recive(loginUser(singUPUser));
        } else {
          alert("Invalid credentials");
        }
      } else {
        alert("user not found");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="foam-containr">
        <h1 className="centr">LOGIN FORM</h1>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
          <Divider style={{ borderColor: "black" }}>LOGIN WITH</Divider>
          <div className="size">
            <GoogleOutlined className="pointr" style={{ color: "red" }} />
            <TwitterOutlined className="pointr" style={{ color: "aqua" }} />
            <FacebookFilled className="pointr" style={{ color: "blue" }} />
            <GithubOutlined className="pointr" style={{ color: "black" }} />
          </div>
        </Form>
      </div>
    </>
  );
};
export default Login;
