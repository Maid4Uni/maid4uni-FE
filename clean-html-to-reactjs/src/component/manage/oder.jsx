import React, { useState } from "react";

const Order = () => {
  return (
    <>
      <div className="content">
        <div className="search-box">
          <input type="text" placeholder="Tìm kiếm đơn hàng..." />
        </div>
        <div className="col-2">
          <label for="trang-thai"></label>
          <select
            name="trang-thai"
            id="trang-thai"
            className="form-select mb-3"
          >
            <option value="all">Tất cả</option>
            <option value="chua-xac-nhan">Chưa xác nhận</option>
            <option value="da-xac-nhan">Đã xác nhận</option>
          </select>
        </div>
        <section className="danh-sach-don-hang">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>OrderID</th>
                <th>Tên gói</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày kết thúc</th>
                <th>Trạng thái</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Gói 1</td>
                <td>2023-07-20</td>
                <td>2023-07-30</td>
                <td>Chưa xác nhận</td>
                <td>
                  <button
                    className="button-collapse"
                    onclick="showDetails(1)"
                    style={{
                      fontSize: "14px",
                      padding: "4px 4px",
                      borderRadius: "4px",
                    }}
                  >
                    Chi tiết
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Gói 2</td>
                <td>2023-08-01</td>
                <td>2023-08-15</td>
                <td>Đã xác nhận</td>
                <td>
                  <button
                    className="button-collapse"
                    onclick="showDetails(1)"
                    style={{
                      fontSize: "14px",
                      padding: "4px 4px",
                      borderRadius: "4px",
                    }}
                  >
                    Chi tiết
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="chi-tiet-don-hang" id="chi-tiet-1">
          <h2>Chi tiết đơn hàng 1</h2>
          <p>Thông tin đơn hàng:</p>
          <ul>
            <li>OrderID: 1</li>
            <li>Tên dịch vụ: Gói 1</li>
            <li>Ngày bắt đầu: 2023-07-20</li>
            <li>Ngày kết thúc: 2023-07-30</li>
            <li>Trạng thái: Chưa xác nhận</li>
          </ul>
        </section>
        <section className="chi-tiet-don-hang" id="chi-tiet-2">
          <h2>Chi tiết đơn hàng 2</h2>
          <p>Thông tin đơn hàng:</p>
          <ul>
            <li>OrderID: 2</li>
            <li>Tên dịch vụ: Gói 2</li>
            <li>Ngày bắt đầu: 2023-08-01</li>
            <li>Ngày kết thúc: 2023-08-15</li>
            <li>Trạng thái: Đã xác nhận</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Order;
