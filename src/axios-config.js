import axios from "axios";

const client = axios.create({
  baseURL: "https://api.openai.com/v1/chat",
});

export const setAuthHeader = (API_KEY) => {
  if (API_KEY) {
    client.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;
  }
};

const onSuccess = function (response) {
  console.debug("Request Successful!", response);
  return response.data;
};

const onError = function (error) {
  console.error("Request Failed:", error.config);
  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);
    if (
      error.response.status === 401 &&
      error.response?.data?.data?.isSessionExpired
    ) {
    }
  } else {
    // Something else happened while setting up the request
    // triggered the error
    console.error("Error Message:", error.message);
  }

  return Promise.reject({
    errMsg: !error?.response
      ? "Network Issue!"
      : error?.response?.data?.message ||
      error?.response?.data?.error?.message ||
        error?.response?.data?.errors[0].param +
          " " +
          error?.response?.data?.errors[0].msg,
    status: error?.response?.status || "not status",
  });
};
client.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["Authorization"] = `Bearer ${window.localStorage.getItem("API_KEY")}`;

  return config;
});

client.interceptors.response.use(onSuccess, onError);
export default client;
