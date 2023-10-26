import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const BannerSlider = () => {
  return (
    <>
      <div class="container-fluid header bg-primary p-0 mb-5">
        <div class="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div class="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
            <div class="owl-carousel header-carousel">
              <Carousel>
                <div class="owl-carousel-item position-relative">
                  <img
                    class="img-fluid"
                    src="img/pexels-tima-miroshnichenko-6195275.jpg"
                    alt=""
                  />
                  <div class="owl-carousel-text">
                    <h1 class="display-1 text-white mb-0">Tiện ích</h1>
                  </div>
                </div>
                <div class="owl-carousel-item position-relative">
                  <img
                    class="img-fluid"
                    src="img/pexels-tima-miroshnichenko-6197117.jpg"
                    alt=""
                  />
                  <div class="owl-carousel-text">
                    <h1 class="display-1 text-white mb-0">Thân Thiện</h1>
                  </div>
                </div>
                <div class="owl-carousel-item position-relative">
                  <img
                    class="img-fluid"
                    src="img/pexels-tima-miroshnichenko-6197108.jpg"
                    alt=""
                  />
                  <div class="owl-carousel-text">
                    <h1 class="display-1 text-white mb-0">Chuyên nghiệp</h1>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlider;
