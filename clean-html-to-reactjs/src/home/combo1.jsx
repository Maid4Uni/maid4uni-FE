import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api";
import { useRequest } from "ahooks";

const Combo1 = () => {
  const [packageInfo, setpackageInfo] = useState(null);

  const { data } = useRequest(
    async () => {
      const response = await api.getAllPackage();
      return response.data;
    },
    {
      onError(e) {
        console.error(e);
      },
    }
  );

  useEffect(() => {
    if (data) {
      setpackageInfo(data);
    }
  }, [data]);

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
                Dịch vụ : {packageInfo.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {packageInfo && (
        <div class="container my-4">
          <div class="row">
            <div class="col-md-6">
              <div class="service-image">
                <img
                  src={packageInfo.imageUrl}
                  alt="Cleaning House Service"
                  class="img-fluid rounded-circle"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-info">
                <h2 class="mb-4">{packageInfo.title}</h2>
                <p>{packageInfo.description}</p>
                <h3>Dịch vụ bao gồm</h3>
                <ul>
                  {packageInfo.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
                <p>{packageInfo.contactInfo}</p>
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
