import React, { useState, useEffect } from "react";
import ListUser from "../component/admin/listUser";
import HeaderAdmin from "../layout/headerAdmin";
import FooterAmin from "../layout/footerAdmin";
import CreateUser from "../component/admin/createUser";
import api from "../config/api";
import { useNavigate } from "react-router-dom";
import EditUser from "../component/admin/editUser";
import { useAuthentication } from "../authentication/AuthenticationContext.js";
import Dashboard from "../component/admin/dashboard.jsx";
const Admin = () => {
  const navigate = useNavigate();
  const [isTab, setTab] = useState(true);
  const { token } = useAuthentication();
  const handleActiveTab = (e) => {
    setTab(e);
  };

  useEffect(() => {
    // Thực hiện xác thực người dùng và lấy vai trò của họ sau khi họ đăng nhập
    const authenticateUser = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));

        const userRole = user.role;
        // Kiểm tra vai trò của người dùng và điều hướng tùy theo kết quả
        if (userRole !== "ADMIN") {
          navigate("/"); // Điều hướng đến trang đăng nhập hoặc bất kỳ trang nào bạn chọn
          alert("Bạn không có quyền truy cập vào trang này");
        }
      } catch (error) {
        console.error(error);
      }
    };

    authenticateUser(); // Gọi hàm xác thực người dùng khi thành phần được tạo
  }, []);

  return (
    <>
      <div className="admin" style={{ position: "relative", height: "100%" }}>
        <div style={{ display: "flex" }}>
          <HeaderAdmin handleActiveTab={handleActiveTab} />

          <main
            style={{
              width: "85%",
              margin: "0 auto",
              borderLeft: "1px solid gray",
            }}
          >
            <div style={{ height: "80px" }}></div>
            <div className="container pt-4" style={{ width: "100%" }}>
              {isTab ? <ListUser /> : <Dashboard />}
            </div>
            <div style={{ height: "150px" }}></div>
          </main>
        </div>

        <FooterAmin />
      </div>
    </>
  );
};

export default Admin;
