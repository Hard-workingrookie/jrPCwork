let api = {
    getDesignerCaseList: '/api/website/getDesignerCaseList', //案例列表
    getHouseType:'/api/website/getHouseType', //户型下拉列表
    getStoreListImg:'/api/websiteStoreAdvertising/findAll',//门店列表宣传图
    getDecorateStyle:'/api/website/getDecorateStyle',//装修风格宣传图
    getStyleResult:'/api/websiteInvestigation/findAllAnswer',//风格测试结果
    getDesignerCaseInfo:'/api/website/getDesignerCaseInfo',//案例详情
    getCustomerCollect:'/api/customerCollect/save',//用户咨询信息保存
    getownersVoice:'/api/ownersVoice/getList',//评价详情
    getownersVoice:'/api/ownersVoice/getList',//评价列表
    getownersVoiceInfo:'/api/ownersVoice/getInfo',//评价详情
    getWorkSiteList:'/api/website/getWorkSiteList',//工地列表
    getCitySelect:'/api/website/citySelect',//省市区三级查询
    getWorkInfo:'/api/website/getWorkInfo',//工地详情
    getWorkStatusList:'/api/website/getWorkStatusList',//工地项目状态列表
    getProduceInfo: '/api/websiteProduce/getInfo',//产品详情
    findStoreAll: '/api/websiteStoreAdvertising/findStoreAll',//门店列表接口
    findNews:'/api/websiteNews/findAll',//获取新闻动态
    getwebsiteType:'/api/websiteType/findAllByTab',//装修干货分类
    websiteData:'/api/websiteData/findAllByTypeId',//装修干货列表
    getwebsiteDetailInfo:'/api/websiteData/findByDataId',//装修干货详情
    getDesigner:'/api/designer/findAll',//设计师列表
    getDesignerDetail:'/api/designer/findAllById',//设计师详情
    getDesignerDetailCaseList:'/api/designer/getDesignerCaseList',//设计师关联案例列表
    getWorkSiteDetailList:'/api/designer/getWorkSiteList',//设计师关联工地列表
    addReply:'/api/websiteData/addReply',//装修问答增加回复内容接口
    addCount:'/api/websiteData/addCount',//装修干货\装修问答增加查阅次数接口 
    addQuestion:'/api/websiteData/addQuestion',//装修干货增加问题接口
    reversionList:'/api/websiteQuestion/reversionList',//装修干货回复列表接口
    reversionCount:'/api/websiteQuestion/reversionCount',//装修干货回复信息 点赞数 和不喜欢数 
    
}

export default api