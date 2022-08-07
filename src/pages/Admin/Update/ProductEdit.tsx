import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Col,
  Row,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Image,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, read, update } from "../../../api/product";
import { upload } from "../../../api/image";
import { PlusCircleOutlined } from "@ant-design/icons";
import { getAllCate } from "../../../api/category";
import { CategoryType } from "../../../types/category";
import { ProductType, ProductUpdateType } from "../../../types/product";
const { TextArea } = Input;
const { Option } = Select;
type Props = {};
const ProductEdit = (props: Props) => {
  const [base64Image, setBase64Image] = React.useState("");
  const [uploadedImage, setUploadedImage] = React.useState("");
  const [cate, setCates] = useState<CategoryType[]>([]);
  const { _id } = useParams();
  const [form] = Form.useForm();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(_id as string);
      form.setFieldsValue(data);

    };
    getProduct();
    const getCates = async () => {
      const { data } = await getAllCate();
      setCates(data);
    };
    getCates();
  }, []);
  console.log(form);

  const navigate = useNavigate();
  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];
    // previewFile(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result as string);
    };
  };
  const uploadImage = async (base64Image: string) => {
    try {
      const res = await upload(base64Image);
      const data = res.data;
      setUploadedImage(data.url);
    } catch (err) {
      console.log(err);
    }
  };
  const onFinish = async (values: any) => {
    const product = {
      _id: _id,
      name: values.name,
      originalPrice: values.originalPrice,
      saleOffPrice: values.saleOffPrice,
      image: values.image,
      feature: values.feature,
      category: values.category,
    };
    if (values.image2) {
      product.image = uploadedImage;
    }

    try {
      const data = await update(product);
      message.success("Sửa thành công");
      navigate("/admin");
    } catch (err) {
      message.error("Có lỗi xảy ra");
    }
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  console.log(form);

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
          <Col span={10}>
            <Container>
              <Form.Item name="image2">
                <UploadWrapper>
                  {uploadedImage ? (
                    <ImagePreview style={{}} src={uploadedImage} alt="Image" />
                  ) : (
                    <>
                      <Form.Item name="image" valuePropName="src">
                        <ImagePreview style={{ width: "500px" }} />
                      </Form.Item>
                      <UploadIcon2>
                        <PlusCircleOutlined style={{ fontSize: 30 }} />
                        <input
                          style={{ display: "none" }}
                          type="file"
                          accept="image/png, image/jpg, image/jpeg, image/gif"
                          onChange={handleChangeImage}
                        />
                        <br />
                        Thay ảnh
                      </UploadIcon2>
                    </>
                  )}
                </UploadWrapper>
              </Form.Item>
              <Form.Item
                name="shortDesc"
                labelCol={{ span: 24 }}
                label="Mô tả ngắn"
              >
                <TextArea name="shortDesc" rows={4} />
              </Form.Item>
            </Container>
          </Col>
          <Col span={14}>
            <Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên sản phẩm"
              initialValue={_id}
              rules={[
                { required: true, message: "Tên sản phẩm không được trống" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="originalPrice"
                  label="Giá gốc"
                  labelCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: "Giá sản phẩm không được để trống",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="saleOffPrice"
                  label="Giá giảm"
                  labelCol={{ span: 24 }}
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (
                          !value ||
                          Number(getFieldValue("originalPrice")) <= Number(value)
                        ) {
                          return Promise.reject(
                            new Error("Giá khuyến mại phải nhỏ hơn giá gốc")
                          );
                        }
                        return Promise.resolve();
                      },
                    }),
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Phân loại" name="category">
                  <Select style={{ width: "100%" }} size="large">
                    {cate &&
                      cate.map((item: any) => {
                        return <Option value={item._id}>{item.name}</Option>;
                      })}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="feature"
              labelCol={{ span: 24 }}
              label="Đặc điểm nổi bật"
            >
              <TextArea name="feature" />
            </Form.Item>
            <Form.Item
              name="description"
              labelCol={{ span: 24 }}
              label="Mô tả sản phẩm"
            >
              <TextArea name="description" rows={8} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cập nhật sản phẩm
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
const Container = styled.div`
  text-align: center;
`;

const Label = styled.div`
  text-align: left;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px dashed gray;
`;

const UploadIcon2 = styled.label`
  input {
    display: none;
  }
  cursor: pointer;
  color: #1890ff;
  &:hover {
    color: black;
    transition: 0.5s;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
`;
const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export default ProductEdit;
