import React, { useState } from "react";
import "./index.css";
import { Button, Form, Input, Modal } from "antd";
import { useDispatch, useSelector} from "react-redux";
import { addShalve, shalvDelete } from "../store/indexslice";

const Shalve = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const recive = useDispatch()
  const selct = useSelector((s) => s.shalve)
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
    recive(addShalve(values))
    setIsModalOpen(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const dele = (t) =>{
    recive(shalvDelete(t))
  }
  return (
    <>
      <div className="foam-contain">
        <div className="flx">
          <Button>SHALVES</Button>

          <Button onClick={showModal}>ADD SHALVE</Button>
        </div>
        <Modal
          style={{ margin: "auto" }}
          footer={null}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <button className="btnsp">ADD SHALVE</button>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="ShalveName"
              name="ShalveName"
              rules={[
                { required: true, message: "Please input your ShalveName!" },
              ]}
            >
              <Input placeholder="Enter your ShalveName"/>
            </Form.Item>

            <div className="felex">
              <Form.Item>
                <Button type="primary" htmlType="reset" onClick={handleCancel}>
                  Cancel
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Add Shalve
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>

        <div>
          <table>
            <thead>
              <tr>
                <th>Shalve Name</th>
                <th>Action</th>
              </tr>
            </thead>
           {
            selct.map((t) =>{
              return(
                <tbody key={t.id}>
                <tr >
                  <td>{t.ShalveName}</td>
                  <td>
                    <Button>EDIT</Button>
                    <Button
                    onClick={() =>dele(t.id)}>DELET</Button>
                  </td>
                </tr>
              </tbody>
              )
            })
           }
            
          </table>
        </div>
      </div>
    </>
  );
};
export default Shalve;
