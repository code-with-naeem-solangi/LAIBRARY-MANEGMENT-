import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { addBook } from "../store/indexslice";

const Books = () => {
  const reci = useDispatch();
  const selct = useSelector((s) => s.books)
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    reci(addBook(values))
    setIsModalOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="foam-contain">
        <div className="flx">
          <Button>BOOKS</Button>

          <Button onClick={showModal}>ADD BOOK</Button>
        </div>
        <Modal
          style={{ margin: "auto" }}
          footer={null}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <button className="btnsp">ADD BOOK</button>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="BookName"
              name="BookName"
              rules={[
                { required: true, message: "Please input your BookName!" },
              ]}
            >
              <Input  placeholder="Enter your BookName!"/>
            </Form.Item>
            <Form.Item
              label="Authar"
              name="Authar"
              rules={[{ required: true, message: "Please input your Authar!" }]}
            >
              <Input placeholder="Enter your Authar!"/>
            </Form.Item>
            <Form.Item
              label="Shalve"
              name="Shalve"
              rules={[{ required: true, message: "Please input your Shalve!" }]}
            >
              <Input  placeholder="Enter your Shalve!"/>
            </Form.Item>

            <div className="felex">
              <Form.Item>
                <Button type="primary" htmlType="reset" onClick={handleCancel}>
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add book
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
        <div>
         {/* <div>
         { 
          selct.map((t) =>{
            return(
              <div className="line" key={t.id}>
          <div className="colo">

            <span className="pading">JAVASCRIPT & JQUERY {t.BookName}</span>
            <span className="pading">AUTHAR : {t.Authar}</span>
            <span className="pading">SHALVE : {t.Shalve}</span>
          </div>
          <div className="colo">
            <Button>EDIT</Button>
            <Button>DELET</Button>
          </div>
        </div> 
            )
          })}
         </div> */}
        </div>
      </div>
    </>
  );
};
export default Books;
