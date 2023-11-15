import React, { useEffect, useState } from "react";
import api from "../config/api";

const Confirmation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data from API", error);
      }
    };

    fetchData();
  }, []);
  const handlePayment = () => {
    // Gọi API của VNPay tại đây
    window.location.href = "URL_API_VNPAY";
  };

  return (
    <div className="container">
      <h4 className="text-center mt-5">Xác Nhận Thanh Toán</h4>
      <div className="row mt-3">
        <div className="col-md-6">
          <img src="" alt="Gói Dịch Vụ" className="img-fluid" />
          <h5 className="mt-2 mb-1">Tên Gói Dịch Vụ: {} </h5>
        </div>
        <div className="col-md-6">
          <div className="mt-3">
            <h6>Thông tin dịch vụ</h6>
            <div className="mb-3">
              <input
                type="text"
                id="order"
                className="form-control"
                placeholder="Thông tin"
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                id="refundPolicy"
                className="form-control"
                rows="4"
                placeholder="Nội dung chuyển tiền"
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <h6 className="fw-bold">Giá Tiền{}</h6>
            </div>

            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="vnpay" />
              <label className="form-check-label" for="vnpay">
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
    </div>
  );
};

export default Confirmation;
