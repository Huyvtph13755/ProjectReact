import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Col,
  Row,
  Button,
  Form,
  Input,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../api/category";
type Props = {};
const CategoryAdd = (props: Props) => {
  
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const data = await createCategory(values);
      message.success("Tạo mới thành công");
      navigate("/admin/category");
    } catch (err) {
      message.error("Có lỗi xảy ra");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Thêm mới
        </Typography.Title>
      </Breadcrumb>
      <Form
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        labelCol={{ span: 24 }}
      >
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên danh mục"
              rules={[
                { required: true, message: "Tên danh mục không được trống" },
              ]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Tạo mới danh mục
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export default CategoryAdd;
