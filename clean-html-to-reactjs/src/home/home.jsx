import { useRequest } from "ahooks";
import { useCallback, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import BannerSlider from "../component/home/bannerSlide";
import FeedBackSlider from "../component/home/feedBackSlider";
import api from "../config/api";
const Home = () => {
  const [search] = useSearchParams();
  // const navigate = useNavigate();
  const { data } = useRequest(async () => {
    try {
      const response = await api.getPopularPackage();
      localStorage.setItem("package", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  });

  const getVnpayPayment = async () => {
    try {
      await api.getPayment({
        vnp_Amount: search.get("vnp_Amount"),
        vnp_OrderInfo: search.get("vnp_OrderInfo"),
        vnp_ResponseCode: search.get("vnp_ResponseCode"),
      });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (search.size !== 0) {
      if (search.get("vnp_TransactionStatus") === "00") {
        // Xử lý khi thanh toán thành công
        console.log("Thanh toán thành công!");
        getVnpayPayment();
        // Thực hiện lưu dữ liệu hoặc các hành động khác ở đây
      } else {
        // Xử lý khi có lỗi trong thanh toán
        console.log("Lỗi trong thanh toán!");

        // Sử dụng navigate để điều hướng đến trang thông báo lỗi
        // navigate('/error');
      }
    }
  }, [search]);

  return (
    <>
      <BannerSlider />
      <div className="container-xxl py-5">
        <div className="container" />
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Nổi bật
          </p>
          <h1>Các gói dịch vụ được yêu thích</h1>
        </div>
        <div className="row g-4">
          {data ? (
            data.map((pkg) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={pkg.id}
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src={pkg.image} alt="" />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>{pkg.name}</h5>
                    <p className="text-primary"></p>
                    <div className="team-social text-center">
                      <p>
                        <i className="far fa-check-circle text-primary me-3"></i>
                        Làm sạch các phòng
                      </p>
                      <p>
                        <i className="far fa-check-circle text-primary me-3"></i>
                        Khử khuẩn phòng bếp và nhà tắm
                      </p>
                      <p>
                        <i className="far fa-check-circle text-primary me-3"></i>
                        Giặt giũ drap giường
                      </p>
                    </div>
                    <Link
                      className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                      to={`service/${pkg.id}`}
                    >
                      Chi tiết
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
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
                        <div class="date" id="date" data-target-input="nearest">
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
                        <div class="time" id="time" data-target-input="nearest">
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
    </>
  );
};

export default Home;
