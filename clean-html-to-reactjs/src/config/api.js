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
    const url = 'get-most-popular-packages';
    return axiosClient.get(url);

  },
  updatePackage: (id) => {
    const url = `update-package/${id}`;
    return axiosClient.put(url);
  },

  // order
  createOrder: (params) => {
    const url = "create-order";
    return axiosClient.post(url, params);
  },
  //service
  getAllService: (page) => {
    const url = `get-all-service/${page}`;
    return axiosClient.get(url)
  },
  // payment
  createPayment: (params) => {
    const url = "create-vnpay-payment";
    return axiosClient.post(url, params);
  },

  getPayment: (params) => {
    const {
      vnpAmount,
      vnpOrderInfo,
      vnpResponseCode
    } = params;
    const url = `create-vnpay-payment?vnp_Amount=${vnpAmount}&vnp_OrderInfo=${vnpOrderInfo}&vnp_ResponseCode=${vnpResponseCode}`;
    return axiosClient.post(url);
  },
};

export default api;