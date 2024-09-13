import axios from "axios";
import { API_NOTIFICATION_MESSAGE, SERVICE_URL } from "../Constants/config";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return processResponse(response);
  },
  function (error) {
    return Promise.reject(processError(error));
  }
);

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg || "Unknown Error",
      code: response?.code || "Unknown Code",
    };
  }
};

const processError = (error) => {
  if (error.response) {
    console.log("Error Response", error.toJSON());

    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGE.responseFailure.message,
      code: error.response.status,
    };
  } else if (error.request) {
    console.log("Error Request", error.toJSON());

    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGE.requestFailure.message,
      code: "",
    };
  } else {
    console.log("Error in Network", error.toJSON());

    return {
      isError: true,
      msg: API_NOTIFICATION_MESSAGE.networkError.message,
      code: "",
    };
  }
};

const API = {};
for (const [key, value] of Object.entries(SERVICE_URL)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) => {
    return axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageComplete = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageComplete);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageComplete = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageComplete);
        }
      },
    });
  };
}

export default API; // Export API directly
