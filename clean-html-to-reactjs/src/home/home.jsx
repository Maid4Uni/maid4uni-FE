import { useRequest } from "ahooks";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BannerSlider from "../component/home/bannerSlide";
import FeedBackSlider from "../component/home/feedBackSlider";
import api from "../config/api";

const Home = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const order = JSON.parse(localStorage.getItem("order"));
  const { data } = useRequest(async () => {
    try {
      const response = await api.getPopularPackage();
      localStorage.setItem("package", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    const getVnpayPayment = async () => {
      try {
        await api.getPayment(
          {
            vnp_Amount: search.get("vnp_Amount"),
            vnp_OrderInfo: search.get("vnp_OrderInfo"),
            vnp_ResponseCode: search.get("vnp_ResponseCode"),
          },
          order.orderId
        );
      } catch (e) {
        console.error("Error fetching data from API", e);
      }
    };

    getVnpayPayment();
  }, [search, order]);

  useEffect(() => {
    const vnp_TransactionStatus = search.get("vnp_TransactionStatus");
    if (vnp_TransactionStatus === "00") {
      alert("Giao dịch đã thành công!");
      search.delete("vnp_TransactionStatus");
    } else if (
      vnp_TransactionStatus === "01" ||
      vnp_TransactionStatus === "02"
    ) {
      alert("Giao dịch thất bại!");
      search.delete("vnp_TransactionStatus");
    }
    navigate("/");
  }, [search, navigate]);

  return (
    <>
      <BannerSlider />
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "2000px", padding: "20px" }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Nổi bật
          </p>
          <h1>Các gói dịch vụ được yêu thích</h1>
        </div>
        <div className="row g-5">
          {data ? (
            data.map((pkg) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={pkg.id}
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <div className="img-wrapper">
                      <img
                        className="img-fluid"
                        src={pkg.imageUrl}
                        alt={pkg.name}
                        style={{ width: "600px", height: "400px" }}
                      />
                    </div>
                    <div
                      className="team-text bg-light text-center p-4
                  "
                    >
                      <h5>{pkg.name}</h5>
                      <p className="text-primary">Bao gồm các dịch vụ</p>
                      <hr />
                      <div className="team-social text-center">
                        {pkg.serviceList.slice(0, 3).map((service, index) => (
                          <p key={index}>
                            <i className="far fa-check-circle text-primary me-3"></i>
                            {service.name}
                          </p>
                        ))}
                      </div>

                      <Link
                        className="btn btn-primary rounded-pill py-3 px-5 mb-4"
                        to={`service/${pkg.id}`}
                      >
                        Chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Trải nghiệm dịch vụ
              </p>
              <h1 className="mb-4">
                LIÊN HỆ NGAY ĐỂ ĐƯỢC TƯ VẤN VỀ CÁC GÓI DỊCH VỤ CỦA EDULUXE
              </h1>
              <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i className="fa fa-phone-alt text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2">Gọi ngay vào số điện thoại </p>
                  <h5 className="mb-0">+012 345 6789</h5>
                </div>
              </div>
              <div className="bg-light rounded d-flex align-items-center p-5">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i className="fa fa-envelope-open text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2">Hoặc có thể gửi Mail </p>
                  <h5 className="mb-0">info@example.com</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeedBackSlider />
      <Link
        to="#"
        className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </Link>
    </>
  );
};

export default Home;
