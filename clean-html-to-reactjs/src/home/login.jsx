import React from "react";
import {
  Button,
  TextField,
  Typography,
  Modal,
  Box,
  FormControl,
  Grid,
  Container,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Login = () => {



  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
            id="password"
            name="password"
            label="Password"
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
        <Button variant="contained" sx={{ mt: 3 }} type="submit">
          Đăng Nhập
        </Button>
      </form>
      <Box sx={{ mt: 2 }}>
        <Typography>Bạn chưa có tài khoản?</Typography>
        <Link to={"register"}>Đăng ký</Link>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Typography>Quên mật khẩu?</Typography>
        <Link to={"forgetpass"}>Lấy lại mật khẩu</Link>
      </Box>


    </Container>
  );
};

export default Login;
