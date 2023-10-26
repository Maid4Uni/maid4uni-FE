import React, { useState } from "react";
import "./order.css";
import Order from "../component/manage/oder";
import Service from "../component/manage/service";

const Manager = () => {
  const [isMenu, setMenu] = useState("service");
  return (
    <>
      <body>
        <div className="sidebar">
          <header>
            <h1 style={{ color: "#fff", fontSize: "30px", padding: "10px 0" }}>
              Quản lý
            </h1>
          </header>
          <ul style={{ paddingLeft: "0" }}>
            <li>
              <div
                className="manage-item-menu"
                style={
                  isMenu === "service"
                    ? { color: "#3ba9f6" }
                    : { color: "white" }
                }
                onClick={() => {
                  setMenu("service");
                }}
              >
                <i className="fa fa-regular fa-box"></i> Quản lý gói dịch vụ
              </div>
            </li>
            <li>
              <div
                className="manage-item-menu"
                style={
                  isMenu === "order" ? { color: "#3ba9f6" } : { color: "white" }
                }
                onClick={() => {
                  setMenu("order");
                }}
              >
                <i className="fa fa-sharp fa-regular fa-clipboard-list"></i>{" "}
                Quản lý đơn hàng
              </div>
            </li>
            <li>
              <div
                className="manage-item-menu"
                style={
                  isMenu === "notify"
                    ? { color: "#3ba9f6" }
                    : { color: "white" }
                }
              >
                <i className="fa fa-regular fa-envelope"></i> Thông báo
              </div>
            </li>
          </ul>
        </div>
        {isMenu === "service" && <Service />}
        {isMenu === "order" && <Order />}
      </body>
    </>
  );
};

export default Manager;
