import { Box, Button, Container, TextField, Typography } from "@mui/material";
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
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Tài khoản"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="fullName"
            name="fullName"
            label="Họ và tên"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Mật khẩu"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="phoneNumber"
            name="phoneNumber"
            label="Số điện thoại"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            label="Xác thực mật khẩu"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng Ký
          </Button>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography>Bạn đã có tài khoản?</Typography>
          <Link to={"/login"}>Đăng nhập</Link>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Typography>Quên mật khẩu?</Typography>
          <Link to={"/forgetpass"}>Lấy lại mật khẩu</Link>
        </Box>
      </Container>
    </>
  );
};

export default Register;
