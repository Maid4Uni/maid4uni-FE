import React, { useState } from "react";

const EditUser = () => {
  return (
    <>
      <div className="content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Sửa tài khoản</h4>
                  </div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <div className="crm-profile-img-edit position-relative">
                        <img
                          className="w-25 crm-profile-pic rounded avatar-100 "
                          src="img/11.png"
                          alt="profile-pic"
                        />
                        <div className="crm-p-image bg-primary">
                          <i className="las la-pen upload-button"></i>
                          <input
                            className="file-upload"
                            type="file"
                            accept="image/*"
                          />
                        </div>
                      </div>
                      <div className="img-extension mt-3">
                        <div className="d-inline-block align-items-center">
                          <span>"Chỉ </span>
                          <a href="javascript:void();">.jpg</a>
                          <a href="javascript:void();">.png</a>
                          <a href="javascript:void();">.jpeg</a>
                          <span>được phép"</span>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Vai trò:</label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option defaultValue>Vai trò</option>
                        <option value="1">Quản lý</option>
                        <option value="2">Nhân viên</option>
                        <option value="3">Khách hàng</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 ">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <div className="header-title">
                    <h4 className="card-title">Thông tin tài khoản</h4>
                  </div>
                </div>
                <div className="card-body">
                  <div className="new-user-info">
                    <form>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label for="username">Họ và tên:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fname"
                            placeholder="Họ và tên"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="lname">Ngày sinh:</label>
                          <input
                            type="date"
                            data-provide="datepicker"
                            className="form-control"
                            id="lname"
                            placeholder="Ngày sinh"
                          />
                          {/* <input
                            type="text"
                            className="form-control"
                            id="lname"
                            placeholder="Last Name"
                          /> */}
                        </div>
                        <div className="form-group col-md-6">
                          <label for="add1">Địa chỉ:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="add1"
                            placeholder="Địa chỉ"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label>Giới tính:</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            data-style="py-0"
                          >
                            <option defaultValue>Giới tính</option>
                            <option value="1">Nam </option>
                            <option value="2">Nữ</option>
                            <option value="3">Khác</option>
                          </select>
                        </div>
                        <div className="form-group col-md-6">
                          <label for="mobno">Số điện thoại:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="mobno"
                            placeholder="Số điện thoại"
                          />
                        </div>

                        <div className="form-group col-md-6">
                          <label for="email">Email:</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <hr />
                      <h5 className="mb-3">Tài khoản</h5>
                      <div className="row">
                        {/* <div className="form-group col-md-12">
                          <label for="unamer">Tên tài khoản:</label>
                          <input
                            type="text"
                            className="form-control mt-3"
                            id="unamer"
                            placeholder="Tên tài khoản"
                          />
                        </div> */}
                        <div className="form-group col-md-6">
                          <label for="pass">Mật khẩu:</label>
                          <input
                            type="password"
                            className="form-control"
                            id="pass"
                            placeholder="Mật khẩu"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label for="rpass">Nhập lại mật khẩu:</label>
                          <input
                            type="password"
                            className="form-control"
                            id="rpass"
                            placeholder="Nhập lại mật khẩu"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary acc-btn mt-1"
                      >
                        Tạo tài khoản
                      </button>
                    </form>
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
