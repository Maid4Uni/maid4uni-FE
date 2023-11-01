import React, { useEffect, useState } from "react";
import api from "../config/api";


const ConfirmationPage = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data from API", error);
            }
        };

        fetchData();
    }, []);
    const handlePayment = () => {
        // Gọi API của VNPay tại đây
        window.location.href = "URL_API_VNPAY"; 
    }

    return (
        <div class="container">
            <h4 class="text-center mt-5">Xác Nhận Thanh Toán</h4>
            <div class="row mt-3">
                <div class="col-md-6">
                    <img src="" alt="Gói Dịch Vụ" class="img-fluid" />
                    <h5 class="mt-2 mb-1">Tên Gói Dịch Vụ: { } </h5>

                </div>
                <div class="col-md-6">
                    <div class="mt-3">
                        <h6>Thông tin dịch vụ</h6>
                        <div class="mb-3">
                            <input type="text" id="order" class="form-control" placeholder="Thông tin" required />
                        </div>
                        <div class="mb-3">

                            <textarea id="refundPolicy" class="form-control" rows="4" placeholder="Nội dung chuyển tiền" required></textarea>
                        </div>
                        <div class="mb-3">
                            <h6 class="fw-bold">Giá Tiền{ }</h6>
                        </div>

                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input" id="vnpay" />
                            <label class="form-check-label" for="vnpay">VNPay</label>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", width: "300px" }}>
                            <a href="/booking1">
                                <button class="btn btn-success">Quay lại</button>
                            </a>
                           
                                <button class="btn btn-success" onClick={handlePayment}>Thanh toán</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ConfirmationPage;