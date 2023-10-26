import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const FeedBackSlider = () => {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p class="d-inline-block border rounded-pill py-1 px-4">
              Cảm nhận của khách hàng
            </p>
            <h1>Khách hàng nhận xét gì về dịch vụ của chúng tôi</h1>
          </div>
          <div
            class="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <Carousel>
              <div class="testimonial-item text-center">
                <img
                  class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="img/testimonial-1.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div class="testimonial-text rounded text-center p-4">
                  <p>
                    "Dịch vụ dọn dẹp căn hộ sinh viên của họ thật sự xuất sắc!
                    Nhóm làm việc chuyên nghiệp và nhiệt tình, họ đã đem lại sự
                    tươi mới cho căn hộ của tôi và giúp tôi tiết kiệm rất nhiều
                    thời gian. Tôi hoàn toàn hài lòng và sẽ tiếp tục sử dụng
                    dịch vụ của họ trong tương lai.".
                  </p>
                  <h5 class="mb-1">Hương Lê</h5>
                  <span class="fst-italic">Sinh viên năm 3</span>
                </div>
              </div>
              <div class="testimonial-item text-center">
                <img
                  class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="img/testimonial-2.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div class="testimonial-text rounded text-center p-4">
                  <p>
                    Việc học quá tải, là sinh viên năm cuối tôi cần thời gian để
                    chạy deadline đồ án tốt nghiệp của trường. Dịch vụ đã giúp
                    mọi thứ trở nên dễ dàng hơn. Họ luôn đến đúng hẹn và làm
                    việc một cách nhanh chóng, không quá ồn ào. Dịch vụ này thực
                    sự là một cuộc cách mạng đối với sinh vien
                  </p>
                  <h5 class="mb-1">Nguyễn Văn B</h5>
                  <span class="fst-italic">Sinh viên năm 4</span>
                </div>
              </div>
              <div class="testimonial-item text-center">
                <img
                  class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="img/testimonial-3.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <div class="testimonial-text rounded text-center p-4">
                  <p>
                    "Dịch vụ dọn dẹp căn hộ sinh viên đã giúp tôi thích nghi
                    nhanh chóng với cuộc sống ở trường . Được trải nghiệm không
                    gian sạch sẽ và gọn gàng từ ngày đầu thực sự đã làm tôi cảm
                    thấy thoải mái. Tôi còn mới và mất nhiều thời gian cho việc
                    học tập và tìm hiểu, nhưng dịch vụ này đã loại bỏ gánh nặng
                    về vấn đề dọn dẹp. Tôi hết sức biết ơn!"
                  </p>
                  <h5 class="mb-1">Hồ Thị C</h5>
                  <span class="fst-italic">Sinh viên năm nhất</span>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBackSlider;
