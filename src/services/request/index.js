import axios from "axios";
import { BASE_URl, TIME_OUT } from "./config";
class XYRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout });
    //响应拦截
    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => err
    );
  }
  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.instance.request({ ...config, method: "get" });
  }
  post(config) {
    return this.instance.request({ ...config, method: "post" });
  }
}
export default new XYRequest(BASE_URl, TIME_OUT);
