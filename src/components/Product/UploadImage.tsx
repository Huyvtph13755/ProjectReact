import React from "react";
import styled from "styled-components";
import { Typography, Button, Input, Divider, Form } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { upload } from "../../api/image";

const { TextArea } = Input;

const UploadImage = () => {
  const [base64Image, setBase64Image] = React.useState("");
  const [uploadedImage, setUploadedImage] = React.useState("");

  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];
    // previewFile(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result);
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
  console.log(uploadedImage);

  return (
    <Container>
      <Form.Item name="imageAdd">
        <UploadWrapper>
          {uploadedImage ? (
            <ImagePreview
              style={{}}
              src={uploadedImage}
              name="image2"
              alt="Image"
            />
          ) : (
            <UploadIcon2>
              <PlusCircleOutlined style={{ fontSize: 30 }} />
              <input
                style={{ display: "none" }}
                type="file"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                // name="image"
                onChange={handleChangeImage}
              />
              <br />
              Thêm ảnh
            </UploadIcon2>
          )}
        </UploadWrapper>
      </Form.Item>
      <Form.Item name="shortDesc" labelCol={{ span: 24 }} label="Mô tả ngắn">
        <TextArea name="shortDesc" rows={4} />
      </Form.Item>
    </Container>
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

export default UploadImage;
