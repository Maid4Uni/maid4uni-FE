import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <div
        id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          class="spinner-grow "
          style={{
            width: "3rem",
            height: "3rem",
            backgroundColor: "#3CBA92",
          }}
          role="status"
        >
          <span class="sr-only">Loading...</span>
        </div>
      </div> */}

      <div
        class="container-fluid bg-light p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="row gx-0 d-none d-lg-flex">
          <div class="col-lg-7 px-5 text-start">
            <div
              class="h-100 d-inline-flex align-items-center py-3 me-4"
              style={{ fontWeight: "400 !important" }}
            >
              <small class="fa fa-map-marker-alt text-primary me-2"></small>
              <small style={{ fontWeight: "400 !important" }}>
                Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
              </small>
            </div>
            <div class="h-100 d-inline-flex align-items-center py-3">
              <small class="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
            <div class="h-100 d-inline-flex align-items-center py-3 me-4">
              <small class="fa fa-phone-alt text-primary me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div
              class="h-100 d-inline-flex align-items-center"
              style={{ cursor: "pointer" }}
            >
              <Link
                class="text-primary me-1"
                to="login"
                style={{ cursor: "pointer" }}
              >
                Sign in
              </Link>
              {" /  "}
              <Link class="text-primary me-1" to="register">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav
        class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link
          to="/"
          class="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <img
            class="logo"
            src="img/Brown Gradient Dreamy Abstract Font Album Cover (1).png"
          />
        </Link>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" class="nav-item nav-link active">
              Trang chủ
            </NavLink>
            <NavLink to="/blog" class="nav-item nav-link">
              Blog
            </NavLink>
            <NavLink to="booking1" class="nav-item nav-link">
              Bảng giá
            </NavLink>
            <div class="nav-item dropdown" style={{ marginTop: "24px" }}>
              <NavLink
                to="combo2"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Gói dịch vụ
              </NavLink>
              <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                <NavLink to="combo1" class="dropdown-item">
                  Dọn dẹp nhà{" "}
                </NavLink>
                {/* <Link to="team.html" class="dropdown-item">
                  Dọn dẹp nhà (gói cố định)
                </Link>
                <Link to="appointment.html" class="dropdown-item">
                  Vệ sinh máy lạnh
                </Link>
                <Link to="testimonial.html" class="dropdown-item">
                  Vệ sinh tủ lạnh
                </Link> */}
                <NavLink to="combo2" class="dropdown-item">
                  Giặt giũ
                </NavLink>
                {/* <Link to="404.html" class="dropdown-item">
                  Vệ sinh sofa
                </Link>
                <Link to="404.html" class="dropdown-item">
                  Vệ sinh nệm
                </Link>
                <Link to="404.html" class="dropdown-item">
                  Vệ sinh rèm
                </Link> */}
                {/* <Link to="404.html" class="dropdown-item">
                  Vệ sinh máy giặt
                </Link> */}
              </div>
            </div>
            <NavLink to="/about" class="nav-item nav-link">
              Về chúng tôi
            </NavLink>
            <NavLink to="contract" class="nav-item nav-link">
              Liên hệ
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
