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

      return Promise.reject({ code, message });
    });
}

export default apiRequest;
