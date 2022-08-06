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
} from "antd";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../api/product";
import { upload } from "../../../api/image";
import { PlusCircleOutlined } from "@ant-design/icons";
import { getAllCate } from "../../../api/category";
import { CategoryType } from "../../../types/category";
const { TextArea } = Input;
const { Option } = Select;
type Props = {};
const ProductAdd = (props: Props) => {
  const [base64Image, setBase64Image] = React.useState("");
  const [uploadedImage, setUploadedImage] = React.useState("");
  const [cate, setCates] = useState<CategoryType[]>([]);
  useEffect(() => {
    const getCates = async () => {
      const { data } = await getAllCate();
      setCates(data);
    };
    getCates();
  }, []);
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
      console.log(data);
      setUploadedImage(data.url);
    } catch (err) {
      console.log(err);
    }
  };
  const onFinish = async (values: any) => {
    if (values.image == undefined) {
      values.image = "";
    } else {
      values.image = uploadedImage;
    }
    console.log("Success:", values);

    try {
      const data = await createProduct(values);
      message.success("Tạo mới thành công");
      // navigate("/admin");
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
          <Col span={10}>
            <Container>
              <Form.Item name="image">
                <UploadWrapper>
                  {uploadedImage ? (
                    <ImagePreview style={{}} src={uploadedImage} alt="Image" />
                  ) : (
                    <UploadIcon2>
                      <PlusCircleOutlined style={{ fontSize: 30 }} />
                      <input
                        style={{ display: "none" }}
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        onChange={handleChangeImage}
                      />
                      <br />
                      Thêm ảnh
                    </UploadIcon2>
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
                Tạo mới sản phẩm
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
export default ProductAdd;
