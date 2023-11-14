import React, { useState, useEffect } from "react";
import ListUser from "../component/admin/listUser";
import HeaderAdmin from "../layout/headerAdmin";
import FooterAmin from "../layout/footerAdmin";
import CreateUser from "../component/admin/createUser";
import api from "../config/api";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [isTab, setTab] = useState(true);

  const handleActiveTab = (e) => {
    setTab(e);
  };

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const response = await api.login();
        localStorage.setItem("user", JSON.stringify(response.data.account));
        const userRole = response.data.account.role;

        if (userRole !== "ADMIN") {
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
      }
    };

    authenticateUser();

    // Add a missing closing brace here
  }, []); // <- Add dependency array if needed

  return (
    <>
      <div className="admin" style={{ position: "relative", height: "100%" }}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "231px" }}></div>
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
              {isTab ? <ListUser /> : <CreateUser />}
            </div>
            <div style={{ height: "150px" }}></div>
          </main>
        </div>

        <FooterAmin />

        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
};

export default Admin;
