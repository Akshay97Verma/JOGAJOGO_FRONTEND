import BASE_URL from "../../../baseUrl"; // Adjust the path as needed
import axios from "axios";

export const getUser = async () => {
  try {
    const token = localStorage.getItem("access_token"); // Corrected the token retrieval
    const response = await axios.get(`${BASE_URL}/user/get-user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Ensure you return the response data
  } catch (error) {
    throw error;
  }
};

export const updateUserApi = async (updatedData) => {
  try {
    const token = localStorage.getItem("access_token"); // Corrected the token retrieval
    const response = await axios.post(`${BASE_URL}/user/edit-user-details`,updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Ensure you return the response data
  } catch (error) {
    throw error;
  }
};

export const addUpdateUserAddressApi = async (addressData) => {
  try {
    const token = localStorage.getItem("access_token"); // Corrected the token retrieval
    const response = await axios.post(`${BASE_URL}/user/add-update-user-address`,addressData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const fetchtUserAddressApi = async () => {
  try {
    const token = localStorage.getItem("access_token"); // Corrected the token retrieval
    const response = await axios.get(`${BASE_URL}/user/fetch-user-address`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Ensure you return the response data
  } catch (error) {
    throw error;
  }
};

export const postWorkFeedbackApi = async (feedbackData) => {
  try {
    const token = localStorage.getItem("access_token"); // Corrected the token retrieval
    const response = await axios.post(`${BASE_URL}/user/post-work-feedback`,feedbackData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const fetchUserFeedbackApi = async () => {
  try {
    const token = localStorage.getItem("access_token"); // Corrected the token retrieval
    const response = await axios.get(`${BASE_URL}/user/fetch-feedback-data`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data; // Ensure you return the response data
  } catch (error) {
    throw error;
  }
};

