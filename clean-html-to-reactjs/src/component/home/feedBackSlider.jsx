import React, { useState, useEffect, useRef } from "react";
import RatingStar from "./rating";
import api from "../../config/api";
import { useRequest } from "ahooks";

const FeedBackSlider = () => {
  const { data, error } = useRequest(async () => {
    try {
      const response = await api.getBestReview();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  const renderFeedbacks = () => {
    if (!data) return null;

    return data.map((feedback, index) => (
      <div
        className={`carousel-item ${index === 0 ? "active" : ""}`}
        key={index}
      >
        <div className="testimonial-item d-flex justify-content-center align-items-start">
          <div className="text-center">
            <img
              className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
              src={feedback.img}
              alt={`feedback ${index + 1}`}
              style={{ width: "100px", height: "100px" }}
            />
            <h5 className="mb-1">{feedback.fullname}</h5>
            <span className="fst-italic">Nhân viên mẫu mực</span>
          </div>
          <div className="testimonial-text rounded p-4" style={{ flex: "1" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <RatingStar rating={feedback.star} starSize={20}>
                Rate:
              </RatingStar>
            </div>
            <p>{feedback.content}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Bình chọn của khách hàng
          </p>
          <h1>Top nhân viên được khách hàng bình chọn</h1>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ maxWidth: "100%", maxHeight: "5%", margin: "0 auto" }}
        >
          <div className="carousel-inner">{renderFeedbacks()}</div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FeedBackSlider;
