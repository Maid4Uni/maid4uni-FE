import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api";
import { useRequest } from "ahooks";

const Combo1 = () => {
  const [packageInfo, setPackageInfo] = useState(null);

  const { data } = useRequest(
    async () => {
      try {
        const response = await api.getAllPackage();
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
  );

  useEffect(() => {
    if (data) {
      setPackageInfo(data);
    }
  }, [data]);

  return (
    <>
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
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
              <li className="breadcrumb-item text-primary active" aria-current="page">
                {packageInfo && `Dịch vụ : ${packageInfo.name}`}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {packageInfo && (
        <div className="container my-4">
          <div className="row">
            <div className="col-md-6">
              <div className="service-image">
                <img
                  src={packageInfo.imageUrl}
                  alt="Cleaning House Service"
                  className="img-fluid rounded-circle"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="service-info">
                <h2 className="mb-4">{packageInfo.title}</h2>
                <p>{packageInfo.description}</p>
                <h3>Dịch vụ bao gồm</h3>
                <ul>
                  {packageInfo.services &&
                    packageInfo.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                </ul>
                <p>{packageInfo.contactInfo}</p>
              
                <Link to="/booking1" className="btn btn-primary">
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
