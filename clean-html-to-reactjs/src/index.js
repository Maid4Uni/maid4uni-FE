import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Blog from "./home/blog";
import About from "./home/about";
import Combo1 from "./home/combo1.jsx";
import Combo2 from "./home/combo2";
import Booking1 from "./home/booking1";
import Booking2 from "./home/booking2";
import Login from "./home/login";
import Register from "./home/register";
import Admin from "./admin/admin";
import Manager from "./home/manage.jsx";
import TrackingPage from "./order/tracking";
import History from "./order/history";
import Contact from "./home/contact";
import Price from "./home/price";
import ConfirmationPage from "./order/checkout";
import OderDetail from "./home/order-detail";
import Customer from "./home/customer.jsx";
import CreateUser from "./component/admin/createUser.jsx";
import CategoryServices from "./home/category.jsx";
import CreatePackage from "./component/manage/createpackage.jsx";
import Package from "./component/manage/package.jsx";
import UserProfile from "./home/profile.jsx";
import Staff from "./home/staffpage.jsx";
import EditUser from "./component/admin/editUser.jsx";
import { AuthenticationProvider } from "./authentication/AuthenticationContext.js";
import CreateService from "./component/manage/createservice.jsx";
import Update from "./component/manage/updateservice.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/:page" element={<Admin />} />
          <Route path="/admin/create-user" element={<CreateUser />} />
          <Route path="/admin/update-account-info/:id" element={<EditUser />} />
          <Route path="/manager/:menu/:page/" element={<Manager />} />
          <Route path="/package/:page" element={<Package />} />
          <Route path="/manager/package/create" element={<CreatePackage />} />
          <Route path="/order-detail/:id" element={<OderDetail />} />
          <Route path="/create-service" element={<CreateService />} />
          <Route path="/customer/:id" element={<Customer />} />
          <Route path="/update-service/:id" element={<Update />} />

          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/:vnp_TransactionStatus" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/category/:id&:page" element={<CategoryServices />} />
            <Route path="/booking1" element={<Booking1 />} />
            <Route path="booking2" element={<Booking2 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/service/:id" element={<Combo1 />} />
            <Route path="combo2" element={<Combo2 />} />
            <Route path="login" element={<Login />} />
            <Route path="/checkout" element={<ConfirmationPage />} />
            <Route path="register" element={<Register />} />
            <Route path="/price" element={<Price />} />
          </Route>
          <Route path="/tracking/:id" element={<TrackingPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/staff/:id" element={<Staff />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </AuthenticationProvider>
  </React.StrictMode>
);
