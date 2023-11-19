import { useRequest } from "ahooks";
import { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BannerSlider from "../component/home/bannerSlide";
import FeedBackSlider from "../component/home/feedBackSlider";
import api from "../config/api";


const Home = () => {
  const [search] = useSearchParams();
  const navigate = useNavigate();
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
    const orderId = search.get("id");
    const vnp_Amount = search.get("vnp_Amount");
    const vnp_OrderInfo = search.get("vnp_OrderInfo");
    const vnp_ResponseCode = search.get("vnp_ResponseCode");

    if (orderId && vnp_Amount && vnp_OrderInfo && vnp_ResponseCode) {
      saveOrderDetails(orderId, vnp_Amount, vnp_OrderInfo, vnp_ResponseCode);
    }
  }, [search]);

  const saveOrderDetails = async (orderId, vnp_Amount, vnp_OrderInfo, vnp_ResponseCode) => {
    try {
      const response = await api.getPayment(orderId, {
        vnp_Amount,
        vnp_OrderInfo,
        vnp_ResponseCode,
      });
      console.log("Order details saved:", response.data);
    } catch (error) {
      console.error("Error saving order details:", error);
    }
  };
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
