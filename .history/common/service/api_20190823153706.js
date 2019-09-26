import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/common/service/jwt";
import { API_URL } from "@/common/config";

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
    this.setHeader()
    this.setFormat()
  },

  setHeader () {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },
  setFormat(){
    Vue.axios.defaults.headers.post[
      'Content-Type'
    ] = 'application/x-www-form-urlencoded'
  },

  get (resource) {
    return Vue.axios.get(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  patch (resource, params) {
    return Vue.axios.patch(resource, params);
  },

  put (resource, params) {
    return Vue.axios.put(resource, params);
  },

  delete (resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const ResultService = {
    getFirstAnswer (params) {
        return ApiService.post(`answer`,params)
    },

    getOldAnswer(){
      return ApiService.post(`answered`,)
    }
}

//openid 放在头部 得到是否为初次测试的结果 
//返回参数为 judgement ==0 初次答题 ==1 不是第一次答题
export const JudgeService = {
    getJudge(){
      return ApiService.post(`main`)
    }
}


