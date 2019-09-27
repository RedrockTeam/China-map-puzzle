import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import JwtService from "@/common/service/jwt";
//import { API } from "@/common/config";    后端url

const ApiService = {
    init() {
        Vue.use(VueAxios, axios)
        // Vue.axios.defaults.baseURL = API_URL
        this.setHeader()
        this.setFormat()
    },

    // setHeader() {
    //     Vue.axios.defaults.headers.common[
    //         "Authorization"
    //     ] = `Token ${JwtService.getToken()}`;
    // },
    setFormat() {
        Vue.axios.defaults.headers.post[
            'Content-Type'
        ] = 'application/x-www-form-urlencoded'
    },

    get(resource) {
        return Vue.axios.get(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },

    post(resource, params) {
        return Vue.axios.post(`${resource}`, params);
    },

    patch(resource, params) {
        return Vue.axios.patch(resource, params);
    },

    put(resource, params) {
        return Vue.axios.put(resource, params);
    },

    delete(resource) {
        return Vue.axios.delete(resource).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    }
};

export default ApiService;

export const ResultService = {
    getFirstAnswer(params) {
        return ApiService.post(`answer`, params)
    },

    getOldAnswer() {
        return ApiService.post(`answered`)
    }
}




