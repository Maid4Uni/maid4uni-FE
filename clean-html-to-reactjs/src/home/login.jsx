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
    <Box
      sx={{
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        marginLeft:"40vh",
        width: "800px"
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            p: 3,
            width: '70%',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Đăng Nhập
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <div style={{ marginBottom: '1rem' }}>
              <label>Tài khoản</label>
              <input
                type="text"
                style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                value={formik.values.username}
                onChange={formik.handleChange}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Mật khẩu</label>
              <input
                type="password"
                style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' }}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" style={{ marginRight: '0.5rem' }} />
                  <span>Remember me</span>
                </div>
              </div>
              <Typography>
                <Link to="#!">Forgot password?</Link>
              </Typography>
            </div>
            <button type="button" class="btn btn-primary btn-block mb-4" style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40%",
              margin: "auto"
            }}>Đăng nhập</button>
            <Typography align="center" sx={{ mt: 2 }}>
              Bạn chưa có tài khoản?
              <Link to={"/register"}>Đăng ký</Link>
            </Typography>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
