import React from "react";

const BannerSlider = () => {
  return (
    <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel"  style={{ maxWidth: "100%", maxHeight:"5%", margin: "0 auto" }}>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="img/pexels-tima-miroshnichenko-6195275.jpg" class="d-block w-100" alt="First slide" />
              <div class="carousel-caption d-none d-md-block">
                <h2 style={{color:"white"}}>Tiện ích</h2>
                <h5 style={{color:"white"}}>Chúng tôi cung cấp các dịch vụ vệ sinh chất lượng cao.</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/pexels-tima-miroshnichenko-6197117.jpg" class="d-block w-100" alt="Second slide" />
              <div class="carousel-caption d-none d-md-block">
                <h2 style={{color:"white"}}>Thân thiện</h2>
                <h5 style={{color:"white"}}>Chúng tôi cam kết đem đến sự hài lòng tuyệt đối cho bạn.</h5>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/pexels-tima-miroshnichenko-6197108.jpg" class="d-block w-100" alt="Third slide" />
              <div class="carousel-caption d-none d-md-block">
                <h2 style={{color:"white"}}>Chuyên nghiệp</h2>
                <h5 style={{color:"white"}}>Chúng tôi cam kết đem đến cho bạn dịch vụ vệ sinh chất lượng cao và chuyên nghiệp nhất.</h5>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
   

    </>
  );
};

export default BannerSlider;
