import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
} from "@mui/material";
import { useRequest } from "ahooks";
import { useFormik } from "formik";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as Yup from "yup";
import api from "../config/api";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { data } = useRequest(
    async () => {
      const response = await api.getAllPackage();
      return response.data;
    },
    {
      onError(e) {
        console.error(e);
      },
    }
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      } catch (error) {
        console.error(error);
      }
    },
  });

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
                <Button onClick={handleOpen}>Đăng nhập</Button>
                <Modal open={open} onClose={handleClose}>
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    style={{ height: "100%" }}
                  >
                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }} >
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          border: "2px solid #000",
                          boxShadow: 24,
                          p: 4,
                          position: "relative",
                          width: "50%",
                          height: "50%",
                          // display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          gutterBottom
                          textAlign={"center"}
                        >
                          Đăng Nhập
                          <Button
                            onClick={handleClose} // Call the handleClose function when clicked
                            style={{ position: "absolute", top: 0, right: 0 }}
                          >
                            X
                          </Button>
                        </Typography>

                        <form onSubmit={formik.handleSubmit}>
                          <div class="form-outline mt-2">
                            <label class="form-label" for="username">Tài khoản</label>
                            <input
                              type="text"
                              id="username"
                              class="form-control"
                              placeholder="Nhập tài khoản"
                              value={formik.values.username}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.username && formik.errors.username ? (
                              <div style={{ color: "red" }}>{formik.errors.username}</div>
                            ) : null}
                          </div>
                          <div class="form-outline mb-4">
                            <label class="form-label" for="password">Mật khẩu</label>
                            <input
                              type="password"
                              id="password"
                              class="form-control"
                              placeholder="Nhập mật khẩu"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                            />
                            {formik.touched.password && formik.errors.password ? (
                              <div style={{ color: "red" }}>{formik.errors.password}</div>
                            ) : null}
                          </div>

                          <div class="col">
                            <a href="#!">Quên mật khẩu?</a>
                          </div>

                          <button type="button" class="btn btn-primary btn-block mb-4" style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "60%",
                            margin: "auto"
                          }}>Đăng nhập</button>
                          <div class="text-center">
                            <p>Bạn chưa có tài khoản?<Link to={"/register"} onClick={handleClose}>Đăng ký</Link></p>
                          </div>
                        </form>
                      </Box>
                    </Grid>
                  </Grid>
                </Modal>
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
            <NavLink to="/blog" class="nav-item nav-link">
              Blog
            </NavLink>
            <NavLink to="/price" class="nav-item nav-link">
              Bảng giá
            </NavLink>
            <div class="nav-item dropdown" style={{ marginTop: "24px" }}>
              <NavLink
                to="combo1"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Gói dịch vụ
              </NavLink>
              <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                {data?.map((item) => (
                  <NavLink to="combo1" class="dropdown-item">
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/contact" class="nav-item nav-link">
              Liên hệ
            </NavLink>
          </div>
        </div>
      </nav>
      <hr
        style={{
          color: "black",
          backgroundColor: "black",
          height: 1,
          borderColor: "black",
        }}
      />
    </>
  );
};

export default Header;
