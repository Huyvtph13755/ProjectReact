import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import Img2 from "../../assets/images/logo.png";
import FaceboookT from "../../assets/images/Rectangle.png";
import Google from "../../assets/images/Rectangle (1).png";
import { signup } from "../../api/auth";
import { authenticate } from "../../utils/localStorage";

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const {data: user} = await signup(values);
      message.success("Đăng ký thành công");
      navigate('/signin')
    } catch (err) {
      message.error("Có lỗi xảy ra");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Container2>
        <OutLog>
          <OutForm>
            <Form
              initialValues={{}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Typography.Title level={2} style={{ margin: 0 }}>
                Đăng ký
              </Typography.Title>
              <Row>
                <Col>
                  <Form.Item
                    name="email"
                    labelCol={{ span: 24 }}
                    label="Email"
                    rules={[
                      { required: true, type: 'email', message: "Email không hợp lệ" },
                    ]}
                  >
                    <Input size="large" style={{ width: "300px" }} />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    labelCol={{ span: 24 }}
                    label="Số điện thoại"
                    rules={[
                      { required: true, message: "Số điện thoại không được trống" },
                    ]}
                  >
                    <Input size="large" style={{ width: "300px" }} />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    labelCol={{ span: 24 }}
                    label="Mật khẩu"
                    rules={[
                      {
                        required: true,
                        message: "Mật khẩu không được trống",
                      },
                    ]}
                  >
                    <Input.Password size="large" />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "300px", height: '40px' , backgroundColor: '#FF424E'}}
                    >
                      Đăng ký
                    </Button>
                  </Form.Item>
                  <ContainerT>
                    <span>Hoặc đăng nhập bằng</span>
                    <Facebook>
                      <Items2>
                        <Items width={40} src={FaceboookT} />
                      </Items2>
                      <div>
                        <Items width={40} src={Google} />
                      </div>
                    </Facebook>
                  </ContainerT>
                </Col>
              </Row>
            </Form>
          </OutForm>
          <UploadWrapper>
            <Img src={Img2} />
          </UploadWrapper>
        </OutLog>
      </Container2>
    </div>
  );
};

const ContainerT = styled.div`
  text-align: center;
`;
const OutLog = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
`;
const OutForm = styled.div`
  background-color: white;
  padding: 30px 70px;
  border-radius: 20px 0 0 20px;
`;
const Items2 = styled.div`
  margin-right: 20px;
`;

const Facebook = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-top: 15px;
`;

const Items = styled.img``;
const Container2 = styled.div`
  background-color: #e5e5e5;
  min-height: 100vh;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 75px;
  background-color: #f8f8f8f8;
  border-radius: 0 20px 20px 0;
`;
const Img = styled.img`
  padding-top: 70px;
  padding-bottom: 70px;
`;

export default Signup;
