import React, { useState } from "react";
import "./order.css";
import Order from "../component/manage/oder";
import Service from "../component/manage/service";

const OderDetail = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#f8f9fa", width: "80%", margin: "0 auto" }}
      >
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Trang chi tiết đơn hàng
        </h1>

        <div style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-md-6">
              <h2 style={{ margin: "20px auto" }}>Thông tin đơn hàng</h2>
              <table
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  boxShadow: " 0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <thead>
                  <tr>
                    <th>Mã đơn hàng</th>
                    <th>Tên khách hàng</th>
                    <th>Địa chỉ</th>
                    <th>Tình trạng đơn hàng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123456</td>
                    <td>Nguyễn Văn A</td>
                    <td>Hẻm 111, Đường HHH, TP HCM</td>
                    <td>Đã đặt hàng</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <h2 style={{ margin: "20px auto" }}>Lịch làm việc</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Giờ làm</th>
                    <th>Số lượng nhân viên</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20-10-2023</td>
                    <td>20-12-2023</td>
                    <td>7AM</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>

              <h3>Thêm nhân viên</h3>
              <form style={{ marginTop: "20px" }} action="" method="post">
                <div className="form-group">
                  <label for="name">Tên nhân viên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Thêm
                </button>
              </form>

              <h3 className="mt-4">Cập nhật trạng thái đơn hàng</h3>
              <form action="" method="post">
                <div className="form-group">
                  <label for="status">Trạng thái đơn hàng</label>
                  <select className="form-control" id="status" name="status">
                    <option value="Đã đặt hàng">Đã đặt hàng</option>
                    <option value="Đang làm">Đang làm</option>
                    <option value="Đã hoàn thành">Đã hoàn thành</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OderDetail;
