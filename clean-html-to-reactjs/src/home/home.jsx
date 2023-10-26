import React, { useState } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";
import BannerSlider from "../component/home/bannerSlide";
import FeedBackSlider from "../component/home/feedBackSlider";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <BannerSlider />

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="d-flex flex-column">
                <img
                  class="img-fluid rounded w-75 align-self-end"
                  src="img/pexels-rdne-stock-project-6004113.jpg"
                  alt=""
                />
                <img
                  class="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src="img/pexels-tima-miroshnichenko-6195281.jpg"
                  alt=""
                  style={{ marginTop: "-25%" }}
                />
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p class="d-inline-block border rounded-pill py-1 px-4">
                Về chúng tôi
              </p>
              <h1 class="mb-4">
                Bạn có phải là một sinh viên bận rộn không? Hãy để chúng tôi
                giúp bạn rảnh rỗi nhé!
              </h1>
              Với đội ngũ nhân viên chuyên nghiệp và kinh nghiệm, chúng tôi hiểu
              rằng việc duy trì sự sạch sẽ trong căn hộ sinh viên có thể đầy
              thách thức. Chúng tôi không chỉ đơn thuần là một dịch vụ dọn dẹp,
              mà còn là đối tác đồng hành của bạn trong hành trình đại học.
              Chúng tôi sẽ thực hiện dọn dẹp định kỳ và đảm bảo mọi thứ luôn gọn
              gàng.
              <p class="mb-4">
                {" "}
                Hãy để chúng tôi giúp bạn tiết kiệm thời gian và nỗ lực cho
                những hoạt động quan trọng hơn trong cuộc sống sinh viên của
                bạn. Chúng tôi tự hào là người bạn đồng hành tin cậy của các
                bạn, luôn sẵn sàng hỗ trợ để bạn có thể tập trung vào học tập và
                trải nghiệm đáng nhớ.
              </p>
              <p>
                <i class="far fa-check-circle text-primary me-3"></i>Đảm bảo
                chất lượng{" "}
              </p>
              <p>
                <i class="far fa-check-circle text-primary me-3"></i>Đội ngũ
                nhân viên chuyên nghiệp
              </p>
              <p>
                <i class="far fa-check-circle text-primary me-3"></i>Hỗ trợ tận
                tâm
              </p>
              <Link
                class="btn btn-primary rounded-pill py-3 px-5 mt-3"
                to="/about"
              >
                Chi tiết
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
          <div class="row g-0 mx-lg-0">
            <div
              class="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div class="p-lg-5 ps-lg-0">
                <p class="d-inline-block border rounded-pill text-light py-1 px-4">
                  Đặc trưng
                </p>
                <h1 class="text-white mb-4">
                  Tại sao nên chọn dịch vụ của chúng tôi ?
                </h1>
                <p class="text-white mb-4 pb-2">
                  Hãy chọn dịch vụ của chúng tôi để tận hưởng một cuộc sống sinh
                  viên thuận lợi hơn. Chúng tôi cung cấp dịch vụ dọn dẹp chuyên
                  nghiệp và tiết kiệm thời gian, giúp bạn tập trung vào học tập
                  và trải nghiệm đại học một cách thoải mái hơn.
                </p>
                <div class="row g-4">
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i class="fa fa-user-md text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">Chất lượng chuyên nghiệp</p>
                        <h5 class="text-white mb-0">
                          Thân thiện với sinh viên
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i class="fa fa-check text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">An toàn và vệ sinh</p>
                        <h5 class="text-white mb-0">Hỗ trợ bất cứ lúc nào</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i class="fa fa-comment-medical text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">
                          Đội ngũ nhân viên có kinh nghiệm
                        </p>
                        <h5 class="text-white mb-0">
                          Phù hợp với túi tiền của bạn
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="d-flex align-items-center">
                      <div
                        class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: "55px", height: "55px" }}
                      >
                        <i class="fa fa-headphones text-primary"></i>
                      </div>
                      <div class="ms-4">
                        <p class="text-white mb-2">Là ưu tiên hàng đầu</p>
                        <h5 class="text-white mb-0">
                          Sẵn sàng hỗ trợ bất kỳ lúc nào
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="col-lg-6 pe-lg-0 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ minHeight: "400px" }}
            >
              <div class="position-relative h-100">
                <img
                  class="position-absolute img-fluid w-100 h-100"
                  src="img/pexels-tima-miroshnichenko-6197116.jpg"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container" />
        <div
          class="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p class="d-inline-block border rounded-pill py-1 px-4">Nổi bật</p>
          <h1>Các gói dịch vụ được yêu thích</h1>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item position-relative rounded overflow-hidden">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="img/pexels-liliana-drew-9462143.jpg"
                  alt=""
                />
              </div>
              <div class="team-text bg-light text-center p-4">
                <h5>Dịch vụ dọn dẹp nhà</h5>
                <p class="text-primary"></p>
                <div class="team-social text-center">
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Làm
                    sạch các phòng
                  </p>
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Khử
                    khuẩn phòng bếp và nhà tắm
                  </p>
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Giặt
                    giũ drap giường
                  </p>
                </div>
                <Link
                  class="btn btn-primary rounded-pill py-3 px-5 mt-3"
                  to="combo1"
                >
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="team-item position-relative rounded overflow-hidden">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="img/pexels-sarah-chai-7282376.jpg"
                  alt=""
                />
              </div>
              <div class="team-text bg-light text-center p-4">
                <h5>Giặt giũ</h5>
                <p class="text-primary"></p>
                <div class="team-social text-center">
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Giặt
                    quần áo
                  </p>
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Giặt
                    drap, mền, gối
                  </p>
                  <p>
                    <i class="far fa-check-circle text-primary me-3"></i>Giặt
                    topper(Tấm phủ nệm)
                  </p>
                </div>
                <Link
                  class="btn btn-primary rounded-pill py-3 px-5 mt-3"
                  to="combo2"
                >
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="team-item position-relative rounded overflow-hidden">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="https://i.pinimg.com/736x/8d/04/5a/8d045a697f3477eee2124b3dfd18da57.jpg"
                  alt=""
                />
              </div>
              <div class="team-text bg-light text-center p-4">
                <h5>Vệ sinh máy lạnh</h5>
                <Link
                  class="btn btn-primary rounded-pill py-3 px-5 mt-5"
                  to="combo2"
                >
                  Chi tiết
                </Link>
              </div>
            </div>
          </div>

          <div class="container-xxl py-5">
            <div class="container">
              <div class="row g-5">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                  <p class="d-inline-block border rounded-pill py-1 px-4">
                    Trải nghiệm dịch vụ
                  </p>
                  <h1 class="mb-4">
                    LIÊN HỆ NGAY ĐỂ ĐƯỢC TƯ VẤN VỀ CÁC GÓI DỊCH VỤ CỦA EDULUXE
                  </h1>
                  <div class="bg-light rounded d-flex align-items-center p-5 mb-4">
                    <div
                      class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i class="fa fa-phone-alt text-primary"></i>
                    </div>
                    <div class="ms-4">
                      <p class="mb-2">Gọi ngay vào số điện thoại </p>
                      <h5 class="mb-0">+012 345 6789</h5>
                    </div>
                  </div>
                  <div class="bg-light rounded d-flex align-items-center p-5">
                    <div
                      class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                      style={{ width: "55px", height: "55px" }}
                    >
                      <i class="fa fa-envelope-open text-primary"></i>
                    </div>
                    <div class="ms-4">
                      <p class="mb-2">Hoặc có thể gửi Mail </p>
                      <h5 class="mb-0">info@example.com</h5>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div class="bg-light rounded h-100 d-flex align-items-center p-5">
                    <form>
                      <div class="row g-3">
                        <div class="col-12 col-sm-6">
                          <input
                            type="text"
                            class="form-control border-0"
                            placeholder="Họ và tên"
                            style={{ height: "55px" }}
                          />
                        </div>
                        <div class="col-12 col-sm-6">
                          <input
                            type="email"
                            class="form-control border-0"
                            placeholder="Email"
                            style={{ height: "55px" }}
                          />
                        </div>
                        <div class="col-12 col-sm-6">
                          <input
                            type="text"
                            class="form-control border-0"
                            placeholder="SDT"
                            style={{ height: "55px" }}
                          />
                        </div>
                        <div class="col-12 col-sm-6">
                          <select
                            class="form-select border-0"
                            style={{ height: "55px" }}
                          >
                            <option selected>Chọn dịch vụ</option>
                            <option value="1">Vệ sinh nhà cửa</option>
                            <option value="2">Giao nước</option>
                            <option value="3">Nấu ăn</option>
                          </select>
                        </div>
                        <div class="col-12 col-sm-6">
                          <div
                            class="date"
                            id="date"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control border-0 datetimepicker-input"
                              placeholder="Chọn ngày"
                              data-target="#date"
                              data-toggle="datetimepicker"
                              style={{ height: "55px" }}
                            />
                          </div>
                        </div>
                        <div class="col-12 col-sm-6">
                          <div
                            class="time"
                            id="time"
                            data-target-input="nearest"
                          >
                            <input
                              type="text"
                              class="form-control border-0 datetimepicker-input"
                              placeholder="Chọn thời gian"
                              data-target="#time"
                              data-toggle="datetimepicker"
                              style={{ height: "55px" }}
                            />
                          </div>
                        </div>
                        <div class="col-12">
                          <textarea
                            class="form-control border-0"
                            rows="5"
                            placeholder="Những yêu cầu thêm "
                          ></textarea>
                        </div>
                        <div class="col-12">
                          <button
                            class="btn btn-primary w-100 py-3"
                            type="submit"
                          >
                            Đặt dịch vụ
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FeedBackSlider />

          <Link
            to="#"
            class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
          >
            <i class="bi bi-arrow-up"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
