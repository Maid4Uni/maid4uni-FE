import React, { useState } from "react";
import BannerSlider from "../component/home/bannerSlide";
import FeedBackSlider from "../component/home/feedBackSlider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BannerSlider/>
      <div class="container-xxl py-5">
        <div class="container" />
        <div
          class="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p class="d-inline-block border rounded-pill py-1 px-4">Nổi bật</p>
          <h1>Các gói dịch vụ được yêu thích</h1>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item position-relative rounded overflow-hidden">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="img/pexels-liliana-drew-9462143.jpg"
                  alt=""
                />
              </div>
              <div class="team-text bg-light text-center p-4">
                <h5>Dịch vụ dọn dẹp nhà</h5>
                <p class="text-primary"></p>
                <div class="team-social text-center">
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Làm
                    sạch các phòng
                  </p>
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Khử
                    khuẩn phòng bếp và nhà tắm
                  </p>
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Giặt
                    giũ drap giường
                  </p>
                </div>
                <Link
                  class="btn btn-primary rounded-pill py-3 px-5 mt-3"
                  to="combo1"
                >
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="team-item position-relative rounded overflow-hidden">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="img/pexels-sarah-chai-7282376.jpg"
                  alt=""
                />
              </div>
              <div class="team-text bg-light text-center p-4">
                <h5>Dịch vụ dọn nhà tiết kiệm</h5>
                <p class="text-primary"></p>
                <div class="team-social text-center">
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Giặt
                    quần áo
                  </p>
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Vệ sinh nhà
                  </p>
                 
                </div>
                <Link
                  class="btn btn-primary rounded-pill py-3 px-5 mt-3"
                  to="combo2"
                >
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="team-item position-relative rounded overflow-hidden">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="https://i.pinimg.com/736x/8d/04/5a/8d045a697f3477eee2124b3dfd18da57.jpg"
                  alt=""
                />
              </div>
              <div class="team-text bg-light text-center p-4">
                <h5>Dịch vụ dọn nhà nâng cao</h5>
                <Link
                  class="btn btn-primary rounded-pill py-3 px-5 mt-5"
                  to="combo2"
                >
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>

          <div class="container-xxl py-5">
            <div class="container">
              <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <p class="d-inline-block border rounded-pill py-1 px-4">
                    Trải nghiệm dịch vụ
                  </p>
                  <h1 class="mb-4">
                    LIÊN HỆ NGAY ĐỂ ĐƯỢC TƯ VẤN VỀ CÁC GÓI DỊCH VỤ CỦA EDULUXE
                  </h1>
                  <div class="bg-light rounded d-flex align-items-center p-5 mb-4">
                    <div
                      class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i class="fa fa-phone-alt text-primary"></i>
                    </div>
                    <div class="ms-4">
                      <p class="mb-2">Gọi ngay vào số điện thoại </p>
                      <h5 class="mb-0">+012 345 6789</h5>
                    </div>
                  </div>
                  <div class="bg-light rounded d-flex align-items-center p-5">
                    <div
                      class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i class="fa fa-envelope-open text-primary"></i>
                    </div>
                    <div class="ms-4">
                      <p class="mb-2">Hoặc có thể gửi Mail </p>
                      <h5 class="mb-0">info@example.com</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                    <form>
                      <div class="row g-3">
                        <div class="col-12 col-sm-6">
                          <input
                            type="text"
                            class="form-control border-0"
                            placeholder="Họ và tên"
                            style={{ height: "55px" }}
                          />
                        </div>
                        <div class="col-12 col-sm-6">
                          <input
                            type="email"
                            class="form-control border-0"
                            placeholder="Email"
                            style={{ height: "55px" }}
                          />
                        </div>
                        <div class="col-12 col-sm-6">
                          <input
                            type="text"
                            class="form-control border-0"
                            placeholder="SDT"
                            style={{ height: "55px" }}
                          />
                        </div>
                        <div class="col-12 col-sm-6">
                          <select
                            class="form-select border-0"
                            style={{ height: "55px" }}
                          >
                            <option selected>Chọn dịch vụ</option>
                            <option value="1">Vệ sinh nhà cửa</option>
                            <option value="2">Giao nước</option>
                            <option value="3">Nấu ăn</option>
                          </select>
                        </div>
                        <div class="col-12 col-sm-6">
                          <div
                            class="date"
                            id="date"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control border-0 datetimepicker-input"
                              placeholder="Chọn ngày"
                              data-target="#date"
                              data-toggle="datetimepicker"
                              style={{ height: "55px" }}
                            />
                          </div>
                        </div>
                        <div class="col-12 col-sm-6">
                          <div
                            class="time"
                            id="time"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control border-0 datetimepicker-input"
                              placeholder="Chọn thời gian"
                              data-target="#time"
                              data-toggle="datetimepicker"
                              style={{ height: "55px" }}
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <textarea
                            class="form-control border-0"
                            rows="5"
                            placeholder="Những yêu cầu thêm "
                          ></textarea>
                        </div>
                        <div class="col-12">
                          <button
                            class="btn btn-primary w-100 py-3"
                            type="submit"
                          >
                            Đặt dịch vụ
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FeedBackSlider />

          <Link
            to="#"
            class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
          >
            <i class="bi bi-arrow-up"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
