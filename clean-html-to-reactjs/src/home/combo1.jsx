import React, { useState } from "react";
import { Link } from "react-router-dom";

const Combo1 = () => {
  return (
    <>
      <div
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Gói dịch vụ dọn nhà
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb text-uppercase mb-0">
              <li class="breadcrumb-item">
                <a class="text-white" href="#">
                  Trang chủ
                </a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-white" href="#">
                  Gói tiện ích khác
                </a>
              </li>
              <li
                class="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Gói combo 1
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="container my-4">
        <div class="row">
          <div class="col-md-6">
            <div class="service-image">
              <img
                src="https://i.pinimg.com/564x/4e/06/30/4e0630d33d38b28e9daff10c66ecfe98.jpg"
                alt="Cleaning House Service"
                class="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="service-info">
              <h2 class="mb-4">Dịch vụ dọn nhà</h2>
              <p>
                EduLuxe mang đến cho bạn dịch vụ dọn nhà, đảm bảo môi trường
                sống cũng như học tập của các bạn sinh viên trở nên sạch sẽ và
                thoải mái.Đội ngũ nhân viên làm vệ sinh của chúng tôi cam kết
                mang lại kết quả tốt nhất cho bạn.
              </p>
              <h3>Dịch vụ bao gồm</h3>
              <ul>
                <li>Làm sạch toàn bộ các phòng</li>
                <li>Làm sạch thảm và nệm</li>
                <li>Khử trùng bếp và phòng tắm</li>
                <li>Lau cửa sổ và kính</li>
              </ul>
              <p>
                Hãy liên hệ với chúng tôi ngay hôm nay để đặt lịch làm sạch và
                trải nghiệm sự khác biệt!
              </p>
              <Link to="/booking1" class="btn btn-primary">
                Đặt lịch ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combo1;
