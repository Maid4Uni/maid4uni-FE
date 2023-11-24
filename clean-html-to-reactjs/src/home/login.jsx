import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import api from "../config/api";

const Login = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    validateForm();
  }, [username, password]);

  const validateForm = async () => {
    const schema = Yup.object().shape({
      username: Yup.string().required("Vui lòng nhập tài khoản."),
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu.")
        .min(6, "Mật khẩu chứa ít nhất 6 chữ số"),
    });

    try {
      await schema.validate({ username, password });
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login({ username, password });
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.account));

      const userRole = response.data.account.role;
      const userId = response.data.account.id; 
      if (userRole === "CUSTOMER") {
        navigate("/");
      } else if (userRole === "ADMIN") {
        navigate(`/admin/${page || "0"}`);
      } else if (userRole === "STAFF") {
        navigate(`/staff/${userId}`);
      } else if (userRole === "MANAGER") {
        navigate(`/manager/package/${page || "0"}`);
      }
    } catch (error) {
      console.error(error);
      setError("Đăng nhập không thành công. Vui lòng thử lại.");
    }
  };

  return (
    <div>
      <hr
        style={{
          color: "black",
          backgroundColor: "black",
          height: 1,
          borderColor: "black",
        }}
      />
      <div className="container" style={{ marginTop: "70px", width: "800px" }}>
        <div
          className="card border-primary p-3 mx-auto"
          style={{ width: "70%" }}
        >
          <h3 className="text-center">Đăng Nhập</h3>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Tài khoản
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Mật khẩu
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Link to="#!" className="text-decoration-none">
                Quên mật khẩu?
              </Link>
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Đăng nhập
            </button>
            <p className="text-center">
              Bạn chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
