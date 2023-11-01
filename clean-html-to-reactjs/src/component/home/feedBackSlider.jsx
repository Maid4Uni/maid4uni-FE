import React, { useState } from "react";
import RatingStar from "./rating";

const FeedBackSlider = () => {
  const [rating, setRating] = useState(4);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
          <p className="d-inline-block border rounded-pill py-1 px-4">Cảm nhận của khách hàng</p>
          <h1>Khách hàng nhận xét gì về dịch vụ của chúng tôi</h1>
        </div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: "100%", maxHeight:"5%", margin: "0 auto" }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonial-item d-flex justify-content-center align-items-start">
                <div className="text-center">
                  <img
                    className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                    src="img/testimonial-1.jpg"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h5 className="mb-1">Hương Lê</h5>
                  <span className="fst-italic">Sinh viên năm 3</span>
                </div>
                <div className="testimonial-text rounded p-4" style={{ flex: "1" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <RatingStar rating={rating} onRatingChange={handleRatingChange} startSixe={20} >Rate:</RatingStar>
                  </div>
                  <p>
                    "Dịch vụ dọn dẹp căn hộ sinh viên của họ thật sự xuất sắc! Nhóm làm việc chuyên nghiệp và nhiệt tình, họ đã đem lại sự tươi mới cho căn hộ của tôi và giúp tôi tiết kiệm rất nhiều thời gian. Tôi hoàn toàn hài lòng và sẽ tiếp tục sử dụng dịch vụ của họ trong tương lai.".
                  </p>
                </div>
              </div>

            </div>
            <div className="carousel-item">
              <div className="testimonial-item d-flex justify-content-center align-items-start">
                <div className="text-center">
                  <img
                    className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                    src="img/testimonial-2.jpg"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h5 className="mb-1">Nguyễn Văn B</h5>
                  <span className="fst-italic">Sinh viên năm 4</span>
                </div>
                <div className="testimonial-text rounded p-4" style={{ flex: "1" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <RatingStar rating={rating} onRatingChange={handleRatingChange} startSixe={20} >Rate:</RatingStar>
                  </div>
                  <p>
                    Việc học quá tải, là sinh viên năm cuối tôi cần thời gian để
                    chạy deadline đồ án tốt nghiệp của trường. Dịch vụ đã giúp
                    mọi thứ trở nên dễ dàng hơn. Họ luôn đến đúng hẹn và làm
                    việc một cách nhanh chóng, không quá ồn ào. Dịch vụ này thực
                    sự là một cuộc cách mạng đối với sinh viên
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item d-flex justify-content-center align-items-start">
                <div className="text-center">
                  <img
                    className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                    src="img/testimonial-1.jpg"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h5 className="mb-1">Hồ Thị C</h5>
                  <span className="fst-italic">Sinh viên năm nhất</span>
                </div>
                <div className="testimonial-text rounded p-4" style={{ flex: "1" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <RatingStar rating={rating} onRatingChange={handleRatingChange} startSixe={20} >Rate:</RatingStar>
                  </div>
                  <p>
                    "Dịch vụ dọn dẹp căn hộ sinh viên đã giúp tôi thích nghi
                    nhanh chóng với cuộc sống ở trường . Được trải nghiệm không
                    gian sạch sẽ và gọn gàng từ ngày đầu thực sự đã làm tôi cảm
                    thấy thoải mái. Tôi còn mới và mất nhiều thời gian cho việc
                    học tập và tìm hiểu, nhưng dịch vụ này đã loại bỏ gánh nặng
                    về vấn đề dọn dẹp. Tôi hết sức biết ơn!"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedBackSlider;
