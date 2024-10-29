import BASE_URL from "../../../baseUrl";
import axios from "axios";

export const createPaymentApi = (payload) => {
  return axios.post(`${BASE_URL}/payment/create-payment`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const verifyPaymentApi = (payload) => {
    return axios.post(`${BASE_URL}/payment/verify-payment`, payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
  };
  
