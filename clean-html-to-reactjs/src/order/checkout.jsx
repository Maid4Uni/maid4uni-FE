import React, { useEffect, useState } from "react";
import api from "../config/api";

const ConfirmationPage = () => {
  // Trong trang Checkout
  const order = JSON.parse(localStorage.getItem("order"));

  const [data, setData] = useState(null);
  const [orderInfo, setOrderInfo] = useState("");
  const packageInfo = JSON.parse(localStorage.getItem("package"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.createPayment();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchData();
  }, []);
  const handlePayment = async () => {
    try {
      const response = await api.createPayment({
        orderTotal: order.payload.price,
        orderInfo,
      });
      window.location.replace(response.data);
    } catch (e) {
      console.error(e);
    }
   
  };

  return (
    <div className="container">
      <h4 className="text-center mt-5">Xác Nhận Thanh Toán</h4>
      <div className="row mt-3">
        <div className="col-md-6">
          <img
            src={packageInfo.imageUrl}
            alt="Gói Dịch Vụ"
            className="img-fluid"
          />
          <h5 className="mt-2 mb-1">Tên Gói Dịch Vụ: {packageInfo.name} </h5>
        </div>
        <div className="col-md-6">
          <div className="mt-3">
            <h6>Thông tin dịch vụ</h6>
            <p>
              <strong>Tên khách hàng:</strong> {order.payload.customer.userName}
            </p>
            <p>
              <strong>Địa chỉ:</strong> {order.payload.address}
            </p>
            <p>
              <strong>Ngày làm việc:</strong> {order.payload.workDay.join(", ")}
            </p>
            <p>
              <strong>Thời gian bắt đầu:</strong> {order.payload.startTime}
            </p>
            <p>
              <strong>Thời gian làm:</strong> {order.payload.duration} giờ
            </p>
            <p>
              <strong>Loại gói dịch vụ:</strong> {order.payload.periodType}
            </p>
            <p>
              <strong>Giá dự kiến:</strong> {order.payload.price} VND
            </p>
            <textarea
              id="refundPolicy"
              className="form-control"
              rows="4"
              placeholder="Nội dung chuyển tiền"
              required
              onChange={(e) => setOrderInfo(e.target.value)}
              value={orderInfo}
            ></textarea>
          </div>
          <div className="mb-3">
            <h6 className="fw-bold">
              Giá dịch vụ dự kiến: {order.payload.price} VND
            </h6>
            <h6 style={{ color: "red" }}>*Lưu ý:</h6>
            <p style={{ color: "red" }}>
              Đây chỉ mới là giá dự kiến, nếu có phát sinh ngoài dự kiến sẽ được
              nhân nhân viên thông báo trước khi tiến hành dịch vụ.
            </p>
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="vnpay" />
            <label
              className="form-check-label"
              for="vnpay"
              style={{ color: "black", fontWeight: "bold" }}
            >
              VNPay
            </label>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <a href="/booking1">
              <button className="btn btn-success">Quay lại</button>
            </a>

            <button className="btn btn-success" onClick={handlePayment}>
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
