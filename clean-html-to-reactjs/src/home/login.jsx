import React, { useState } from "react";

const Login = () => {
  return (
    <>
      <div className="modal-login mt-100" id="login-popup">
        <div className="modal-container">
          <span className="close" id="close-login-popup">
            &times;
          </span>
          <header className="modal-header">Đăng Nhập</header>
          <div className="modal-body">
            <form id="login-form">
              <div className="modal-login-user">
                <label for="email" className="">
                  Email
                </label>
                <input
                  className="modal-input mb-2"
                  id="email"
                  type="email"
                  placeholder="Email đăng nhập"
                  required
                />
                <label for="password" className="">
                  Password
                </label>
                <input
                  className="modal-input"
                  id="password"
                  type="password"
                  placeholder="Mật khẩu"
                  required
                />
              </div>
              <button id="modal-login-button" type="submit">
                Đăng Nhập
              </button>
            </form>
          </div>
          <footer className="modal-footer">
            <p className="modal-register-but">Bạn chưa có tài khoản?</p>
            <a href="register.html">Đăng ký</a>
            <p className="modal-register-but"></p>
            <a href="forgotpass.html">Quên mật khẩu?</a>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Login;
