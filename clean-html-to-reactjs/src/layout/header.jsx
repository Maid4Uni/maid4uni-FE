import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Modal,
  Typography,
} from "@mui/material";
import { useRequest } from "ahooks";
import React, { useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";

import api from "../config/api";

const Header = () => {
  const { data } = useRequest(
    async () => {
      const response = await api.getPopularPackage();
      return response.data;
    },
    {
      onError(e) {
        console.error(e);
      },
    }
  );
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    if (user) {
      if (user.role === "ADMIN") {
        navigate("/admin/0");
      } else if (user.role === "MANAGER") {
        navigate("/manager/package/0");
      } else {
        navigate(`/customer/${user.id}`);
      }
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const userData = localStorage.getItem("user");

  let user;
  try {
    user = JSON.parse(userData);
  } catch (error) {
    console.error('Error parsing user data:', error);
  } const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    navigate("/");
  };
  return (
    <>
      <div
        className="container-fluid bg-light p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div
              className="h-100 d-inline-flex align-items-center py-3 me-4"
              style={{ fontWeight: "400 !important" }}
            >
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small style={{ fontWeight: "400 !important" }}>
                Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>All Week: 07.00 AM - 04.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div
              className="h-100 d-inline-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <>
                {user ? (
                  <div className="h-100 d-inline-flex align-items-center">
                    <Button
                      color="inherit"
                      onClick={handleMenuClick}
                      aria-controls="personal-menu"
                      aria-haspopup="true"
                    >
                      {user.username}
                    </Button>
                    <Menu
                      id="personal-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleMenuClose}>
                        Trang cá nhân
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                    </Menu>
                  </div>
                ) : (
                  <Button onClick={() => navigate("/login")}>Đăng nhập</Button>
                )}
              </>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <img
            className="logo"
            src="img/Brown Gradient Dreamy Abstract Font Album Cover (1).png"
          />
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link active">
              Trang chủ
            </NavLink>
            <div className="nav-item dropdown" style={{ marginTop: "24px" }}>
              <NavLink
                to="/service"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Gói dịch vụ
              </NavLink>
              <div
                className="dropdown-menu rounded-0 rounded-bottom m-0"
                style={{ width: "100%", minWidth: "270px" }}
              >
                {data?.map((item) => (
                  <NavLink
                    to={`/service/${item.id}`}
                    className="dropdown-item"
                    key={item.id}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/price" className="nav-item nav-link">
              Phân loại
            </NavLink>

            <NavLink to="/about" className="nav-item nav-link">
              Giới thiệu
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
