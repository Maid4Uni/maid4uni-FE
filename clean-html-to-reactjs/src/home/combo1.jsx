import { useRequest } from "ahooks";
import React from "react";
import { Link, useParams } from "react-router-dom";
import api from "../config/api";

const Combo1 = () => {
  const { id } = useParams();

  const { data } = useRequest(async () => {
    try {
      const response = await api.getPackage(id);
      localStorage.setItem("package", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Gói dịch vụ dọn nhà
          </h1>
          <nav aria-label="breadcrumb" className="animated slideInDown">
            <ol className="breadcrumb text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Gói tiện ích khác
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                {data && `Dịch vụ : ${data.name}`}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <div className="service-image">
              <img
                src={data?.imageUrl}
                alt="Cleaning House Service"
                className="img-fluid rounded-circle"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-info">
              <h2 className="mb-4">{data?.name}</h2>
              <p>{data?.description}</p>
              <h3>Dịch vụ bao gồm</h3>
              <ul>
                {data?.serviceList.map((service, index) => (
                  <li key={index}>{service.name}</li>
                ))}
              </ul>

              <Link to="/booking1" className="btn btn-primary">
                Đặt lịch ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Combo1;
