import React, { useState } from "react";

const Contact = () => {
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-4">
              <div class="h-100 bg-light rounded d-flex align-items-center p-5">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-map-marker-alt text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Địa chỉ</p>
                  <h5 class="mb-0">
                    Khu Công nghệ cao, P.Long Thạnh Mỹ, Tp. Thủ Đức, TP.HCM.
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="h-100 bg-light rounded d-flex align-items-center p-5">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-phone-alt text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Gọi ngay vào số này</p>
                  <h5 class="mb-0">+012 345 6789</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="h-100 bg-light rounded d-flex align-items-center p-5">
                <div
                  class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i class="fa fa-envelope-open text-primary"></i>
                </div>
                <div class="ms-4">
                  <p class="mb-2">Email chúng tớ nhé</p>
                  <h5 class="mb-0">info@example.com</h5>
                </div>
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="bg-light rounded p-5">
                <p class="d-inline-block border rounded-pill py-1 px-4">
                  Liên hệ chúng tôi
                </p>
                <h1 class="mb-4">Có câu hỏi nào hãy liên hệ chúng tôi!</h1>

                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Nhập tên"
                        />
                        <label for="name">Họ và tên</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Nhập email"
                        />
                        <label for="email"> Email</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Lời nhắn"
                          id="message"
                          style={{ height: "100px" }}
                        ></textarea>
                        <label for="message">Lời nhắn</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">
                        Gửi
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="h-100" style={{ minHeight: "400px" }}>
                <iframe
                  class="rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.6194560818485!2d106.80784449972482!3d10.841197031198762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752731176b07b1%3A0xb752b24b379bae5e!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgVFAuIEhDTQ!5e0!3m2!1svi!2s!4v1695808670518!5m2!1svi!2s"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
