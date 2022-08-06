import { Table, Space, Switch, Image, Button, message, Input } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
  SearchOutlined
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleAdmin from "../../components/TitleAdmin/TitleAdmin";
import styled from "styled-components";
import { deleteProduct, getAll, update, updateStt } from "../../api/product";
import { getAllCate } from "../../api/category";
import { ProductType } from "../../types/product";
import { CategoryType } from "../../types/category";
import type { ColumnsType, TableProps } from 'antd/es/table';
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
interface FilterDropdownProps {
  prefixCls: string;
  setSelectedKeys: (selectedKeys: string[]) => void;
  selectedKeys: string[];
  confirm: (closeDropdown?: any) => void;
  clearFilters: () => void;
}
const Product: React.FC = () => {
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
  let filters = cate.map((item) => {
    return {
      text: item.name,
      value: item._id
    }
  });
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
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }: FilterDropdownProps) => {
        return (
          <div style={{ padding: "10px" }}>
            <Input
              autoFocus
              placeholder="Nhập tên sản phẩm"
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
            ></Input>
            <Space style={{ marginTop: "20px" }}>
              <Button
                onClick={() => {
                  confirm();
                }}
                type="primary"
              >
                Oke
              </Button>

              <Button
                onClick={() => {
                  clearFilters();
                }}
                type="dashed"
              >
                Reset
              </Button>
            </Space>
          </div>
        );
      },
      onFilter: (value: any, record: any) => {
        return record.name.toLowerCase().includes(value.toLowerCase());
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
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
      filters: filters,
      onFilter: (value: string, record: any) => record.category.indexOf(value) === 0,
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
            defaultChecked={text == 0 ? true : false}
            onChange={() => {
              onChangeStt(text == 0 ? false : true, record._id);
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
  const onChangeStt = async (checked: boolean, _id: string) => {
    console.log(_id);
    const status = checked ? 0 : 1;
    const { data } = await updateStt({ status: status }, _id);
    setDataTable(dataTable.map((item) => (item._id == _id ? data : item)));
    message.success("Đổi trạng thái thành công");
  };
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
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
