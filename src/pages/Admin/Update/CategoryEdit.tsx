import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Form, Input, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { createCategory, readCate, updateCategory } from "../../../api/category";
type Props = {};
const CategoryEdit = (props: Props) => {
  const { _id } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    const getCates = async () => {
      const { data } = await readCate(_id as string);
      form.setFieldsValue(data);
    };
    getCates();
  }, []);
  const onFinish = async (values: any) => {
    const category = {
        _id: _id,
        name: values.name,
      };
    try {
      const data = await updateCategory(category);
      message.success("Sửa thành công");
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
          Sửa
        </Typography.Title>
      </Breadcrumb>
      <Form
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        labelCol={{ span: 24 }}
        form={form}
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
                Sửa danh mục
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
export default CategoryEdit;
