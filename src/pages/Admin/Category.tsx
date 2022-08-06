import { Table, Space, Switch, Image, Button, message } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleAdmin from "../../components/TitleAdmin/TitleAdmin";
import styled from "styled-components";
import { deleteCategory, getAllCate } from "../../api/category";
import { ProductType } from "../../types/product";
import { CategoryType } from "../../types/category";
interface DataType {
  name: string,
    _id: string,
    createdAt: Date,
    updatedAt: Date,
    _v: number
}

const Category: React.FC = () => {
  const [dataTable, setDataTable] = useState<ProductType[]>([]);
  const [cate, setCate] = useState<CategoryType[]>([]);
  useEffect(() => {
    const fetchCate = async () => {
      const { data } = await getAllCate();
      setDataTable(data);
    };
    fetchCate();
  }, []);
  const data = dataTable.map((item, index) => {
    return {
      key: index + 1,
      name: item.name,
      _id: item._id
    };
  });
  console.log(dataTable);
  
  const columns: any = [
    {
      title: "Tên danh mục",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Thao tác",
      key: "action",
      dataIndex: "_id",
      render: (text: string) => (
        <Space size="middle">
          <Link to={`/admin/category/edit/${text}`}>
            <EditOutlined />
          </Link>
          <Button
            style={{ border: "none" }}
            onClick={async () => {
              const confirm = window.confirm(
                "Bạn có chắc chắn muốn xóa không?"
              );
              if (confirm) {
                const { data } = await deleteCategory(text);
              data &&
                setDataTable(dataTable.filter((item) => item._id !== text));
                message.success("Xóa thành công")
              }
              
            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Top>
        <TitleAdmin name={"Danh mục"} />
        <Link className="text-4xl" to="/admin/category/add">
          <PlusSquareOutlined />
        </Link>
      </Top>
      <Table
        /*rowSelection={rowSelection}*/ columns={columns}
        dataSource={data}
      />
    </div>
  );
};

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default Category;
