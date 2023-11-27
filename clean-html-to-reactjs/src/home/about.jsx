import React, { useState } from "react";

const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex flex-column">
              <img
                className="img-fluid rounded w-75 align-self-end"
                src="img/pexels-liliana-drew-9462143.jpg"
                alt=""
              />
              <img
                className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                src="img/pexels-rdne-stock-project-6004113.jpg"
                alt=""
                style={{ marginTop: "-25%" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4">
              "Sứ Mệnh của EduLuxe: Dịch Vụ Căn Hộ Sinh Viên"
            </h1>
            <p>
              Chúng tôi đã bắt đầu vào năm 2023 tại Đại học FPT, và sứ mệnh của
              chúng tôi là: cung cấp một giải pháp đơn giản, đáng tin cậy và
              tiết kiệm thời gian cho sinh viên . Sự bận rộn của cuộc sống sinh
              viên yêu cầu mọi người phải làm việc chăm chỉ, và đó là lý do tại
              sao chúng tôi tự hào về việc đảm bảo căn hộ của bạn luôn ở trong
              tình trạng tốt nhất.
            </p>

            <p>
              Sứ mệnh của Eduluxe không chỉ đơn giản là dọn dẹp căn hộ. Đó là để
              giúp bạn thư giãn, tập trung vào học tập và thưởng thức cuộc sống
              sinh viên của mình một cách thoải mái và không lo lắng về việc dọn
              dẹp. Chúng tôi là 'EduLuxe' và chúng tôi tự hào về sứ mệnh này.
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3"></i>Cung cấp
              vật tư dọn dẹp
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3"></i>Sử dụng
              thiết bị chuyên nghiệp
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3"></i>Đảm bảo
              bảo hiểm đầy đủ
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3"></i>Không gắn
              kết hợp đồng
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3"></i>Cam kết
              bảo đảm trong vòng 24 giờ
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3"></i>Đội ngũ
              chuyên nghiệp và đáng tin cậy
            </p>
          </div>
          <div
            className="customer-benefits row justify-content-around"
            style={{ marginTop: "30px" }}
          >
            <h2 className="mb-3 text-center">
              Quyền Lợi của Bạn Khi Đăng Ký Dịch Vụ
            </h2>
          </div>
          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="benefit-item text-center">
                <img
                  src="https://img.freepik.com/premium-vector/contract-cancellation-business-concept-sign-forbidden-vector-stock-illustration_100456-8966.jpg"
                  alt="Hình ảnh mô tả quyền lợi của khách hàng"
                  className="img-fluid"
                  style={{ width: "100%", maxWidth: "150px", height: "auto" }}
                />
                <p> Không cần hợp đồng</p>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="benefit-item text-center">
                <img
                  src="https://img.freepik.com/free-vector/hand-holding-phone-with-digital-wallet-service-sending-money-payment-transaction-transfer-through-mobile-app-flat-illustration_74855-20589.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1699920000&semt=ais"
                  alt="Hình ảnh mô tả quyền lợi của khách hàng"
                  className="img-fluid"
                  style={{
                    width: "100%",
                    maxWidth: "150px",
                    height: "auto",
                    marginBottom: "20px",
                  }}
                />
                <p>Thanh toán nhanh chóng bằng hình thức thanh toán online</p>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="benefit-item text-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/022/346/594/non_2x/get-a-gift-voucher-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
                  alt="Hình ảnh mô tả quyền lợi của khách hàng"
                  className="img-fluid"
                  style={{ width: "100%", maxWidth: "150px", height: "auto" }}
                />
                <p>Thường xuyên có các trương trình giảm giá</p>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="benefit-item text-center">
                <img
                  src="https://t4.ftcdn.net/jpg/03/74/05/33/360_F_374053323_QmlKtu75fySUkU4dGKhHZqfxJMC2U0Pl.jpg"
                  alt="Hình ảnh mô tả quyền lợi của khách hàng"
                  className="img-fluid"
                  style={{ width: "100%", maxWidth: "150px", height: "auto" }}
                />
                <p>Chăm sóc khách hàng 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
