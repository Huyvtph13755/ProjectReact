import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../pages/Client/cartSlice';
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})
export default store;