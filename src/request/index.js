import axios from "axios";
import {getRootUrl} from "./http";

let baseURL = getRootUrl();
//轮播接口
export const getSwiperList = () => {
    return axios.get(baseURL + "/api/websiteCarousel/findAll");
};
//广告位接口
export const getwebsitePoster = () => {
    return axios.get(baseURL + "/api/websitePoster/findAll");
};
//业主之声接口
export const getownerList = () => {
    return axios.get(baseURL + "/api/ownersVoice/getList");
};

export const getStyleTest = () => {
    return axios.get(baseURL + "/api/websiteInvestigation/findAll");//风格测试
};

export const getStyleResult = () => {
    return axios.get(baseURL + "/api/websiteInvestigation/findAllAnswer");//风格测试结果
};

export const getStoreList = () => {
    return axios.get(baseURL + "/api/websiteStoreAdvertising/findStoreAll");//门店列表
};

export const getDesignerCaseList = () => {
    return axios.get(baseURL + "/api/website/getDesignerCaseList");//案例列表
};

//查询门店宣传图 接口
export const websiteStoreAdvertising = () => {
    return axios.get(baseURL + "/api/websiteStoreAdvertising/findAll");
};
//查询门店列表接口
export const websiteStore = () => {
    return axios.get(baseURL + "/api/websiteStoreAdvertising/findStoreAll");
};

//查询公司动态列表
export const websiteNews = () => {
    return axios.get(baseURL + "/api/websiteNews/findAll");
};
//查询业主详情内推荐列表
export const websiteData = () => {
    return axios.get(baseURL + "/api/websiteData/findAllByTypeId");
};
