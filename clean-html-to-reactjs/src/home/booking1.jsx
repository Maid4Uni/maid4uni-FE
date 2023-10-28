import React, { useState } from "react";
import { Link } from "react-router-dom";

const Booking1 = () => {
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Bảng giá
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="index.html">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Bảng giá
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="booking-container">
          <div
            className="text-center mx-auto mb-3 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1>Đặt lịch dọn dẹp nhà</h1>
          </div>
          <div className="row g-4">
            <form id="bookingForm">
              <div className="box">
                <label for="addresss" className="booking-text">
                  Địa chỉ
                </label>
                <input
                  type="text"
                  className="modal-input"
                  id="adress"
                  placeholder="Nhập địa chỉ"
                  required
                />
              </div>
              
              <div className="col-md-12">
                <div className="box">
                  <label for="day" className="booking-text">
                    Chọn ngày làm
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="days[]"
                      value="Monday"
                      id="monday"
                    />
                    <label className="form-check-label" for="monday">
                      T2
                    </label>
                  </div>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="days[]"
                    value="Tuesday"
                    id="tuesday"
                  />
                  <label className="form-check-label" for="tuesday">
                    T3
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="days[]"
                    value="Wednesday"
                    id="wednesday"
                  />
                  <label className="form-check-label" for="wednesday">
                    T4
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="days[]"
                    value="Thursday"
                    id="thursday"
                  />
                  <label className="form-check-label" for="thursday">
                    T5
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="days[]"
                    value="Friday"
                    id="friday"
                  />
                  <label className="form-check-label" for="friday">
                    T6
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="days[]"
                    value="Saturday"
                    id="saturday"
                  />
                  <label className="form-check-label" for="saturday">
                    T7
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="days[]"
                    value="Sunday"
                    id="sunday"
                  />
                  <label className="form-check-label" for="sunday">
                    CN
                  </label>
                </div>
              </div>

              <div className="box">
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <label for="time" className="booking-text">
                      Chọn giờ làm:
                    </label>
                    <input
                      type="time"
                      id="time"
                      min="07:00"
                      max="16:00"
                      step="300"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <label for="period" className="booking-text">
                      Thời gian:
                    </label>
                    <select id=" period" className="form-control">
                      <option value="1">2 tiếng</option>
                      <option value="3">3 tiếng</option>
                      <option value="6">4 tiếng</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <label for="period" className="booking-text">
                      Loại gói:
                    </label>
                    <select id=" period" className="form-control">
                      <option value="1">1 tháng</option>
                      <option value="3">2 tháng</option>
                      <option value="6">3 tháng</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mt-2 text-center">
                  <p>
                    Tổng giá tiền: <span id="totalPrice">0</span>
                  </p>
                </div>
              </div>

              <div className="col-md-12 mt-1 text-center">
              <Link to="/checkout" class="btn btn-primary">
               Đăng ký dịch vụ
              </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking1;
