import  BASE_URL  from "../../../baseUrl"; // Adjust the path as needed
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