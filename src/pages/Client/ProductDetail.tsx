import { ShoppingCartOutlined } from "@ant-design/icons";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { getProInCate } from "../../api/category";
import { read } from "../../api/product";
import { ProductType } from "../../types/product";
import s from "./ProductDetail.module.css";

type Props = {};

const ProductDetail = (props: Props) => {
  const [product, setProduct] = useState<any>([]);
  const { _id } = useParams();
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(_id as string);
      setProduct(data);
    };
    getProduct();
  }, [_id]);
  console.log(product._id);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getProInCate(product.category);
      if (data.products.length > 4) {
        const newData = data.products.filter((item: any) => item.status == 0);
        const samePro = [];
        for (let i = 0; i < 5; i++) {
          samePro.push(newData[i]);
        }
        setData(samePro);
      }else{
        setData(data.products);
      }
    };
    fetchData();
  }, [product]);
  const dispatch = useDispatch();
  const addToCart = (item: any) => {
    dispatch({
      type: "cart/add",
      payload: { ...item, amount: 1 },
    });
    message.success("Thêm vào giỏ hàng thành công!");
  };

  return (
    <Container>
      <div>
        {/* tên */}
        <div className="font-normal text-xl">{product.name}</div>
      </div>
      <Items1>
        {/* Product img  */}
        <div>
          <div>
            <Img1 src={product.image} />
          </div>
        </div>
        {/* price  */}
        <div>
          <Pricee>
            <PriceColor>
              {(product.originalPrice - product.saleOffPrice).toLocaleString()}{" "}
              <u>đ</u>
            </PriceColor>
            <PriceC>
              {product.originalPrice} <u>đ</u>
            </PriceC>
          </Pricee>
          <div>Mô tả ngắn: {product.shortDesc}</div>
          <Items2 onClick={() => addToCart(product)}>
            <div>
              <Buutoon>Mua Hàng</Buutoon>
            </div>
            <CartItems>
              <div>
                <ShoppingCartOutlined
                  style={{
                    color: "#FF3945",
                    fontSize: "20px",
                    border: "2px solid #FF3945",
                    padding: "5px",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                />
              </div>
              <div className="font-normal">
                Thêm vào <br />
                giỏ hàng
              </div>
            </CartItems>
          </Items2>
        </div>
      </Items1>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
          <p className="text-lg tracking-tight text-gray-900">
            Sản phẩm cùng loại
          </p>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-8">
            {data &&
              data.map((item) => {
                return (
                  <div className="group relative">
                    <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                      <img
                        src={item.image}
                        alt="Front of men&#039;s Basic Tee in black."
                        className="w-6 object-center object-cover lg:w-44 m-auto"
                      />
                    </div>
                    <div>{item.name}</div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <Link
                            to={`/product/${item._id}`}
                            className="text-red-700 font-bold"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span>
                            {(
                              item.originalPrice - item.saleOffPrice
                            ).toLocaleString()}{" "}
                            <u className="text-xs">đ</u>
                          </Link>
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {item.originalPrice.toLocaleString()}{" "}
                        <u className="text-xs">đ</u>
                      </p>
                    </div>
                    <p className="mt-1 bg-gray-100 p-1.5 text-xs text-gray-700">
                      [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên
                      tới 1.000.000đ
                    </p>
                    <div className="flex justify-between">
                      <div className="flex items-center">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-black-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>First star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-black-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Second star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-black-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Third star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-black-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fourth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 text-gray-300 dark:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Fifth star</title>
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                      <p className="text-xs mt-2">30 đánh giá</p>
                    </div>
                  </div>
                );
              })}
            {/* more-pro */}
          </div>
        </div>
      </div>

      {/* đặc điểm nổi bật */}
      <div>
        <Items3>
          <NameDD>Đặc điểm nổi bật</NameDD>
          <div>
            <SpanN>{product.feature}</SpanN>{" "}
          </div>
        </Items3>
      </div>
      {/* docs */}
      <div>{product.description}</div>
    </Container>
  );
};
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const Items1 = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 15px;
  margin-top: 20px;
`;
const Img1 = styled.img`
  width: 350px;
  height: 350px;
`;
const Pricee = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const PriceColor = styled.div`
  color: red;
  font-size: 16px;
`;
const PriceC = styled.div`
  font-size: 12px;
  margin-left: 10px;
  margin-top: 6px;
`;
const Items2 = styled.div`
  display: flex;
  margin-top: 200px;
  align-items: center;
`;
const CartItems = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
const Buutoon = styled.button`
  padding: 7px 70px;
  color: white;
  font-size: 14px;
  background-color: #ff3945;
`;
const Items3 = styled.div`
  background-color: #f2f2f2;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px 0;
`;
const NameDD = styled.div`
  text-align: center;
  color: red;
  font-size: 18px;
`;
const SpanN = styled.span`
  padding-left: 20px;
  font-size: 14px;
  padding-bottom: 10px;
  padding-top: 10px;
`;
export default ProductDetail;
