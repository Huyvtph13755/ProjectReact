import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeOverView from "./layouts/HomeOverView/HomeOverView";
import Home from "./pages/Client/Home";
import HeaderPage from './components/Header/Header'
import AdminOverView from "./layouts/AdminOverView/AdminOverView";
import Product from "./pages/Admin/Product";
import Category from "./pages/Admin/Category";
import Signin from "./pages/Auth/Signin";
import ProductAdd from "./pages/Admin/Add/ProductAdd";
import ProductEdit from "./pages/Admin/Update/ProductEdit";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/" element={<HomeOverView />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/admin" element={<AdminOverView/>}>
        <Route index element={<Product/>}/>
        <Route path="category" element={<Category/>}/>
        <Route path="product/add" element={<ProductAdd/>}/>
        <Route path="product/edit/:_id" element={<ProductEdit/>}/>
      </Route>
    </Routes>
  );
}

export default App;
