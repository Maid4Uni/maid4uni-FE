import { useRequest } from "ahooks";
import { useFormik } from "formik";
import moment from "moment";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../config/api";

const Booking1 = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("accessToken");

  const { data, run: booking } = useRequest(
    async (params) => {
      const response = await api.createOrder(params);
      return response.data;
    },
    {
      manual: true,
      onError(e) {
        console.error(e);
      },
    }
  );

  const formik = useFormik({
    initialValues: {
      address: "",
      workDay: "",
      startTime: undefined,
      periodType: "ONE_MONTH",
      duration: 2,
      price: 0,
      startDay: moment().format("YYYY-MM-DD"),
    },
    onSubmit: async (values) => {
      try {
        if (!isLoggedIn) {
          alert("Vui lòng đăng nhập để đặt lịch dịch vụ.");
          navigate("/login");
          return;
        }
        const { startTime, duration, ...rest } = values;
        const user = JSON.parse(localStorage.getItem("user"));
        const payload = {
          ...rest,
          duration: Number(duration),
          startTime: {
            hour: Number(startTime.split(":")[0]),
            minute: Number(startTime.split(":")[1]),
            second: 0,
            nano: 0,
          },
          price: 0,
          customer: {
            id: user.id,
            userName: user.username,
          },
        };

        const response = await api.createOrder(payload);
        navigate(`/checkout/${response.data.id}`);
      } catch (error) {
        console.error(error);
      }
    },
  });

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
            <form id="bookingForm" onSubmit={formik.handleSubmit}>
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
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
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
                      name="workDay"
                      value={2}
                      id="monday"
                      onChange={formik.handleChange}
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
                    name="workDay"
                    value={3}
                    id="tuesday"
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" for="tuesday">
                    T3
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="workDay"
                    value={4}
                    id="wednesday"
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" for="wednesday">
                    T4
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="workDay"
                    value={5}
                    id="thursday"
                    onChange={formik.handleChange}
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
                    name="workDay"
                    value={6}
                    id="friday"
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" for="friday">
                    T6
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="workDay"
                    value={7}
                    id="saturday"
                    onChange={formik.handleChange}
                  />
                  <label className="form-check-label" for="saturday">
                    T7
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="workDay"
                    value={8}
                    id="sunday"
                    onChange={formik.handleChange}
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
                      onChange={(e) => {
                        formik.setFieldValue("startTime", e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="box">
                <div className="col-md-12 mt-3">
                  <div className="form-group">
                    <label for="date" className="booking-text">
                      Chọn ngày bắt đầu
                    </label>
                    <input
                      type="date"
                      id="date"
                      min={moment().format("YYYY-MM-DD")}
                      className="form-control"
                      required
                      name="startDay"
                      value={formik.values.startDay}
                      onChange={formik.handleChange}
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
                    <select
                      id=" period"
                      className="form-control"
                      name="duration"
                      value={formik.values.duration}
                      onChange={formik.handleChange}
                    >
                      <option value={2}>2 tiếng</option>
                      <option value={3}>3 tiếng</option>
                      <option value={4}>4 tiếng</option>
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
                    <select
                      id=" period"
                      className="form-control"
                      name="periodType"
                      value={formik.values.periodType}
                      onChange={formik.handleChange}
                    >
                      <option value="ONE_MONTH">1 tháng</option>
                      <option value="TWO_MONTH">2 tháng</option>
                      <option value="THREE_MONTH">3 tháng</option>
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
                <Link to={isLoggedIn ? "/checkout" : "/login"}>
                  <button id="bookButton" className="btn btn-primary booking-btn">
                    Đăng ký dịch vụ
                  </button>
                </Link>
              </div>
              {/* <div className="col-md-12 mt-1 text-center"> */}
              {/* <Link to="/checkout"> */}
              {/* <button id="bookButton" className="btn btn-primary booking-btn"> */}
              {/* Đăng ký
                </button> */}
              {/* </Link> */}
              {/* </div> */}
            </form>
          </div>
        </div >
      </div >
    </>
  );
};

export default Booking1;
