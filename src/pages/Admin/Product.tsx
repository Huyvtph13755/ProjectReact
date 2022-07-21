import { Table, Space, Switch, Image, Button, message } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleAdmin from "../../components/TitleAdmin/TitleAdmin";
import styled from "styled-components";
import { deleteProduct, getAll, update, updateStt } from "../../api/product";
import { useQuery } from "react-query";
import { getAllCate } from "../../api/category";
import { ProductType } from "../../types/product";
import { CategoryType } from "../../types/category";
interface DataType {
  status: number;
  _id: string;
  name: string;
  originalPrice: number;
  saleOffPrice: number;
  image: string;
  feature: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const Product: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [dataTable, setDataTable] = useState<ProductType[]>([]);
  const [cate, setCate] = useState<CategoryType[]>([]);
  // const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAll();
      setDataTable(data);
    };
    const fetchCate = async () => {
      const { data } = await getAllCate();
      setCate(data);
    };
    fetchCate();
    fetchData();
  }, []);
  console.log(dataTable);
  console.log(cate);
  const data = dataTable.map((item, index) => {
    return {
      key: index + 1,
      status: item.status,
      _id: item._id,
      name: item.name,
      originalPrice: item.originalPrice,
      saleOffPrice: item.saleOffPrice,
      image: item.image,
      feature: item.feature,
      category: item.category,
    };
  });
  const columns: any = [
    {
      title: "Ảnh",
      key: "image",
      dataIndex: "image",
      render: (text: string) => <Image width={100} src={text} />,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá niêm yết (đồng)",
      dataIndex: "originalPrice",
      key: "originalPrice",
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
      render: (text: string) => {
        let name;
        cate.map((item) => {
          if (item._id == text) {
            name = item.name;
          }
        });
        return <span>{name}</span>;
      },
    },
    {
      title: "Ẩn/Hiện",
      key: "status",
      dataIndex: "status",
      render: (text: number, record: any) => {
        return (
          <Switch
            defaultChecked={text == 1 ? true : false}
            onChange={() => {
              onChange(text == 0 ? false : true, record._id);
            }}
          />
        );
      },
    },
    {
      title: "Thao tác",
      key: "action",
      dataIndex: "_id",
      render: (text: string) => (
        <Space size="middle">
          <Link to={`/admin/product/edit/${text}`}>
            <EditOutlined />
          </Link>
          <Button
            style={{ border: "none" }}
            onClick={async () => {
              const confirm = window.confirm(
                "Bạn có chắc chắn muốn xóa không?"
              );
              if (confirm) {
                const { data } = await deleteProduct(text);
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
  const onChange = async (checked: boolean, _id: string) => {
    console.log(_id);
    const status = checked ? 0 : 1;
    const { data } = await updateStt({ status: status }, _id);
    setDataTable(dataTable.map((item) => (item._id == _id ? data : item)));
    message.success("Đổi trạng thái thành công");
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  return (
    <div>
      <Top>
        <TitleAdmin name={"Sản phẩm"} />
        <Link className="text-4xl" to="/admin/product/add">
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
export default Product;
