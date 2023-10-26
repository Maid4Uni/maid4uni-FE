import React, { useState } from "react";
import { Link } from "react-router-dom";

const Combo2 = () => {
  return (
    <>
      <div
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Gói combo "Tiện Nghi đơn giản"
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
                Gói "Giặt giũ"
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
                src="https://i.pinimg.com/564x/7f/86/e8/7f86e821d76b52f0bcf0bf659645e399.jpg"
                alt="Cleaning House Service"
                class="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div class="col-md-6">
            <div class="service-info">
              <h2 class="mb-4">Giặt giũ</h2>
              <p>
                EduLuxe mang đến cho bạn dịch vụ giặt giũ đảm bảo sự sạch sẽ và
                tiện lợi cho quần áo và vật dụng trong căn hộ của bạn.
              </p>
              <h3>Dịch vụ bao gồm</h3>
              <ul>
                <li>Giặt ủi quần áo</li>
                <li>Giặt Drap và bộ khăn trải giường</li>
                <li>Giặt topper</li>
                <li>Giặt đồ theo yêu cầu</li>
              </ul>
              <p>
                Hãy liên hệ với chúng tôi ngay hôm nay để đặt và trải nghiệm sự
                khác biệt!
              </p>
              <Link to="/booking2" class="btn btn-primary">
                Đặt lịch ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combo2;
