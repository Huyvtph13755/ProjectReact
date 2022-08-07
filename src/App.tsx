import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeOverView from "./layouts/HomeOverView/HomeOverView";
import HeaderPage from './components/Header/Header'
import AdminOverView from "./layouts/AdminOverView/AdminOverView";
import Product from "./pages/Admin/Product";
import Category from "./pages/Admin/Category";
import Signin from "./pages/Auth/Signin";
import ProductAdd from "./pages/Admin/Add/ProductAdd";
import ProductEdit from "./pages/Admin/Update/ProductEdit";
import CategoryAdd from "./pages/Admin/Add/CategoryAdd";
import CategoryEdit from "./pages/Admin/Update/CategoryEdit";
import Signup from "./pages/Auth/Signup";
import PrivateRouter from "./utils/PrivateRoute";
import CheckSignin from "./utils/checkSigin";

import ProductPage from "./components/ProductPage";
import PagePro from "./pages/Client/PagePro";
import ProductDetail from "./pages/Client/ProductDetail";
import Cart from "./pages/Client/Cart";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/signin" element={<CheckSignin><Signin/></CheckSignin>}/>
      <Route path="/signup" element={<CheckSignin><Signup/></CheckSignin>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/" element={<HomeOverView />}>
        <Route index element={<PagePro />} />
        <Route path="/:_id" element={<PagePro/>}/>
        <Route path="/product/:_id" element={<ProductDetail/>}/>
      </Route>
      <Route path="/admin" element={<PrivateRouter><AdminOverView/></PrivateRouter>}>
        <Route index element={<Product/>}/>
        <Route path="category" element={<Category/>}/>
        <Route path="product/add" element={<ProductAdd/>}/>
        <Route path="product/edit/:_id" element={<ProductEdit/>}/>
        <Route path="category/add" element={<CategoryAdd/>}/>
        <Route path="category/edit/:_id" element={<CategoryEdit/>}/>
      </Route>
    </Routes>
  );
}

export default App;
