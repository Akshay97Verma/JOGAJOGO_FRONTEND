import BASE_URL from "../../../baseUrl"
import axios from "axios";

export const userLogin = (payload) => {
  return axios.post(`${BASE_URL}/auth/login`, payload, {});
};

export const userRegister = (payload) => {
    return axios.post(`${BASE_URL}/auth/register`, payload, {});
};

export const serviceRegister = (payload) => {
  return axios.post(`${BASE_URL}/service/service-register`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};

export const serviceLogin = (payload) => {
  return axios.post(`${BASE_URL}/service/service-login`, payload, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });
};





