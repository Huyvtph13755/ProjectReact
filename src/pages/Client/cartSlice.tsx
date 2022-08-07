import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    add: (state: any, action: any) => {
      const exitsProduct = state.cart.find((item: any) => item._id === action.payload._id);
      if (!exitsProduct) {
        state.cart.push(action.payload);
      } else {
        exitsProduct.amount += 1;
      }
      state.total = state.cart.reduce((accu: any, item: any) => accu + (item.originalPrice - item.saleOffPrice) * item.amount,0)    
    },
    increase: (state: any, action: any) => {
      let currentItem = state.cart.find((c: any) => c._id == action.payload);
      currentItem.amount++;
      state.total = state.cart.reduce((accu: any, item: any) => accu + (item.originalPrice - item.saleOffPrice) * item.amount,0)
    },
    decrease: (state: any, action: any) => {
      let currentItem = state.cart.find((c: any) => c._id == action.payload);
      currentItem.amount--;
      if (currentItem.amount < 1) {
        const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
        if (confirm) {
          const removeItem = state.cart.filter(
            (item: any) => item._id !== action.payload
          );
          state.cart = [...removeItem];
        } else {
          currentItem.amount = 1;
        }
      }
      state.total = state.cart.reduce((accu: any, item: any) => accu + (item.originalPrice - item.saleOffPrice) * item.amount,0)
    },
    remove: (state: any, action: any) => {
      const confirm = window.confirm("Bạn có muốn xóa sản phẩm không?");
      if (confirm) {
        const removeItem = state.cart.filter(
          (item: any) => item._id !== action.payload
        );
        state.cart = [...removeItem];
      }
      state.total = state.cart.reduce((accu: any, item: any) => accu + (item.originalPrice - item.saleOffPrice) * item.amount,0)
    },
  },
});

export default cartSlice;