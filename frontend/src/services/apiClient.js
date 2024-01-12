import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

class APIClient {
  endpoint;
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  post = (data) => {
    return axiosInstance.post(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;
