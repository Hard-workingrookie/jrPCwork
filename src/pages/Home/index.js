import React, {Component} from 'react'
import './index.scss'
import {Carousel, Input, Tag} from 'antd'
import {
  banner,
  location,
  hot,
  gift,
  phone,
  tubiaozhizuo,
  BigGift,
  cangchufuwu,
  caozuojiemiantubiao,
  zuixinfangyuan,
  logo,
  listed_company,
  villa,
  floor2Img,
  service1,
  service2,
  service3,
  service4,
  service5,
  mark1,
  mark2,
  Heart_selected_list_bg,
  Heart_selected_list_right,
  processLine,
  rowlines,
  btn,
  fuwu,
  zhiliangbaozheng,
  play,
  suopeizhongxin,
  anquan,
  blackBG,
  brandBg,
  juranLOGO,
  person,
  decoration1,
  decoration2,
  decoration3,
  decoration4,
  decoration5,
  decoration6,
  decoration7,
  decoration8,
  decorationBg,
  dizhi,
  moresiteLive,
  redFlag,
  siteBg,
  designBg,
  jiantouright,
  jiantouleft,
  caseImg,
  SelectedcasesBg,
  xiaolaba,
  xin,
  stylesTest,
  tupian,
  getProgramme,
  knowledge1,
  knowledge2,
  knowledge3,
  knowledge4,
  edge,
  rightjiantou,
  friendLink
} from '../../styles/images/home/index'
import {Bottom} from '../../components/side/bottom/bottom'
import {Rightred} from '../../components/side/right/right'
import Dialog from '../../components/Dialog/index'

const {CheckableTag} = Tag
const tagsData = [
  '现代简约',
  '新中式',
  '轻奢风格',
  '欧式古典',
  '美式风格',
  '北欧风格',
  '轻工业风格',
  '查看更多 >>'
]
export default class Home extends Component {
  state = {
    floor1data: [
      {
        id: 1,
        name: '免费量房',
        desc: '声、光、水、气环保量房',
        pic: caozuojiemiantubiao,
        path: ''
      },
      {
        id: 2,
        name: '新房装修',
        desc: '一站式装修 省620+小时',
        pic: zuixinfangyuan,
        path: ''
      },

      {
        id: 3,
        name: '老房翻新',
        desc: '免费仓储  租房补贴',
        pic: cangchufuwu,
        path: ''
      },
      {
        id: 4,
        name: '别墅装修',
        desc: ' 量身定制  最大化价值',
        pic: villa,
        path: ''
      },
      {
        id: 5,
        name: '风格测试',
        desc: '挖掘潜在性格  匹配风格',
        pic: tubiaozhizuo,
        path: ''
      }
    ],
    floor2Data: [
      {
        id: 1,
        img: service1,
        markImg: mark1,
        title: '乐屋个性化',
        subTitle: '热销建材  个性随心选 ',
        btnText: '建材品牌有哪些?'
      },
      {
        id: 2,
        img: service2,
        markImg: mark2,
        title: '顶层大宅设计',
        subTitle: '高端私人定制 尊贵之选',
        btnText: '定制私人方案'
      },
      {
        id: 3,
        img: service3,
        markImg: mark2,
        title: '快屋套餐 ',
        subTitle: '899整装速配一步到位 省心之选',
        btnText: '套餐都包哪些？'
      },
      {
        id: 4,
        img: service4,
        markImg: mark2,
        title: '局装局改',
        subTitle: '仅需9天居家焕颜 轻松之选',
        btnText: '需要花多少钱？'
      },
      {
        id: 5,
        img: service5,
        markImg: mark2,
        title: '章鱼买手',
        subTitle: '主材一站式随心购',
        btnText: '主材包有什么？'
      }
    ],
    //装修流程
    floor6Data: [
      {id: 1, name: '预约报名', icon: decoration1},
      {id: 2, name: '挑选风格', icon: decoration2},
      {id: 3, name: '确定方案', icon: decoration3},
      {id: 4, name: '挑选建材', icon: decoration4},
      {id: 5, name: '装修施工', icon: decoration5},
      {id: 6, name: '细节把控', icon: decoration6},
      {id: 7, name: '竣工验收', icon: decoration7},
      {id: 8, name: '超长质保', icon: decoration8}
    ],
    scrollingText: [
      '北京       金隅汇景苑一区  79m²                     开工了',
      '上海       金隅汇景苑一区  109m²                     开工了',
      '杭州       金隅汇景苑一区  102m²                     开工了',
      '广州       金隅汇景苑一区  999m²                     开工了'
    ],
    selectedTags: ['现代简约'],
    decorationKnowledgeData: [
      {id: 1, title: '# 装修攻略 #', subtitle: '装修百科', img: knowledge1},
      {id: 2, title: '# 装修百科 #', subtitle: '设计搭配', img: knowledge2},
      {id: 3, title: '# 装修日记 #', subtitle: '建材选购', img: knowledge3},
      {id: 4, title: '# 装修问答 #', subtitle: '装修价格', img: knowledge4}
    ],
    planVisible: false,
    designerVisible:false,
    siteType:1
  }

  callback(key) {
    console.log(key)
  }

  handleChange(tag, checked) {
    const {selectedTags} = this.state
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    console.log('You are interested in: ', nextSelectedTags)
    this.setState({selectedTags: nextSelectedTags})
  }

  planSaveInfo() {}
  designerSaveInfo(){

  }

  RenderBanner() {
    return (
      <Carousel autoplay>
        <div className='banner_box'>
          <img className='banner_img' src={banner} alt='' />
        </div>
        <div className='banner_box'>
          <img className='banner_img' src={banner} alt='' />
        </div>
        <div className='banner_box'>
          <img className='banner_img' src={banner} alt='' />
        </div>
      </Carousel>
    )
  }
  RenderFloor1() {
    const {floor1data} = this.state
    return (
      <ul className='floor1'>
        {floor1data.map((item) => {
          return (
            <li className='floor_list' key={item.id}>
              <div className='floor_list_left'>
                <span className='floor_list_title'>{item.name}</span>
                <span className='floor_desc'>{item.desc}</span>
              </div>
              <img className='floor1_img' src={item.pic} alt='' />
            </li>
          )
        })}
      </ul>
    )
  }

  RenderFloor2() {
    return (
      <div className='floor2'>
        <img className='floor2Img' src={floor2Img} alt='' />
        <div className='mainMaterial'>
          <Input placeholder='请输入姓名：' />
          <div className='areaInput'>
            <Input placeholder='请输入房屋面积：' />
            <span className='square'>m²</span>
          </div>

          <Input placeholder='请输入联系方式：' />
          <div className='getPrice'>立即获取我家装修主材报价</div>
          <span className='notes'>
            * 为了您的权益，您的一切信息将被严格保密
          </span>
        </div>
      </div>
    )
  }

  //我们的服务
  RenderFloor3() {
    const {floor2Data} = this.state
    return (
      <div className='floor3_service_box'>
        {this.RenderTitle('我们的服务', '—— 选择适合您的家装产品 ——')}
        <ul className='floor3_service_list'>
          {floor2Data.map((item) => {
            return (
              <li
                key={item.id}
                className='floor3_service_item'
                style={{backgroundImage: 'url(' + item.img + ')'}}
              >
                <img className='floor3_service_img' src={item.markImg} alt='' />
                <span className='floor3_service_title'>{item.title}</span>
                <span className='floor3_service_subTitle'>{item.subTitle}</span>
                <button className='floor3_service_btn'>{item.btnText}</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  // 心选榜单
  RenderFloor4() {
    return (
      <div
        className='Heart_selected_list_box'
        style={{backgroundImage: 'url(' + Heart_selected_list_bg + ')'}}
      >
        {this.RenderTitle('心选榜单', '—— 大家都在买 ——')}
        <div className='Heart_selected_list'>
          <div className='Heart_selected_list_left'>
            <div className='Heart_selected_title'>
              <span className='Heart_selected_title_left'>899整装套餐 / </span>
              <span className='Heart_selected_title_right'>
                省心套餐 品质升级
              </span>
            </div>
            <div className='Heart_selected_service_content'>
              <img src={fuwu} alt='' className='selected_service_content_img' />
              <span className='selected_service_content_name'>服务包含：</span>
              <span className='selected_service_content_txt'>
                主材、辅材、施工、整套厨卫、监理
              </span>
            </div>
            <div className='Heart_selected_service_content'>
              <img
                src={zhiliangbaozheng}
                alt=''
                className='selected_service_promise_img'
              />
              <span className='selected_service_content_name'> 服务承诺：</span>
              <span className='selected_service_content_txt'>
                预交底0增项、先行赔付
              </span>
            </div>
            <span className='Heart_selected_service_desc'>
              所有辅材均来自居然之家丽屋超市热销款
            </span>
            <img
              className='Heart_selected_service_process'
              src={processLine}
              alt=''
            />
            <span className='Heart_selected_service_Quota'>
              今日前20名免10000元设计费
            </span>
            <div className='grab_offer_now'>
              <span className='grab_offer_now_txt'>立即抢占优惠</span>
            </div>
          </div>
          <div className='Heart_selected_list_right'>
            <img
              className='Heart_selected_list_right_maxImg'
              src={Heart_selected_list_right}
            />
            <img
              className='Heart_selected_list_right_smallImg'
              src={rowlines}
            />
          </div>
        </div>
      </div>
    )
  }

  //七大理由，品牌故事
  RenderFloor5() {
    return (
      <div className='reasons_story'>
        <div className='Seven_reasons'>
          <div
            className='Seven_reasons_left'
            style={{backgroundImage: 'url(' + blackBG + ')'}}
          >
            <span className='Seven_reasons_left_title'>50000+业主</span>
            <span className='Seven_reasons_left_subTitle'>选择居然装饰</span>
            <span className='Seven_reasons_txt'>七大理由</span>
          </div>
          <div className='Seven_reasons_list_first'>
            <img className='Seven_reasons_list_img' src={juranLOGO} alt='' />
            <span className='Seven_reasons_list_title'>居然之家自营家装</span>
            <span className='Seven_reasons_list_desc'>A股上市公司</span>
          </div>
          <div className='Seven_reasons_list'>
            <img className='Seven_reasons_list_img' src={person} alt='' />
            <span className='Seven_reasons_list_title'>15年家装经验</span>
            <span className='Seven_reasons_list_desc'> 金牌工长，更靠谱</span>
          </div>
          <div
            className='Seven_reasons_list'
            style={{borderLeft: 0, borderRight: 0}}
          >
            <img className='Seven_reasons_list_img' src={anquan} alt='' />
            <span className='Seven_reasons_list_title'>一口价零增项</span>
            <span className='Seven_reasons_list_desc'>预交底=签约价=结算</span>
          </div>
          <div className='Seven_reasons_list'>
            <img
              className='Seven_reasons_list_img'
              src={suopeizhongxin}
              alt=''
            />
            <span className='Seven_reasons_list_title'>居然先行赔付</span>
            <span className='Seven_reasons_list_desc'>开拓者与真正践行者</span>
          </div>
        </div>
        <div className='Brand_story'>
          <div
            className='Brand_story_video'
            style={{backgroundImage: 'url(' + service5 + ')'}}
          >
            <img className='Brand_story_play_video' src={play} alt='' />
          </div>
          <div
            className='Brand_story_right'
            style={{backgroundImage: 'url(' + brandBg + ')'}}
          >
            <img className='Brand_story_logo' src={juranLOGO} alt='' />
            <span className='Brand_story_txt'>品牌故事</span>
            <span className='Brand_story_subtxt'>
              ——让家装和家居服务快乐简单
            </span>
            <div className='learn_more_story'>了解更多 >></div>
          </div>
        </div>
      </div>
    )
  }

  //装修流程
  RenderFloor6() {
    const {floor6Data} = this.state
    return (
      <div
        className='decoration_process'
        style={{backgroundImage: 'url(' + decorationBg + ')'}}
      >
        <span className='decoration_process_title'>装修流程</span>
        <span className='decoration_process_subTit'>
          —— 心中有数 装修不走弯路 ——
        </span>
        <ul className='decoration_process_wrap'>
          {floor6Data.map((item) => {
            return (
              <li className='decoration_process_list' key={item.id}>
                <img
                  className='decoration_process_icon'
                  src={item.icon}
                  alt=''
                />
                <span className='decoration_process_name'>{item.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  //工地直播
  RenderFloor7() {
    const {scrollingText,siteType} = this.state
    return (
      <div className='site_live_floor'>
        {this.RenderTitle(
          '工地直播',
          '——每日更新，360o全方位展示施工现场，看Ta家装修全过程——'
        )}
        <div className='site_live_box'>
          <div className='site_live_left'>
            <Carousel
              dotPosition='left'
              autoplay
              dots={false}
              className='scrollingText_carousel'
            >
              {scrollingText.map((item) => {
                return (
                  <div className='scrollingText' key={item}>
                    <img className='site_live_dizhi_icon' src={dizhi} alt='' />
                    <p className='site_live_dizhi_txt'>{item}</p>
                  </div>
                )
              })}
            </Carousel>
            <div className='site_live_list'>
              {scrollingText.map((item) => {
                return (
                  <div className='site_live_item' key={item}>
                    <img
                      className='site_live_item_img'
                      src={decorationBg}
                      alt=''
                    />
                    <img className='site_live_redFlag' src={redFlag} alt='' />
                    <span className='hot_sites_txt'>热门工地</span>
                    <div className='site_live_list_info'>
                      <span className='site_live_list_address'>
                        北京·金隅汇景苑一区 79m2
                      </span>
                      <span className='site_live_list_browse'>浏览:&nbsp;</span>
                      <span className='site_live_list_browse_num'>388</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className='site_live_right'>
            <div
              className='site_live_right_from'
              style={{backgroundImage: 'url(' + siteBg + ')'}}
            >
              <p>温馨提示： 为保障客服第一时间与您取得联系，请正确填写信息</p>
              <div className='site_live_right_Btns'>
                <div className='visit_construction_site' style={{background:siteType===1?'#3E3E3E':'#FFFFFF',color:siteType===1?'#FFFFFF':'#222222'}} onClick={()=>{this.setState({siteType:1})}}>参观我家附近工地</div>
                <div className='get_community_benefits' style={{background:siteType===2?'#3E3E3E':'#FFFFFF',color:siteType===2?'#FFFFFF':'#222222'}} onClick={()=>{this.setState({siteType:2})}}>获取小区专属优惠</div>
              </div>
              <div className='site_live_froms'>
                <Input
                  className='site_live_froms_input'
                  placeholder='请输入您的姓名：'
                />
                <Input
                  className='site_live_froms_input'
                  placeholder='请输入您的小区名称：'
                />
                <Input
                  className='site_live_froms_input'
                  placeholder='请输入您的联系方式：'
                />
              </div>
              <span className='telephone_application'>
                <span style={{color: '#F9050A'}}>*</span> 免费电话申请:
                <span style={{color: '#F9050A'}}>400-686-1997</span>{' '}
              </span>
              <div className='One_click_appointment'>
              {siteType==1?'一键预约参观工地':'一键获取小区优惠'}
              </div>
            </div>

            <div
              className='site_live_see_more'
              style={{backgroundImage: 'url(' + moresiteLive + ')'}}
            >
              查看更多在施工地 >>
            </div>
          </div>
        </div>
      </div>
    )
  }

  //精选案例邀您品鉴
  RenderFloor8() {
    const {scrollingText, selectedTags} = this.state
    return (
      <div>
        <div
          className='selected_cases_box'
          style={{backgroundImage: 'url(' + SelectedcasesBg + ')'}}
        >
          <p className='selected_cases_title'>精选案例邀您品鉴</p>
          <p className='selected_cases_subtitle'>
            ——
            10余种潮流家装风格，数万套精品案例作品，设计师精心打造，让您快速找到家装灵感！
            ——
          </p>
          <div className='selected_cases_content'>
            <div className='selected_cases_content_left'>
              <img src={caseImg} className='selected_cases_content_case' />

              <Carousel
                dotPosition='left'
                autoplay
                dots={false}
                className='case_note_carousel'
              >
                {scrollingText.map((item) => {
                  return (
                    <div className='case_note_text' key={item}>
                      <img
                        className='case_note_laba_icon'
                        src={xiaolaba}
                        alt=''
                      />
                      <p className='case_notes_txt'>
                        北京金隅汇景苑一区xx业主 送来了锦旗
                      </p>
                    </div>
                  )
                })}
              </Carousel>
            </div>

            <div className='selected_cases_content_design'>
              {/*分页*/}
              <div className='case_pagination'>
                <img
                  className='case_pagination_left'
                  src={jiantouleft}
                  alt=''
                />
                <span className='case_pagination_nums'>
                  <span style={{color: '#fff', fontSize: '.26rem'}}>1</span>
                  /2000
                </span>
                <img
                  className='case_pagination_right'
                  src={jiantouright}
                  alt=''
                />
              </div>
              {/*设计师卡片*/}
              <div
                className='case_design_card'
                style={{backgroundImage: 'url(' + designBg + ')'}}
              >
                <div className='case_design_info'>
                  <img className='case_design_avator' src={caseImg} alt='' />
                  <div className='case_design_info_right'>
                    <span className='case_design_info_name'>郑一君</span>
                    <span
                      className='case_design_info_title'
                      style={{color: '#EDA721'}}
                    >
                      高级主任设计师
                    </span>
                    <p className='case_design_info_years'>
                      从业：<span style={{color: '#EDA721'}}>16年 </span> 作品：
                      <span style={{color: '#EDA721'}}>20套</span>
                    </p>
                    <p className=''>设计理念： </p>
                    <span className='design_concept'>
                      用专业的设计语言打造最舒适的居住环境
                    </span>
                  </div>
                </div>
                <div className='case_address_info'>
                  <span className='case_house_name'>碧水庄园李先生府邸</span>
                  <p className='typeInformation'>
                    <span>本案户型：独栋别墅</span>
                    <span>户型面积：320m²</span>
                  </p>
                  <div className='customer_rating_box'>
                    <span>设计风格：现代轻奢</span>
                    <span>客户评分：</span>
                    <img className='customer_rating' src={xin} alt='' />
                    <img className='customer_rating' src={xin} alt='' />
                    <img className='customer_rating' src={xin} alt='' />
                    <img className='customer_rating' src={xin} alt='' />
                  </div>
                </div>
                <div className='case_design_card_btns'>
                  <div className='case_design_btn_free'
                  onClick={() => {
                    this.setState({planVisible: true})
                  }}
                  >免费定制设计方案</div>
                  <div
                    className='case_design_btn_now'
                    onClick={() => {
                      this.setState({designerVisible: true})
                    }}
                  >
                    立即预约设计师
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ul className='selected_cases_tags'>
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                className='selected_cases_tag'
                checked={selectedTags.indexOf(tag) > -1}
                onChange={(checked) => this.handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </ul>
        </div>
        <img src={stylesTest} className='stylesTestImg' alt='' />
      </div>
    )
  }

  //业主之声
  RenderFloor9() {
    const {scrollingText} = this.state
    let data = [1, 2, 3]
    return (
      <div className='voice_owners_box'>
        {this.RenderTitle(
          '业主之声',
          '—— 每一句话，都将成为衡量我们服务的依据 ——'
        )}
        <Carousel
          autoplay
          dots={true}
          className='voice_owners_carousel'
          dotsClass='voice_owners_carousel_dots'
        >
          {data.map((item) => {
            return (
              <div className='voice_owners_list_wrap' key={item}>
                {data.map((item3) => {
                  return (
                    <div className='voice_owners_list' key={item3}>
                      <img
                        className='voice_owners_avator'
                        src={caseImg}
                        alt=''
                      />
                      <div className='voice_owners_info'>
                        <p className='voice_owners_name'>金隅汇景苑一区X先生</p>
                        <p>
                          <span className='voice_owners_time'>
                            2020年10月9日
                          </span>
                          <span>发布评价</span>
                        </p>
                        <div className='voice_owners_rate'>
                          <span>评分：</span>
                          {scrollingText.map((item1) => {
                            return (
                              <img
                                key={item1}
                                className='voice_owners_rate_icon'
                                src={xin}
                                alt=''
                              />
                            )
                          })}
                        </div>
                        <p className='design_service_construction'>
                          <span>设计:5.0 </span>
                          <span>服务:5.0</span>
                          <span>施工:5.0</span>
                        </p>
                        <p className='voice_owners_evaluate'>
                          施工质量特别好！当初选择居然之家也
                          是因为居然之家的品牌和口碑非常好！ 从前期的设计...
                        </p>
                        <div className='voice_owners_imgs'>
                          {scrollingText.map((item2) => {
                            return (
                              <img
                                key={item2}
                                className='voice_owners_img'
                                src={caseImg}
                                alt=''
                              />
                            )
                          })}
                          <div className='voice_owners_img_numBox'>
                            <img
                              className='voice_owners_img_icon'
                              src={tupian}
                            />
                            <span className='voice_owners_img_nums'>9</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </Carousel>
        <div className='getProgramme_evaluate'>
          <img className='getProgramme_btn'  onClick={() => {
            this.setState({designerVisible: true})
          }} src={getProgramme} alt='' />
          <div className='getEvaluate_btn'>查看更多评价</div>
        </div>
      </div>
    )
  }

  //装修知识大全
  RenderFloor10() {
    const {decorationKnowledgeData} = this.state
    return (
      <div className='decoration_knowledge'>
        {this.RenderTitle(
          '装修知识大全',
          '—— 看装修攻略｜学习装修知识｜掌握装修技巧｜进入美好生活研究所——'
        )}
        <div className='decoration_knowledge_wrap'>
          {decorationKnowledgeData.map((item) => {
            return (
              <div key={item.id} className='decoration_knowledge_list'>
                <div className='decoration_knowledge_list_top'>
                  <img
                    className='decoration_knowledge_img'
                    src={item.img}
                    alt=''
                  />
                  <span className='decoration_knowledge_title'>
                    {item.title}
                  </span>
                </div>

                <div className='decoration_knowledge_list_bottom'>
                  <span className='decoration_knowledge_subTitle'>
                    {item.subtitle}
                  </span>
                  <div className='decoration_knowledge_list_wrap'>
                    {decorationKnowledgeData.map((item1) => {
                      return (
                        <div
                          className='decoration_knowledge_desc'
                          key={item1.id}
                        >
                          <img
                            className='decoration_knowledge_edge'
                            src={edge}
                            alt=''
                          />
                          <span className='decoration_knowledge_txt'>
                            在4㎡的厨房就能当大厨？全靠...
                          </span>
                        </div>
                      )
                    })}
                  </div>
                  <div className='decoration_knowledge_more'>
                    查看更多
                    <img
                      className='decoration_knowledge_jiantou'
                      src={rightjiantou}
                      alt=''
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  //友情链接
  RenderFloor11() {
    var data = Array.from(Array(27), (v, k) => k)
    return (
      <div className='friendly_Link_box'>
        <div className='friendly_Link_box_top'>
          <img className='friendLinkIcon' src={friendLink} alt='' />
          <span className='exchanging_links'>申请互换友情链接</span>
        </div>
        <div className='friendly_Links'>
          {data.map((item) => {
            return (
              <a
                className='friendly_Link_item'
                key={item}
                href='https://fanyi.baidu.com/#en/zh/'
              >
                居然之家装饰
              </a>
            )
          })}
        </div>
      </div>
    )
  }

  RenderTitle(title1, title2) {
    return (
      <div className='sectionTitle_box'>
        <span className='sectionTitle'>{title1}</span>
        <span className='sectionSubTitle'>{title2}</span>
      </div>
    )
  }

  RenderBottom() {
    return <Bottom></Bottom>
  }

  RenderRight() {
    return <Rightred></Rightred>
  }

  render() {
    const {planVisible, designerVisible} = this.state
    return (
      <div className='home_container'>
        {this.RenderBanner()}
        {this.RenderFloor1()}
        {this.RenderFloor2()}
        {/*299*/}
        {this.RenderFloor3()}
        {/*我们的服务*/}
        {this.RenderFloor4()}
        {/*心选榜单*/}
        {this.RenderFloor5()}
        {/*七大理由品牌故事*/}
        {this.RenderFloor6()}
        {/*装修流程*/}
        {this.RenderFloor7()}
        {/*工地直播*/}
        {this.RenderFloor8()}
        {/*精选案例邀您品鉴*/}
        {this.RenderFloor9()}
        {/*业主之声*/}
        {this.RenderFloor10()}
        {/*装修知识大全*/}
        {this.RenderFloor11()}
        {/*友情链接*/}
        {this.RenderBottom()}
        {this.RenderRight()}
        <Dialog
        type='plan'
        visible={planVisible}
        cancelClick={() => this.setState({planVisible: false})}
        btnTxt={['立即获取方案']}
        saveInfo={this.planSaveInfo.bind(this)}
      />
      <Dialog
        type='designer'
        visible={designerVisible}
        cancelClick={() => this.setState({designerVisible: false})}
        btnTxt={['立即获取方案']}
        saveInfo={this.designerSaveInfo.bind(this)}
      />
      </div>
    )
  }
}
