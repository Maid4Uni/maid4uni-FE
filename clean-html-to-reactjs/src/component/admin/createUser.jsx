import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  password: Yup.string().required("Mật khẩu không được bỏ trống"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Mật khẩu nhập lại không khớp"
  ),
});

const CreateUser = () => {
  const initialValues = {
    name: "",
    birthDate: "",
    address: "",
    gender: "",
    phoneNumber: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values) => {
    // Handle form submission, e.g., send data to your API
    console.log("Form submitted with values:", values);
    // Add your API call logic here
  };

  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Tạo tài khoản</h4>
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
                              <option defaultValue>Giới tính</option>
                              <option value="1">Nam</option>
                              <option value="2">Nữ</option>
                              <option value="3">Khác</option>
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
                          <div className="form-group col-md-12">
                            <label htmlFor="username">Tên tài khoản:</label>
                            <Field
                              type="text"
                              className="form-control mt-3"
                              id="username"
                              name="username"
                              placeholder="Tên tài khoản"
                            />
                            <ErrorMessage
                              name="username"
                              component="div"
                              className="text-danger"
                            />
                          </div>
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
                          Tạo tài khoản
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

export default CreateUser;
