import {
  Box,
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import api from "../config/api";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Tài khoản không được bỏ trống"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
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
    <Container maxWidth="sm">
      <Typography variant="h6" gutterBottom>
        Đăng Nhập
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            id="username"
            name="username"
            label="Tài khoản"
            placeholder="Tài khoản đăng nhập"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1 }}>
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Mật khẩu"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </FormControl>
        <Button variant="contained" sx={{ mt: 3 }} type="submit">
          Đăng Nhập
        </Button>
      </form>
      <Box sx={{ mt: 2 }}>
        <Typography>Bạn chưa có tài khoản?</Typography>
        <Link to={"/register"}>Đăng ký</Link>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Typography>Quên mật khẩu?</Typography>
        <Link to={"/forgetpass"}>Lấy lại mật khẩu</Link>
      </Box>
    </Container>
  );
};

export default Login;
