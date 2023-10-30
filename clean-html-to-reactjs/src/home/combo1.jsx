import { useRequest } from "ahooks";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../config/api";

const Combo1 = () => {
  const [serviceInfo, setServiceInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("YOUR_BACKEND_ENDPOINT");
        const data = await response.json();
        setServiceInfo(data);
      } catch (error) {
        console.error("Error fetching data from the backend", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        class="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <h1 class="display-3 text-white mb-3 animated slideInDown">
            Gói dịch vụ dọn nhà
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
                Gói combo 1
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {serviceInfo && (
        <div class="container my-4">
          <div class="row">
            <div class="col-md-6">
              <div class="service-image">
                <img
                  src={serviceInfo.imageUrl}
                  alt="Cleaning House Service"
                  class="img-fluid rounded-circle"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-info">
                <h2 class="mb-4">{serviceInfo.title}</h2>
                <p>{serviceInfo.description}</p>
                <h3>Dịch vụ bao gồm</h3>
                <ul>
                  {serviceInfo.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <p>{serviceInfo.contactInfo}</p>
                <button>Đặt lịch ngay</button>
                <Link to="/booking1" class="btn btn-primary">
                  Đặt lịch ngay
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Combo1;
