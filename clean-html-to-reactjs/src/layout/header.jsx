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
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import api from "../config/api";

const Header = () => {
  const { id } = useParams();
  const [open, setOpen] = React.useState(false);
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
      // Assuming user.id exists in the user object, replace it with the appropriate key
      navigate(`/customer/${user.id}`);
    };
  }

    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();

    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: Yup.object({
        username: Yup.string().required("Tài khoản không được bỏ trống"),
        password: Yup.string().min(6, "Mật khẩu phải có ít nhất 6 chứ số").required("Vui lòng nhập mật khẩu")
      }),
      onSubmit: async (values) => {
        try {
          const response = await api.login(values);
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("user", JSON.stringify(response.data.account));
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      },
    });
    const user = JSON.parse(localStorage.getItem("user"));
    const handleLogout = () => {

      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");

      navigate("/");
    };
    return (
      <>
        <div
          class="container-fluid bg-light p-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
              <div
                class="h-100 d-inline-flex align-items-center py-3 me-4"
                style={{ fontWeight: "400 !important" }}
              >
                <small class="fa fa-map-marker-alt text-primary me-2"></small>
                <small style={{ fontWeight: "400 !important" }}>
                  Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
                </small>
              </div>
              <div class="h-100 d-inline-flex align-items-center py-3">
                <small class="far fa-clock text-primary me-2"></small>
                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
              </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
              <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                <small class="fa fa-phone-alt text-primary me-2"></small>
                <small>+012 345 6789</small>
              </div>
              <div
                class="h-100 d-inline-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <>
                  {user ? (
                    <div class="h-100 d-inline-flex align-items-center">

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
                        <MenuItem onClick={handleMenuClose}>Trang cá nhân</MenuItem>
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
          class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <Link
            to="/"
            class="navbar-brand d-flex align-items-center px-4 px-lg-5"
          >
            <img
              class="logo"
              src="img/Brown Gradient Dreamy Abstract Font Album Cover (1).png"
            />
          </Link>
          <button
            type="button"
            class="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
              <NavLink to="/" class="nav-item nav-link active">
                Trang chủ
              </NavLink>
              <div class="nav-item dropdown" style={{ marginTop: "24px" }}>
                <NavLink
                  to="/service"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Gói dịch vụ
                </NavLink>
                <div className="dropdown-menu rounded-0 rounded-bottom m-0" style={{ width: "100%", minWidth: "270px" }}>
                  {data?.map((item) => (
                    <NavLink to={`/service/${item.id}`} className="dropdown-item" key={item.id}>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
              <NavLink to="/price" class="nav-item nav-link">
                Phân loại
              </NavLink>

              <NavLink to="/about" class="nav-item nav-link">
                Giới thiệu
              </NavLink>
            </div>
          </div>
        </nav>

      </>
    );
  };

  export default Header;
