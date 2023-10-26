import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const Blog = () => {
  return (
    <>
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Gói dịch vụ
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Blog
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="#">
                  Bảng giá
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Gói dịch vụ
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Dịch vụ
            </p>
            <h1>Các dịch vụ cuả EduLuxe</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <img
                    src="https://i.pinimg.com/564x/4d/52/e6/4d52e6d5c6a8cced1085705e84228af7.jpg"
                    alt="quet nha"
                  />
                </div>
                <h4 className="mb-3">Dọn dẹp nhà cơ bản</h4>
                <ul>
                  <p>
                    <i className="far fa-check-circle text-primary me-3"></i>
                  </p>
                  <p>
                    <i className="far fa-check-circle text-primary me-3"></i>
                  </p>
                  <p>
                    <i className="far fa-check-circle text-primary me-3"></i>{" "}
                  </p>
                </ul>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i className="fa fa-x-ray text-primary fs-4"></i>
                </div>
                <h4 className="mb-3">Dọn dẹp nhà tiêu chuẩn</h4>
                <p>
                  <i className="far fa-check-circle text-primary me-3"></i>
                </p>
                <p>
                  <i className="far fa-check-circle text-primary me-3"></i>
                </p>
                <p>
                  <i className="far fa-check-circle text-primary me-3"></i>
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Chi tiết
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i className="fa fa-brain text-primary fs-4"></i>
                </div>
                <h4 className="mb-3">Neurology</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>
                <h4 className="mb-3">Orthopedics</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i className="fa fa-tooth text-primary fs-4"></i>
                </div>
                <h4 className="mb-3">Dental Surgery</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: "65px", height: "65px" }}
                >
                  <i className="fa fa-vials text-primary fs-4"></i>
                </div>
                <h4 className="mb-3">Laboratory</h4>
                <p className="mb-4">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Testimonial
            </p>
            <h1>What Say Our Patients!</h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <Carousel>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="img/testimonial-1.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="img/testimonial-2.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="img/testimonial-3.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    Clita clita tempor justo dolor ipsum amet kasd amet duo
                    justo duo duo labore sed sed. Magna ut diam sit et amet stet
                    eos sed clita erat magna elitr erat sit sit erat at rebum
                    justo sea clita.
                  </p>
                  <h5 className="mb-1">Patient Name</h5>
                  <span className="fst-italic">Profession</span>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  );
};

export default Blog;
