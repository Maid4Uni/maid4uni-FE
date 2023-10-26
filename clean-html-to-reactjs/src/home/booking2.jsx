import React, { useState } from "react";

const Booking2 = () => {
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Dịch vụ giặt giũ
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
            <h1>Đặt lịch giặt giũ</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <button type="button" className="accordion booking-text">
                  Giặt sấy
                </button>
                <div className="panel">
                  <div>
                    <p className="mt-1 fw-black">Số lượng quần </p>
                    <small className="mb-1 ">(15,000VND/kg)</small>
                    <div className="number-container col-md-3">
                      <button id="decrement" className="number-btn">
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        step="1"
                        value="0"
                        id="my-input"
                      />
                      <button id="increment" className="number-btn">
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>
                  <div>
                    <strong>
                      <p className="mt-2 fw-bold">Số lượng áo: </p>
                    </strong>
                    <div className="number-container col-md-3">
                      <button id="decrement" className="number-btn">
                        {" "}
                        -{" "}
                      </button>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        step="1"
                        value="0"
                        id="my-input"
                      />
                      <button id="increment" className="number-btn">
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <p>: </p>
                    <p>Giặt nệm: </p>
                  </div>
                </div>
                <div>
                  <button type="button" className="accordion booking-text">
                    Giặt hấp
                  </button>
                  <div className="panel">
                    <p className="mt-2">Quần</p>
                    <p>Váy</p>
                    <p>Áo</p>
                  </div>
                </div>
                <div>
                  <button type="button" className="accordion mb-1 booking-text">
                    Dịch vụ khác
                  </button>
                  <div className="panel">
                    <p className="mt-2">Tẩy trắng/ Tẩy vết bẩn </p>
                    <p>Ủi quần áo</p>
                    <p>Giặt drap: </p>
                    <p>Giặt nệm: </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <form id="bookingForm">
                  <div className="col-md-12">
                    <div className="box">
                      <h2>Thời gian làm việc</h2>
                      <label for="day" className="booking-text">
                        Ngày nhận đồ
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
                          max="19:00"
                          step="900"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <label for="day" className="booking-text">
                      Ngày nhận đồ
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
                </form>
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
                <div>
                  <label for="day" className="booking-text">
                    Ngày trả đồ
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
                    Giờ trả đồ:
                  </label>
                  <input
                    type="time"
                    id="time"
                    min="07:00"
                    max="19:00"
                    step="900"
                    className="form-control"
                    required
                  />
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
              <button id="bookButton" className="btn btn-primary booking-btn">
                Tiếp theo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking2;
