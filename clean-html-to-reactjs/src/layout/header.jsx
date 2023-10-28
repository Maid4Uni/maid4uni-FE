import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, TextField, Typography, Modal, Box, FormControl, Grid, } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Địa chỉ email không hợp lệ"),
      password: Yup.string()
        .min(6, "Mật khẩu phải có ít nhất 6 chứ số")
        ,
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
                    <Grid item xs={6}>
                      <Box
                        sx={{
                          bgcolor: "background.paper",
                          border: "2px solid #000",
                          boxShadow: 24,
                          p: 4,
                          position: "relative",
                        }}
                      >
                        <Typography variant="h6" gutterBottom textAlign={"center"}>
                          Đăng Nhập
                          <Button
                            onClick={handleClose} // Call the handleClose function when clicked
                            style={{ position: "absolute", top: 0, right: 0 }}
                          >
                            X
                          </Button>
                        </Typography>
                        <form onSubmit={formik.handleSubmit}>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                              required
                              id="email"
                              name="email"
                              label="Email"
                              placeholder="Email đăng nhập"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                              error={formik.touched.email && Boolean(formik.errors.email)}
                              helperText={formik.touched.email && formik.errors.email}
                            />
                          </FormControl>
                          <FormControl fullWidth sx={{ m: 1 }}>
                            <TextField
                            required
                              id="password"
                              name="password"
                              label="Mật khẩu"
                              type="password"
                              placeholder="Mật khẩu"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              error={
                                formik.touched.password && Boolean(formik.errors.password)
                              }
                              helperText={formik.touched.password && formik.errors.password}
                            />
                          </FormControl>
                          <Button variant="contained" sx={{ mt: 3 }} type="submit" >
                            Đăng Nhập
                          </Button>
                        </form>
                        <Box sx={{ mt: 2 }}>
                          <Typography>Bạn chưa có tài khoản?</Typography>
                        <Link to ={"register"} onClick={handleClose}>Đăng ký</Link>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                          <Typography>Quên mật khẩu?</Typography>
                         <Link to={"forgetpassword"} onClick={handleClose}>Quên mật khẩu</Link>
                        </Box>
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
            <NavLink to="booking1" class="nav-item nav-link">
              Bảng giá
            </NavLink>
            <div class="nav-item dropdown" style={{ marginTop: "24px" }}>
              <NavLink
                to="combo2"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Gói dịch vụ
              </NavLink>
              <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                <NavLink to="combo1" class="dropdown-item">
                  Dọn dẹp nhà{" "}
                </NavLink>

                <NavLink to="combo2" class="dropdown-item">
                  Giặt giũ
                </NavLink>

              </div>
            </div>
            <NavLink to="contract" class="nav-item nav-link">
              Liên hệ
            </NavLink>
          </div>
        </div>
      </nav>
  <hr style={{ color: "black", backgroundColor: "black", height: 1, borderColor: "black" }} />
    </>
  );
};

export default Header;
