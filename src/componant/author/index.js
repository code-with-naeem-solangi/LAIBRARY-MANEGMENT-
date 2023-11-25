import React, { useState } from "react";
import "./index.css";
import { Button, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addAuthar, autharDelete } from "../store/indexslice";

const Author = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
 const reci = useDispatch()
 const selct = useSelector((s) => s.authar)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    reci(addAuthar(values))
    setIsModalOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
   const delet = (t) =>{
   reci(autharDelete(t))
   }
  return (
    <>
      <div className="foam-contain">
        <div className="flx">
          <Button>AUTHORS</Button>

          <Button onClick={showModal}>ADD AUTHOR</Button>
        </div>
        <Modal
          style={{ margin: "auto" }}
          footer={null}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <button className="btnsp">ADD AUTHOR</button>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="AutharName"
              name="AutharName"
              rules={[
                { required: true, message: "Please input your AutharName!" },
              ]}
            >
              <Input placeholder="Enter your AutharName!"/>
            </Form.Item>
            <Form.Item
              label="Qualication"
              name="Qualication"
              rules={[
                { required: true, message: "Please input your Qualication!" },
              ]}
            >
              <Input placeholder="Enter your Qualication!"/>
            </Form.Item>
            <div className="felex">
              <Form.Item>
                <Button type="primary" htmlType="reset" onClick={handleCancel}>
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item>
              
                <Button type="primary" htmlType="submit">
                  Add Authar
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>

        <div>
        <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qualification</th>
                <th>Action</th>
              </tr>
            </thead>
          { selct.map ((t) =>{
            return(
              
              <tbody key={t.id}>
              <tr >
                <td>{t.AutharName}</td>
                <td>{t.Qualication}</td>
                <td>
                  <Button>EDIT</Button>
                  <Button 
                  onClick={() =>{
                    delet(t.id)
                  }}
                  >DELET</Button>
                </td>
              </tr>
          </tbody>
            
           
            )
          })}
          </table>
        </div>
      </div>
    </>
  );
};
export default Author;
