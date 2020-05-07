import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });
const instance = axios.create({
  baseURL: "/mock",
  timeout: 15000,
});

// axios请求拦截器
instance.interceptors.request.use((config) => {
  console.log("请求拦截器执行");

  /*显示请求进度条 */
  NProgress.start();

  return config;
});

// axios响应截器
instance.interceptors.response.use(
  (response) => {
    console.log("响应拦截器成功回调执行");
    /* 隐藏进度条 */
    NProgress.done();
    return response.data;
  },
  (error) => {
    console.log("响应拦截器失败回调执行");

    /*  隐藏进度条 */
    NProgress.done();

    alert(`请求出错: ${error.message || "未知错误"}`);

    return Promise.reject(error);
  }
);

export default instance;
