import axios from "axios";

const API_URL = "http://localhost:5000/";

const verifyUser = (code) => {
    return axios.get(API_URL + "verifyUser/" + code).then((response) => {
      return response.data;
    });
  };

  export default {
    verifyUser
  };