import Axios from "axios";

const axiosInstance = Axios.create({ timeout: 3000 });

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("authToken");
  if (token) config.headers["Authorization"] = `Bearer ${token}`;

  return config;
});

function apiRequest({ url, method, data, headers = {} }) {
  return axiosInstance
    .request({
      url,
      method,
      data,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    })
    .then((res) => {
      const {
        meta: { code, message },
        data,
      } = res.data;

      if (code === 200 || code === 201) {
        return { code, message, data };
      } else {
        console.log("BEFORE REJECT >>>", { code, message, data });
        return Promise.reject(res);
      }
    })
    .catch((error) => {
      const {
        meta: { code },
        error: { message },
      } = error.response.data;

      // if (error.response && error.response.status >= 400) {
      //   console.log("BEFORE 409 || 405");
      //   return Promise.reject({
      //     status: error.response.status,
      //     message: error.response.data.message,
      //   });
      // }

      // if (message === "Network Error") {
      //   return Promise.reject({
      //     status: 400,
      //     message: "BAD_REQUEST",
      //   });
      // }

      return Promise.reject({ code, message });
    });
}

export default apiRequest;
