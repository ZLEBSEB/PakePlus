import axios from "axios";
import router from "@/router/index";
import { ElNotification } from "element-plus";

// 创建axios实例
const http = axios.create({
  baseURL: "/", // 设置API的基础URL
  timeout: 30000, // 设置请求超时时间
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在这里可以做一些请求前的操作，比如设置 token
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    // 请求错误处理
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // 在这里可以对后端的一些通用操作做处理
    const res = response.data;
    if (response.status !== 200 || response.data?.code !== 200) {
      // 根据实际业务修改
      ElNotification({
        position: "bottom-right",
        title: "提示",
        message: res?.msg || "Error",
        type: "error",
      });
      // alert(res.message || "Error");
      // return Promise.reject(res.message || "Error");
      return Promise.reject(res.message || "Error");
    } else {
      return response.data;
    }
  },
  (error) => {
    // 响应错误处理
    console.error("Response Error:", error);
    let message = "网络错误";
    if (error.response) {
      switch (error.response.status) {
        case 401:
          message = "无权限访问";
          break;
        case 404:
          message = "资源不存在 (404)";
          break;
        case 500:
          message = "服务器错误 (500)";
          break;
        case 403:
          message = "登录失效请重新登录";
          localStorage.clear();
          router.push("/login");
          break;
        // 其他错误状态处理
        default:
          message = `连接错误${error.response.status}`;
      }
      if (error.response.status.data.code != 403) {
        ElNotification({
          position: "bottom-right",
          title: "提示",
          message: message || "服务器发生未知错误",
          type: "error",
        });
      }
    } else {
      if (error.code == "ECONNABORTED") {
        ElNotification({
          position: "bottom-right",
          title: "提示",
          message: "请求超时",
          type: "error",
        });
      }
      if (error.message.includes("timeout")) {
        message = "网络请求超时";
      } else if (error.message.includes("Network")) {
        message = "网络请求错误，请检查网络连接";
      }
    }
    // alert(message);
    return Promise.reject(error);
  }
);

// 封装GET请求
// function get(url: string, params: any) {
//   return http.get(url, { params });
// }

// // 封装POST请求
// function post(url: string, data: any, config: object) {
//   return http.post(url, data, config);
// }

// // 封装PUT请求
// function put(url: string, data: any) {
//   return http.put(url, data);
// }

// 导出封装好的函数
export default http;
