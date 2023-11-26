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
  getAccountInfo: (id) => {
    const url = `get-account-info-by-id?id=${id}`;
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
  createPackage: (params) => {
    const url = "create-package";
    return axiosClient.post(url, params);
  },
  getCategory: (id, page) => {
    const url = `get-package-by-category/${id}&${page}`;
    return axiosClient.get(url);
  },
  deletePackage: (id) => {
    const url = `delete-package/${id}`;
    return axiosClient.delete(url);
  },

  // order
  createOrder: (params) => {
    const url = "create-order";
    return axiosClient.post(url, params);
  },
  updateOrderStatus: (params) => {
    const url = "update-order-status";
    return axiosClient.put(url, params);
  },
  getOrderList: (id) => {
    const url = `get-order-list-by-customer/${id}`;
    return axiosClient.get(url);
  },
  getAllOrder: (page) => {
    const url = `get-all-order/${page}`;
    return axiosClient.get(url);
  },
  getOrderDetail: (id) => {
    const url = `get-order-detail-by-orderId/${id}`;
    return axiosClient.get(url);
  },
  //service
  getAllService: (page) => {
    const url = `get-all-service/${page}`;
    return axiosClient.get(url);
  },
  createService: (params) => {
    const url = "create-service";
    return axiosClient.post(url, params);
  },
  updateService: (id, updateData) => {
    const url = `update-service/${id}`;
    return axiosClient.put(url, updateData)
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

  //task
  getTask: (id) => {
    const url = `get-task-by-staff-id/${id}`;
    return axiosClient.get(url)
  },
  updateTask: (id, updateData) => {
    const url = `update-task/${id}`;
    return axiosClient.put(url, updateData)
  }
};

export default api;
