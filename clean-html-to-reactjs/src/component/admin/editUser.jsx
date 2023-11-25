import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../config/api";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Họ và tên không được bỏ trống"),
  birthDate: Yup.date().required("Ngày sinh không được bỏ trống"),
  address: Yup.string().required("Địa chỉ không được bỏ trống"),
  gender: Yup.string().required("Vui lòng chọn giới tính"),
  phoneNumber: Yup.string().required("Số điện thoại không được bỏ trống"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Email không được bỏ trống"),
  username: Yup.string().required("Tên tài khoản không được bỏ trống"),
  password: Yup.string(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Mật khẩu nhập lại không khớp"
  ),
});

const EditUser = () => {
  const location = useLocation();
  const { account } = location.state;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const { page } = useParams();

  const initialValues = {
    name: `${account.fullName || ""}`,
    birthDate: `${account.dOB || ""}`,
    address: `${account.address || ""}`,
    gender: `${account.gender || ""}`,
    phoneNumber: `${account.phoneNumber || ""}`,
    email: `${account.email || ""}`,
    username: `${account.username || ""}`,
    password: "",
    confirmPassword: "",
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Assuming you have an ID property in your account object
      const accountId = account.id;

      // Construct the data object to be sent to the API
      const data = {
        id: accountId,
        ...values,
      };

      // Make the API call
      await api.updateAccountInfo(accountId, data);

      // Handle success, you might want to show a success message or redirect
      console.log("Account info updated successfully!");
      alert("Cập nhật tài khoản thành công");
      navigate(`/admin/${page || "0"}`);
    } catch (error) {
      // Handle error, you might want to show an error message
      console.error("Error updating account info:", error);
    } finally {
      // Reset the form's submission state
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="mb-md-4 mb-3" style={{ paddingBottom: "100px" }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="back"
              onClick={() => navigate(`/admin/${page || "0"}`)}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <Link to="/">
              <img
                className="logo"
                style={{
                  marginTop: "10px",
                  width: "150px",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
                src={
                  process.env.PUBLIC_URL +
                  "/img/Brown Gradient Dreamy Abstract Font Album Cover (1).png"
                }
                alt="M4U logo"
                loading="lazy"
              />
            </Link>
            <div style={{ marginLeft: "auto" }}>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <Avatar
                  alt="Admin"
                  src="img/1.jpg"
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
              <Menu
                id="profile-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <ExitToAppIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Đăng xuất" />
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">
                      Sửa tài khoản {account.username}
                    </h4>
                  </div>
                </div>
                <div className="card-body">
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    <Form>
                      <div className="form-group">
                        <div className="crm-profile-img-edit position-relative">
                          <img
                            className="w-25 crm-profile-pic rounded avatar-100"
                            src="img/11.png"
                            alt="profile-pic"
                          />
                          <div className="crm-p-image bg-primary">
                            <i className="las la-pen upload-button"></i>
                            <Field
                              className="file-upload"
                              type="file"
                              name="profileImage"
                              accept="image/*"
                            />
                          </div>
                        </div>
                        <div className="img-extension mt-3">
                          <div className="d-inline-block align-items-center">
                            <span>
                              "Chỉ file thuộc type .jpg; .png; .jpeg được phép"
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Vai trò:</label>
                        <Field
                          as="select"
                          className="form-select"
                          name="role"
                          aria-label="Default select example"
                        >
                          <option value="1">Quản lý (Manager)</option>
                          <option value="2">Nhân viên (Staff)</option>
                          <option value="3">Khách hàng (Client)</option>
                        </Field>
                        <ErrorMessage
                          name="role"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Thông tin tài khoản</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="new-user-info">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      <Form>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label htmlFor="name">Họ và tên:</label>
                            <Field
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Họ và tên"
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="birthDate">Ngày sinh:</label>
                            <Field
                              type="date"
                              className="form-control"
                              id="birthDate"
                              name="birthDate"
                              placeholder="Ngày sinh"
                            />
                            <ErrorMessage
                              name="birthDate"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="address">Địa chỉ:</label>
                            <Field
                              type="text"
                              className="form-control"
                              id="address"
                              name="address"
                              placeholder="Địa chỉ"
                            />
                            <ErrorMessage
                              name="address"
                              component="div"
                              className="text-danger"
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="gender">Giới tính:</label>
                            <Field
                              as="select"
                              className="form-select"
                              id="gender"
                              name="gender"
                              aria-label="Default select example"
                            >
                              <option value="male">Nam</option>
                              <option value="female">Nữ</option>
                            </Field>
                            <ErrorMessage
                              name="gender"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="phoneNumber">Số điện thoại:</label>
                            <Field
                              type="text"
                              className="form-control"
                              id="phoneNumber"
                              name="phoneNumber"
                              placeholder="Số điện thoại"
                            />
                            <ErrorMessage
                              name="phoneNumber"
                              component="div"
                              className="text-danger"
                            />
                          </div>

                          <div className="form-group col-md-6">
                            <label htmlFor="email">Email:</label>
                            <Field
                              type="email"
                              className="form-control"
                              id="email"
                              name="email"
                              placeholder="Email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <hr />
                        <h5 className="mb-3">Tài khoản</h5>
                        <div className="row">
                          <div className="form-group col-md-6">
                            <label htmlFor="password">Mật khẩu:</label>
                            <Field
                              type="password"
                              className="form-control"
                              id="password"
                              name="password"
                              placeholder="Mật khẩu"
                            />
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                          <div className="form-group col-md-6">
                            <label htmlFor="confirmPassword">
                              Nhập lại mật khẩu:
                            </label>
                            <Field
                              type="password"
                              className="form-control"
                              id="confirmPassword"
                              name="confirmPassword"
                              placeholder="Nhập lại mật khẩu"
                            />
                            <ErrorMessage
                              name="confirmPassword"
                              component="div"
                              className="text-danger"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary acc-btn mt-1"
                        >
                          Sửa tài khoản
                        </button>
                      </Form>
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
