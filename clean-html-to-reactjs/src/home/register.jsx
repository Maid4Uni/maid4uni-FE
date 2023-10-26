import React, { useState } from "react";

const Register = () => {
  return (
    <>
      <div className="modal-login" id="registerModal">
        <div className="modal-container mt-1 mb-1">
          <span className="close" id="myButton">
            <a>&times;</a>
          </span>
          <header className="modal-header">Đăng Ký</header>

          <form action="#">
            <div className="modal-body">
              <div className="modal-box">
                <span className="details">Tài khoản</span>
                <input
                  className="modal-input"
                  type="text"
                  placeholder="Nhập tài khoản"
                  required
                />
              </div>
              <div className="modal-box">
                <span className="details">Mật khẩu</span>
                <input
                  type="password"
                  className="modal-input "
                  id="passwordInput"
                  placeholder="Nhập mật khẩu của bạn"
                  required
                />
              </div>
              <div className="modal-box">
                <span className="details">Xác thực mật khẩu</span>
                <input
                  type="password"
                  className="modal-input"
                  id="confirmPasswordInput"
                  placeholder="Nhập lại mật khẩu của bạn"
                  required
                />
                <span
                  id="passwordMatchError"
                  style={{
                    display: "none",
                    color: "red",
                    justifyContent: "center",
                    marginBottom: "5px",
                  }}
                >
                  Mật khẩu xác thực không đúng.
                </span>
              </div>
              <div className="modal-box">
                <span className="details">Họ và tên</span>
                <input
                  className="modal-input"
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  required
                />
              </div>
              <div className="modal-box">
                <span className="details">Số điện thoại</span>
                <input
                  className="modal-input"
                  id="phoneInput"
                  placeholder="Nhập số điện thoại của bạn"
                  type="text"
                  required
                />
                <span
                  id="phoneError"
                  style={{
                    display: "none",
                    color: "red",
                    justifyContent: "center",
                    marginBottom: "5px",
                  }}
                >
                  Vui lòng nhập số điện thoại bắt đầu từ 0 và có 9 đến 11 số.
                </span>
              </div>
              <div className="modal-box">
                <span className="details">Email</span>
                <input
                  type="email"
                  className="modal-input "
                  id="txtlogin"
                  placeholder="Nhập email của bạn"
                />
              </div>
              <button
                id="modal-login-button-re"
                className="btn btn-primary rounded-pill py-3 px-5 mt-1 mx-auto d-block"
                type="submit"
              >
                Đăng Ký
              </button>
            </div>
          </form>

          <footer className="modal-footer">
            <p className="modal-register-but" id="login-link">
              <a href="login.html">Bạn đã có tài khoản?</a>
            </p>
          </footer>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#"></a>EduLuxe, All
              Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
