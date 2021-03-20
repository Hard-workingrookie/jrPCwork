import loadable from './loadable';
const Home = loadable(() => import('../pages/Home/index.js'));//首页
//装修服务
const kuaiwu = loadable(() => import('../pages/kuaiwu/index.js'));//快屋套餐
const lewu = loadable(() => import('../pages/lewu/index.js'));//乐屋个性化
const designTop = loadable(() => import('../pages/designTop/index.js'));//顶层别墅
const oldRoom = loadable(() => import('../pages/oldRoom/index.js'));//老房装修
const kitchenRenovation = loadable(() => import('../pages/kitchenRenovation/index.js'));//厨房翻新
const bathroomRenovation = loadable(() => import('../pages/bathroomRenovation/index.js'));//卫生间翻新
const refreshJuran = loadable(() => import('../pages/refreshJuran/index.js'));//居然焕新
//线下体验
const listStore = loadable(() => import('../pages/listStore/index.js'));//线下门店(联系我们)
const listConstruction = loadable(() => import('../pages/listConstruction/index.js'));//参观工地
//装修保障
const projectTeam = loadable(() => import('../pages/projectTeam/index.js'));//项目团队
const brandBlliance = loadable(() => import('../pages/brandBlliance/index.js'));//品牌联盟
const eProject = loadable(() => import('../pages/eProject/index.js'));//E+工程
const promiseJuran = loadable(() => import('../pages/promiseJuran/index.js'));//居然承诺
const protectionJuran = loadable(() => import('../pages/protectionJuran/index.js'));//数字化服务
//关于居然
const companyProfile = loadable(() => import('../pages/companyProfile/index.js'));//公司简介
const companyNews = loadable(() => import('../pages/companyNews/index.js'));//公司动态
const listOwnersVoice = loadable(() => import('../pages/listOwnersVoice/index.js'));//业主之声
const contactUs = loadable(() => import('../pages/contactUs/index.js'));//联系我们

//装修攻略
const decorationPre = loadable(() => import('../pages/decorationPre/index.js'));//装修前
const decorationZ = loadable(() => import('../pages/decorationZ/index.js'));//装修中
const decorationAfter = loadable(() => import('../pages/decorationAfter/index.js'));//装修后
const renovationq = loadable(() => import('../pages/renovationq/index.js'));//装修问答
const decorationEncy = loadable(() => import('../pages/decorationEncy/index.js'));//装修百科
const renovationDiary = loadable(() => import('../pages/renovationDiary/index.js'));//装修日记
//章鱼买手
const recruiting = loadable(() => import('../pages/recruiting/index.js'));//会员招募
const mainMaterialsT = loadable(() => import('../pages/mainMaterialsT/index.js'));//299主材包
const mainMaterialsS = loadable(() => import('../pages/mainMaterialsS/index.js'));//699主材包
//快速报价
const quickQuote = loadable(() => import('../pages/quickQuote/index.js'));//快速报价
//网站地图
const juranSiteMap = loadable(() => import('../pages/juranSiteMap/index.js'));


 const routes = [
   {
    from: '/',
    to: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/kuaiwu',
    component: kuaiwu
  },
  {
    path: '/lewu',
    component: lewu
  },
  {
    path: '/designTop',
    component: designTop
  },
  {
    path: '/oldRoom',
    component: oldRoom
  },
  {
    path: '/refreshJuran',
    component: refreshJuran
  },
  {
    path: '/bathroomRenovation',
    component: bathroomRenovation
  },
  {
    path: '/kitchenRenovation',
    component: kitchenRenovation
  },
  {
    path: '/listStore',
    component: listStore
  },
  {
    path: '/listConstruction',
    component: listConstruction
  },
  {
    path: '/projectTeam',
    component: projectTeam
  },
  {
    path: '/brandBlliance',
    component: brandBlliance
  },
  {
    path: '/eProject',
    component: eProject
  },
  {
    path: '/promiseJuran',
    component: promiseJuran
  },
  {
    path: '/protectionJuran',
    component: protectionJuran
  },
  {
    path: '/companyProfile',
    component: companyProfile
  },
  {
    path: '/companyNews',
    component: companyNews
  },
  {
    path: '/listOwnersVoice',
    component: listOwnersVoice
  }, 
  {
    path: '/decorationPre',
    component: decorationPre
  }, 
  {
    path: '/decorationZ',
    component: decorationZ
  }, 
  {
    path: '/decorationAfter',
    component: decorationAfter
  }, 
  {
    path: '/renovationq',
    component: renovationq
  }, 
  {
    path: '/decorationEncy',
    component: decorationEncy
  }, 
  {
    path: '/renovationDiary',
    component: renovationDiary
  }, 
  {
    path: '/recruiting',
    component: recruiting
  }, 
  {
    path: '/mainMaterialsT',
    component: mainMaterialsT
  },
  {
    path: '/mainMaterialsS',
    component: mainMaterialsS
  }, 
  {
    path: '/quickQuote',
    component: quickQuote
  }, 
  {
    path: '/contactUs',
    component: contactUs
  }, 
  {
    path: '/juranSiteMap',
    component: juranSiteMap
  }, 
];


export default routes;