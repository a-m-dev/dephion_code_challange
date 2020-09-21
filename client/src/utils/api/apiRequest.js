import Axios from "axios";

const axiosInstance = Axios.create({ timeout: 3000 });

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) config.headers["Authorization"] = token;

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
        status,
        message,
        data: { data },
      } = res;

      if (status !== 200) {
        console.log("BEFORE REJECT >>>", { res });
        return Promise.reject({ message });
      }

      return data;
    })
    .catch((error) => {
      // const { message } = error;

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

      const { message: errMessage } = error;
      return Promise.reject({ message: errMessage });
    });
}

export default apiRequest;
