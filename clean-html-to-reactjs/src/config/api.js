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
  getAccountList: (page) => {
    const url = `get-account-list/${page}`;
    return axiosClient.get(url);
  },

  // package
  getAllPackage: (page) => {
    const url = `get-all-package/${page}`;
    return axiosClient.get(url);
  },

  getPackage: (id) => {
    const url = `get-a-package/${id}`;
    return axiosClient.get(url);
  },
  getPopularPackage: () => {
    const url = "get-most-popular-packages";
    return axiosClient.get(url);
  },
  updatePackage: (id, data) => {
    const url = `update-package/${id}`;
    return axiosClient.put(url, data);
  },

  // order
  createOrder: (params) => {
    const url = "create-order";
    return axiosClient.post(url, params);
  },
  //service
  getAllService: (page) => {
    const url = `get-all-service/${page}`;
    return axiosClient.get(url);
  },
  // payment
  createPayment: (params) => {
    const url = "create-vnpay-payment";
    return axiosClient.post(url, params);
  },

  getPayment: (params, id) => {
    const { vnp_Amount, vnp_OrderInfo, vnp_ResponseCode } = params;
    const url = `/get-vnpay-payment/${id}?vnp_Amount=${vnp_Amount}&vnp_OrderInfo=${vnp_OrderInfo}&vnp_ResponseCode=${vnp_ResponseCode}`;
    return axiosClient.get(url);
  },

  getBestReview: () => {
    const url = "get-best-review";
    return axiosClient.get(url);
  },
};

export default api;
