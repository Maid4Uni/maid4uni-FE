import axiosClient from "./axios";

const api = {
  // account
  login: (params) => {
    const url = "login";
    return axiosClient.post(url, params);
  },

  register: (params) => {
    const url = "register";
    return axiosClient.post(url, params);
  },

  // package
  getAllPackage: () => {
    const url = "get-all-package";
    return axiosClient.get(url);
  },

  // order
  createOrder: (params) => {
    const url = "create-order";
    return axiosClient.post(url, params);
  },

  // payment
  createPayment: (params) => {
    const url = "create-vnpay-payment";
    return axiosClient.post(url, params);
  },

  getPayment: (params) => {
    const { vnpAmount, vnpOrderInfo, vnpResponseCode } = params;
    const url = `create-vnpay-payment?vnp_Amount=${vnpAmount}&vnp_OrderInfo=${vnpOrderInfo}&vnp_ResponseCode=${vnpResponseCode}`;
    return axiosClient.post(url);
  },
};

export default api;
