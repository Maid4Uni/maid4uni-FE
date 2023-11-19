import React from "react";
import { Link, useParams } from "react-router-dom";

const Price = () => {
  const links = [];
  const data = [
    {
      name: "Dọn dẹp nhà cơ bản",
      image:
        "https://i.pinimg.com/736x/8c/bd/a7/8cbda70ca4ee212d4c8dda623610f11f.jpg",
    },
  ];

  // Generating links from 0 to 5 for id and page
  for (let id = 0; id <= 5; id++) {
    for (let page = 0; page <= 5; page++) {
      links.push(`/category/${id}&${page}`);
    }
  }

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Phân loại
            </p>
            <h1>Các dịch vụ của EduLuxe</h1>
          </div>
          <div className="row g-4">
            {data.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item bg-light rounded h-100 p-5 d-flex flex-column align-items-center justify-content-center">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                    style={{ width: "250px", height: "200px" }}
                  >
                    <img
                      src={service.image}
                      alt={service.name}
                      style={{ maxWidth: "80%", maxHeight: "80%" }}
                    />
                  </div>
                  <h4 className="mb-3">{service.name}</h4>
                  <Link to={links[index]} className="btn">
                    <i className="fa fa-plus text-primary me-3" /> Chi tiết
                  </Link>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Price;
