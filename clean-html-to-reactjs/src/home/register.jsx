import { Container, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import api from "../config/api";

const validationSchema = yup.object({
  username: yup.string().required("Tài khoản không được bỏ trống"),
  fullName: yup.string().required("Họ và tên không được bỏ trống"),
  password: yup
    .string()
    .min(6, "Mật khẩu phải chứa ít nhất 6 ký tự")
    .required("Mật khẩu không được bỏ trống"),
  phoneNumber: yup
    .string()
    .matches(
      /^[0][0-9]{8,9}$/,
      "Vui lòng nhập số điện thoại bắt đầu từ 0 và có 9 đến 11 số."
    )
    .required("Số điện thoại không được bỏ trống"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Mật khẩu xác thực không đúng.")
    .required("Vui lòng xác nhận mật khẩu"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Email không được bỏ trống"),
});

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      fullName: "",
      password: "",
      phoneNumber: "",
      confirmPassword: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await api.register(values);
        navigate("/login");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Đăng Ký
        </Typography>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
        
          <div class="form-outline mt-2">
            <label class="form-label" for="username">
              Tài khoản
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control"
              placeholder="Nhập tài khoản"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                padding: "0.5rem",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            {formik.touched.username && formik.errors.username ? (
              <div style={{ color: "red" }}>{formik.errors.username}</div>
            ) : null}
          </div>
          <div class="form-outline mt-2">
            <label class="form-label" for="fullName">
              Họ và tên
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              class="form-control"
              placeholder="Họ và tên"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div style={{ color: "red" }}>{formik.errors.fullName}</div>
            ) : null}
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="Nhập địa chỉ email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="phoneNumber">
              Số điện thoại
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              class="form-control"
              placeholder="Nhập số điện thoại"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div style={{ color: "red" }}>{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
          <div class="form-outline mb-4">
            <label class="form-label" for="password">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
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
          <div class="form-outline mb-4">
            <label class="form-label" for="confirmPassword">
              Xác thực mật khẩu
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              class="form-control"
              placeholder="Nhập lại mật khẩu"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div style={{ color: "red" }}>
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-block mb-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40%",
              margin: "auto",
            }}
          >
            Đăng ký
          </button>
          <div class="text-center">
            <p>
              Bạn đã có tài khoản?<Link to={"/"}>Đăng nhập</Link>
            </p>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Register;
