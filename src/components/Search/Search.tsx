import React, { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { AutoComplete as AutoCompleteAnt, Input } from "antd";
import { ProductType } from "../../types/product";
import { getAllCate } from "../../api/category";
type Props = {};
const Search: React.FC = () => {
  const [dataTable, setDataTable] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAllCate();
      setDataTable(data);
    };
    fetchData();
  }, []);
  const options = dataTable.map((item) => {
    return {
      value: item.name,
    };
  });
  return (
    <AutoCompleteAnt
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      style={{ width: 500 }}
      options={options}
    >
      <Input size="large" placeholder="Nhập tên sản phẩm cần tìm kiếm" />
    </AutoCompleteAnt>
  );
};

export default Search;
