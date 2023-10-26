import React, { useState } from "react";

const About = () => {
  return (
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="d-flex flex-column">
              <img
                class="img-fluid rounded w-75 align-self-end"
                src="img/pexels-liliana-drew-9462143.jpg"
                alt=""
              />
              <img
                class="img-fluid rounded w-50 bg-white pt-3 pe-3"
                src="img/pexels-rdne-stock-project-6004113.jpg"
                alt=""
                style={{ marginTop: "-25%" }}
              />
            </div>
          </div>
          <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <h1 class="mb-4">
              "Sứ Mệnh của EduLuxe: Dịch Vụ Căn Hộ Sinh Viên"
            </h1>
            <p>
              Chúng tôi đã bắt đầu vào năm 2023 tại Đại học FPT, và sứ mệnh của
              chúng tôi vẫn không đổi: cung cấp một giải pháp đơn giản, đáng tin
              cậy và tiết kiệm thời gian cho sinh viên . Sự bận rộn của cuộc
              sống sinh viên yêu cầu mọi người phải làm việc chăm chỉ, và đó là
              lý do tại sao chúng tôi tự hào về việc đảm bảo căn hộ của bạn luôn
              ở trong tình trạng tốt nhất.
            </p>
            <p>
              Dịch vụ của chúng tôi đã được xây dựng với mục tiêu làm cho cuộc
              sống của bạn dễ dàng hơn. Bạn có thể lựa chọn lịch trình dọn dẹp
              hàng tuần hoặc hàng tuần thứ hai để đảm bảo căn hộ luôn được duy
              trì sạch sẽ và gọn gàng. Mỗi lần dọn dẹp của chúng tôi đều được
              điều chỉnh theo ý muốn của bạn, và chúng tôi cam kết bảo đảm sự
              hài lòng của bạn trong vòng 24 giờ.
            </p>
            <p class="mb-4">
              Như một doanh nghiệp được điều hành cục bộ, chúng tôi tự tin về
              chất lượng dịch vụ của mình. Với vật tư và thiết bị dọn dẹp được
              cung cấp sẵn, bạn không cần lo lắng về bất kỳ chi phí hoặc cam kết
              dài hạn nào. Và đặc biệt, chúng tôi có đội ngũ chuyên nghiệp và
              đáng tin cậy, luôn sẵn sàng đưa căn hộ của bạn lên một tầm cao
              mới.
            </p>
            <p>
              Sứ mệnh của Eduluxe không chỉ đơn giản là dọn dẹp căn hộ. Đó là để
              giúp bạn thư giãn, tập trung vào học tập và thưởng thức cuộc sống
              sinh viên của mình một cách thoải mái và không lo lắng về việc dọn
              dẹp. Chúng tôi là 'EduLuxe' và chúng tôi tự hào về sứ mệnh này.
            </p>
            <p>
              <i class="far fa-check-circle text-primary me-3"></i>Cung cấp vật
              tư dọn dẹp
            </p>
            <p>
              <i class="far fa-check-circle text-primary me-3"></i>Sử dụng thiết
              bị chuyên nghiệp
            </p>
            <p>
              <i class="far fa-check-circle text-primary me-3"></i>Đảm bảo bảo
              hiểm đầy đủ
            </p>
            <p>
              <i class="far fa-check-circle text-primary me-3"></i>Không gắn kết
              hợp đồng
            </p>
            <p>
              <i class="far fa-check-circle text-primary me-3"></i>Cam kết bảo
              đảm trong vòng 24 giờ
            </p>
            <p>
              <i class="far fa-check-circle text-primary me-3"></i>Đội ngũ
              chuyên nghiệp và đáng tin cậy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
