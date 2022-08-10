import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from "antd";
import cartSlice from "./cartSlice.js";
import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch()
  const increase = (_id: string) => {
    dispatch(cartSlice.actions.increase(_id))
  }
  const decrease = (_id: string) => {
    dispatch(cartSlice.actions.decrease(_id))
  }
  const remove = (_id: string) => {
    dispatch(cartSlice.actions.remove(_id))
  }
  return (
    <div className="flex h-full flex-col bg-white shadow-xl w-1/3 m-auto">
      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
        <div className="flex items-center justify-start">
          <Link to={`/`} className="flex items-center">
            <LeftOutlined className="text-black" />
            <p className="pt-2.5 text-black">Trở về</p>
          </Link>
          <h2
            className="text-lg font-medium text-gray-900 ml-32"
            id="slide-over-title"
          >
            Giỏ hàng
          </h2>
        </div>

        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cart.cart?.map((item: any) => {
                return (
                  <li className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between">
                          <p className="font-semibold">
                            {item.name}
                          </p>
                          <div className="flex">
                            <button
                              type="button"
                              className="font-bold text-black-600 hover:text-indigo-500"
                              onClick={() => remove(item._id)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <p className="font-semibold text-rose-800">
                            {(item.originalPrice - item.saleOffPrice).toLocaleString()} <u>đ</u>
                          </p>
                          <p className="ml-2 mt-1">{item.originalPrice.toLocaleString()} <u>đ</u></p>
                        </div>
                      </div>
                      <div className="flex text-sm">
                        <p className="mr-2">Chọn số lượng: </p>
                        <div className="cart-item quantity">
                          <button className="click-1" onClick={() => decrease(item._id)}>
                            -
                          </button>
                          <input disabled type="text" value={item.amount} />
                          <button className="click-2" onClick={() => increase(item._id)}>
                            +
                          </button>
                        </div>


                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Tổng tiền tạm tính</p>
          <p>{cart.total.toLocaleString()} <u>đ</u></p>
        </div>
        <div className="">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-sm text-white shadow-sm hover:bg-red-500"
          >
            TIẾN HÀNH ĐẶT HÀNG
          </a>
        </div>
        <div className="mt-2">
          <Link
            to={`/`}
            className="flex items-center justify-center rounded-md border border-transparent bg-neutral-50 px-6 py-3 text-sm text-red-600 shadow-sm hover:bg-neutral-100"
          >
            CHỌN THÊM SẢN PHẨM KHÁC
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
