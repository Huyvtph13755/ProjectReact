import { Table, Space, Switch, Image, Button } from "antd";
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
import { deleteProduct, getAll } from "../../api/product";
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
      const data = await getAll();
      const cate = await getAllCate();
      const dataT = data.data;
      const dataC = cate.data;
      for (let i = 0; i < dataT.length; i++) {
        for (let j = 0; j < dataC.length; j++) {
          if (dataT[i].category === dataC[j]._id) {
            dataT[i].category = dataC[j].name;
          }
        }
      }
      setDataTable(dataT);
    };
    fetchData();
  }, []);
  console.log(dataTable);
  const columns: any = [
    {
      title: "Ảnh",
      key:"image",
      dataIndex: "image",
      render: (text:string) => <Image src={text} />,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key:"name"
    },
    {
      title: "Giá niêm yết (đồng)",
      dataIndex: "originalPrice",
      key: "originalPrice"
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category"
    },
    {
      title: "Ẩn/Hiện",
      key: "status",
      dataIndex: "status",
      render: (text: number, record: any) => {
        console.log(text);
        
        return (
          <>
          <p>{text}</p>
          <Switch
            defaultChecked={text == 1 ? true : false}
          />
          </>
        );
      },
    },
    {
      title: "Thao tác",
      key: "action",
      dataIndex: "_id",
      render: (dataIndex) => (
        <Space size="middle">
          <Link to={`/admin/product/edit/${dataIndex}`}>
            <EditOutlined />
          </Link>
          <Button
            style={{ border: "none" }}
            onClick={async () => {
              const { data } = await deleteProduct(dataIndex);
              data &&
                setDataTable(
                  dataTable.filter((item) => item._id !== dataIndex)
                );
            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
  
  
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  return (
    <div>
      <Top>
        <TitleAdmin name={"Huy"} />
        <Link className="text-3xl" to="/admin/product/add">
          <PlusSquareOutlined />
        </Link>
      </Top>
      <Table
        /*rowSelection={rowSelection}*/ columns={columns}
        dataSource={dataTable}
      />
    </div>
  );
};

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 150px;
`;
export default Product;
