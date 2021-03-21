import React, {Component} from 'react'
import {Carousel, Input} from 'antd'
import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper/swiper-bundle.min.js'
import './index.scss'
import Dialog from '../../components/Dialog/index'
import {
  banner,
  floor1Img,
  floor1Tit,
  icon1,
  icon2,
  icon3,
  icon4,
  nowAsk,
  oneDesign,
  floor2Tit,
  floor2Img1,
  floor2Img2,
  floor2Img3,
  floor2Img4,
  Ideallife,
  subscribeDesigner,
  floor2Bg,
  mainMaterial,
  blackBox,
  buleBox,
  askService,
  morebrand,
  floor3Img,
  floor3Tit,
  leftArrow,
  floor7Tit,
  floor5Tit,
  Standards,
  icon5,
  icon7,
  icon6,
  floor7Img1,
  floor7Img2,
  floor7Img3,
  floor7Img4,
  floor7Img5,
  floor7Img6,
  freeIf,
  visitSite,
  moreDesiger,
  understandDetails,
  auxiliaryMaterials,
  inspectionTourImg1,
  inspectionTourImg2,
  inspectionTourImg3,
  designer,
  caseImg,
  floor6Tit,
  floor6Bg,
  nowSubscribe,
  floor7Bg,
  floor4Img,
  floor4Tit,
  moreDetail,
  floor3Bg,
  floor4Bg,
  rightArrow,
  engineeringTechnology1,
  engineeringTechnology2,
  engineeringTechnology3,
  engineeringTechnology4,
  engineeringTechnology5,
  engineeringTechnology6,
  technology11,
  technology12,
  technology13,
  technology21,
  technology22,
  technology31,
  technology32,
  technology41,
  technology42,
  technology43,
  technology51,
  technology52,
  technology53,
  technology61,
  technology62
} from '../../styles/images/lewu/index'

export default class index extends Component {
  state = {
    materialType: 1,
    technologyId: 1,
    engineeringTechnologyData: [
      {
        id: 1,
        title: '水路改造工艺：',
        info: [
          ' 1、穿墙水管套管保护：避免因墙体变形挤压水管、划伤管壁等造成漏水隐患',
          '2、水管加密固定：提高了顶面水管固定性，增强了使用过程中的安全性',
          '3、明装水管防结露工艺：方便检修，使用保温橡塑绵包裹，节能防止结露产生'
        ],
        imgs: [technology11, technology12, technology13],
        icon: engineeringTechnology1
      },
      {
        id: 2,
        title: '电路改造工艺：',
        info: [
          '1、强弱电屏蔽工艺:采用锡箔纸包裹，消除强电对弱点的电磁干扰',
          '2、涮锡工艺：增加导电性，防止点接触、裸露电缆头氧化腐蚀'
        ],
        imgs: [technology21, technology22],
        icon: engineeringTechnology2
      },
      {
        id: 3,
        title: '吊顶安装工艺：',
        info: [
          '1、L型吊顶安装工艺：90°转角处采用L型正版切割，防止吊顶开裂变形',
          '2、吊顶固定“底托立”工艺：有效避免吊顶平面后期开裂问题，顶部更加安全'
        ],
        imgs: [technology31, technology32],
        icon: engineeringTechnology3
      },
      {
        id: 4,
        title: '墙面处理工艺：',
        info: [
          '1、冲筋打点找平工艺：预先在墙壁上用砂浆做的一道从上到下、平、直的基准线',
          '2、阴阳角条找直工艺：阴阳角线做护角，避免其不直影响美观及磕碰导致缺棱掉角',
          '3、地枕基工艺：以整个混凝土为基础的地基，起到支撑和保护的作用更牢固'
        ],
        imgs: [technology41, technology42, technology43],
        icon: engineeringTechnology4
      },
      {
        id: 5,
        title: '防水处理工艺：',
        info: [
          ' 1、防水反渗工艺：防止积水进入铺砖砂灰层，造成暗积水而引起门套底部和地板受潮霉变',
          '2、防水拦截工艺：避免水分通过过门石粘接层渗透至外侧，导致外侧地板或门套受潮变形',
          '3、开槽内刷防水：防止由于管道漏水或水汽凝结积累而造成墙体渗漏'
        ],
        imgs: [technology51, technology52, technology53],
        icon: engineeringTechnology5
      },
      {
        id: 6,
        title: '瓷砖铺贴工艺：',
        info: [
          '1、瓷砖薄贴工艺：提高瓷砖与基层的粘结力，避免瓷砖空鼓、脱落，延长瓷砖使用寿命',
          '2、瓷砖铺贴 “墙压地，侧压正”：将瓷砖接缝留在隐蔽处，提高瓷砖铺贴后的美观性'
        ],
        imgs: [technology61, technology62],
        icon: engineeringTechnology6
      }
    ],
    filterTechnologyData: [],
    planVisible: false,
    designerVisible:false
  }

  onChange(a, b, c) {
    console.log(a, b, c)
  }

  componentWillMount() {
    this.setState({
      filterTechnologyData: this.state.engineeringTechnologyData[0]
    })
  }

  componentDidMount() {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true
    })
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      thumbs: {
        swiper: galleryThumbs
      }
    })
  }

  chooseTechnology(id) {
    let data = []
    this.state.engineeringTechnologyData.map((item) => {
      if (item.id === id) {
        data = item
      }
    })
    this.setState({
      filterTechnologyData: data,
      technologyId: id
    })
  }

  planSaveInfo() {}
  designerSaveInfo(){

  }
  RenderBanner() {
    return (
      <div className='lewu_banner_box'>
        <img src={banner} className='lewu_banner' alt='' />
        <ul className='lewu_banner_icon_box'>
          <li className='lewu_banner_icon_list'>
            <img src={icon1} className='lewu_banner_icon' alt='' />
            <span className='lewu_banner_text'>顶级设计师</span>
            <span className='lewu_banner_text'>高端私人定制设计</span>
          </li>
          <li className='lewu_banner_icon_list'>
            <img src={icon2} className='lewu_banner_icon' alt='' />
            <span className='lewu_banner_text'>精选高端建材</span>
            <span className='lewu_banner_text'>重新定义您的新家</span>
          </li>
          <li className='lewu_banner_icon_list'>
            <img src={icon3} className='lewu_banner_icon' alt='' />
            <span className='lewu_banner_text'>E+工程体系</span>
            <span className='lewu_banner_text'>匠心工艺品质保障</span>
          </li>
          <li className='lewu_banner_icon_list'>
            <img src={icon4} className='lewu_banner_icon' alt='' />
            <span className='lewu_banner_text'>VIP定制服务</span>
            <span className='lewu_banner_text'>完美交付超长质保</span>
          </li>
        </ul>
      </div>
    )
  }

  //   {/*高端定制*/}
  RenderFloor1() {
    return (
      <div className='high_end_customization'>
        <img className='high_end_customization_tit' src={floor1Tit} alt='' />
        <img className='high_end_customization_img' src={floor1Img} alt='' />
        <div className='high_end_customization_btns'>
          <img className='high_end_customization_btn' src={nowAsk} alt='' />
          <img
            className='high_end_customization_btn'
            onClick={() => {
              this.setState({planVisible: true})
            }}
            src={oneDesign}
            alt=''
          />
        </div>
      </div>
    )
  }

  RenderFloor2() {
    return (
      <div
        className='four_life_style'
        style={{backgroundImage: 'url(' + floor2Bg + ')'}}
      >
        <img className='four_life_style_tit' src={floor2Tit} alt='' />
        <div className='four_life_style_list'>
          <img className='four_life_style_img' src={floor2Img1} alt='' />
          <img className='four_life_style_img' src={floor2Img2} alt='' />
          <img className='four_life_style_img' src={floor2Img3} alt='' />
          <img className='four_life_style_img' src={floor2Img4} alt='' />
        </div>
        <img className='Ideal_life_img' src={Ideallife} />
        <div className='four_life_style_btns'>
          <img
            className='four_life_style_btn'
            onClick={() => {
              this.setState({designerVisible: true})
            }}
            src={subscribeDesigner}
            alt=''
          />
          <img className='four_life_style_btn' src={nowAsk} alt='' />
        </div>
      </div>
    )
  }

  RenderFloor3() {
    const {materialType} = this.state
    return (
      <div className='high_end_building_materials'>
        <img className='building_materials_title' src={floor3Tit} alt='' />
        <img className='building_materials_img' src={floor3Img} alt='' />
        <div
          className='main_auxiliary_materials'
          style={{backgroundImage: 'url(' + floor3Bg + ')'}}
        >
          <div className='main_auxiliary_materials_btns'>
            <div
              className='material'
              onClick={() => {
                this.setState({materialType: 1})
              }}
            >
              <img
                className='material_btn'
                src={materialType == 1 ? buleBox : blackBox}
                alt=''
              />
              <span className='main_material_text'>各大品牌-主材</span>
            </div>
            <div
              className='material'
              onClick={() => {
                this.setState({materialType: 2})
              }}
            >
              <img
                className='material_btn'
                src={materialType == 1 ? blackBox : buleBox}
                alt=''
              />
              <span className='main_material_text'>E0级-环保辅料</span>
            </div>
          </div>

          <img
            className='main_material_img'
            src={materialType == 1 ? mainMaterial : auxiliaryMaterials}
            alt=''
          />
        </div>

        <div className='building_materials_btns'>
          <img className='building_materials_btn' src={askService} alt='' />
          <img className='building_materials_btn' src={morebrand} alt='' />
        </div>
      </div>
    )
  }

  RenderFloor4() {
    const {
      engineeringTechnologyData,
      filterTechnologyData,
      technologyId
    } = this.state
    return (
      <div
        className='engineering_system'
        style={{backgroundImage: 'url(' + floor4Bg + ')'}}
      >
        <img className='engineering_system_title' src={floor4Tit} alt='' />
        <ul className='engineering_system_list'>
          <li className='engineering_system_item'>
            <img className='engineering_system_item_icon' src={icon5} alt='' />
            <span className='engineering_system_item_text'>
              标准化施工工艺，<span style={{color: '#FFE400'}}>520项</span>
              关键点控制
            </span>
          </li>
          <li className='engineering_system_item'>
            <img className='engineering_system_item_icon' src={icon6} alt='' />
            <span className='engineering_system_item_text'>
              <span style={{color: '#FFE400'}}>16项</span>核心工艺，
              <span style={{color: '#FFE400'}}>55项</span>施工节点
            </span>
          </li>
          <li className='engineering_system_item'>
            <img className='engineering_system_item_icon' src={icon7} alt='' />
            <span className='engineering_system_item_text'>
              <span style={{color: '#FFE400'}}>75项</span>验收节点，
              <span style={{color: '#FFE400'}}>12项</span>文明施工标准
            </span>
          </li>
        </ul>
        <div className='engineering_system_technology'>
          <div className='engineering_system_technology_left'>
            <Carousel dots={false} autoplay>
              {filterTechnologyData.imgs.map((item) => {
                return (
                  <div className='' key={item}>
                    <img className='' src={item} alt='' />
                  </div>
                )
              })}
            </Carousel>
            <Carousel
              dots={false}
              autoplay
              className='technology_numBox_carousel'
            >
              {filterTechnologyData.info.map((item, index, arr) => {
                return (
                  <div className='engineering_technology_numBox' key={item}>
                    <span className='engineering_technology_info'>{item}</span>
                    <span className='engineering_system_technology_nums'>
                      <span className='engineering_system_technology_curnum'>
                        {index + 1}
                      </span>
                      /{arr.length}
                    </span>
                  </div>
                )
              })}
            </Carousel>
          </div>
          <div className='engineering_system_technology_right'>
            <img
              className='engineering_system_technology_icon'
              src={Standards}
              alt=''
            />
            <span className='engineering_system_technology_title'>
              {filterTechnologyData.title}
            </span>
            <div className='engineering_system_technology_imgs'>
              {engineeringTechnologyData.map((item) => {
                return (
                  <img
                    className={
                      technologyId === item.id
                        ? 'engineering_system_technology_img technology_img_active'
                        : 'engineering_system_technology_img'
                    }
                    src={item.icon}
                    key={item.id}
                    alt=''
                    onClick={this.chooseTechnology.bind(this, item.id)}
                  />
                )
              })}
            </div>
          </div>
        </div>
        {/*按钮*/}
        <div className='engineering_system_btns'>
          <img className='engineering_system_btn' src={moreDetail} alt='' />
          <img className='engineering_system_btn' src={nowAsk} alt='' />
        </div>
      </div>
    )
  }

  RenderFloor5() {
    return (
      <div className='on_site_inspection'>
        <img className='on_site_inspection_title' src={floor5Tit} alt='' />
        <ul className='on_site_inspection_list'>
          <li className='on_site_inspection_item'>
            <img
              className='inspection_tour_img'
              src={inspectionTourImg1}
              alt=''
            />
            <span className='inspection_tour_title'>6阶段巡检</span>
            <div className='inspection_tour_line'></div>
            <span className='inspection_tour_info'>
              现场交底、水电施工、防水施工 瓦工施工、油工施工、主材安装
            </span>
          </li>
          <li className='on_site_inspection_item'>
            <span className='inspection_tour_title'>8次验收</span>
            <div className='inspection_tour_line'></div>
            <span className='inspection_tour_info'>
              预交底方案、材料进场、隐蔽工程、 中期验收、设计方案实施情况、基础
              竣工、主材安装条件及竣工8次验收
            </span>
            <img
              className='inspection_tour_img'
              src={inspectionTourImg2}
              alt=''
            />
          </li>
          <li className='on_site_inspection_item'>
            <img
              className='inspection_tour_img'
              src={inspectionTourImg3}
              alt=''
            />
            <span className='inspection_tour_title'>6次回访</span>
            <div className='inspection_tour_line'></div>

            <span className='inspection_tour_info'>
              量房、预交底、开工、隐蔽工程 中期验收以及交付验收六次回访
            </span>
          </li>
        </ul>
        {/*按钮*/}
        <div className='on_site_inspection_btns'>
          <img
            className='on_site_inspection_btn'
            src={understandDetails}
            alt=''
          />
          <img className='on_site_inspection_btn' src={visitSite} alt='' />
        </div>
      </div>
    )
  }

  renderCaseCarousel() {
    let data = [1, 2, 3, 4, 5, 6]
    return (
      <div className='design_Carousel_box'>
        <div className='swiper-container gallery-top'>
          <div className='swiper-wrapper'>
            {data.map((item) => {
              return (
                <div className='swiper-slide' key={item}>
                  <img className='top_designer_caseImg' src={caseImg} alt='' />
                  <div className='top_designer_info'>
                    <div className='top_designer_info_top'>
                      <img
                        className='top_designer_avator'
                        src={designer}
                        alt=''
                      />
                      <div className='designer_avator_right_info'>
                        <span className='top_designer_name'>周娜</span>
                        <span className='top_designer_title'>主任设计师</span>
                        <span className='top_designer_years'>
                          从业：<span style={{color: '#DAA25B'}}>16年</span>
                        </span>
                        <span className='top_designer_works'>
                          作品：<span style={{color: '#DAA25B'}}>20套</span>
                        </span>
                      </div>
                    </div>
                    <div className='top_designer_info_bottom'>
                      <p className='top_designer_style_title'>擅长风格：</p>
                      <div className='top_designer_styles'>
                        中式｜新古典｜现代简约｜欧式｜现代...
                      </div>
                      <p className='design_concept'>设计理念：</p>
                      <p className='design_concept_text'>
                        用专业的设计语言打造最舒适的居住环境...
                      </p>
                      <div className='view_details_btn'>查看详情</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='design_Carousel_box_bottom'>
          <img
            className='swiper-button-prev  swiper-button-white'
            src={leftArrow}
            alt=''
          />
          <div className='swiper-container gallery-thumbs'>
            <div className='swiper-wrapper'>
              <div
                className='swiper-slide'
                style={{backgroundImage: 'url(' + designer + ')'}}
              ></div>
              <div
                className='swiper-slide'
                style={{backgroundImage: 'url(' + inspectionTourImg2 + ')'}}
              ></div>
              <div
                className='swiper-slide'
                style={{backgroundImage: 'url(' + inspectionTourImg3 + ')'}}
              ></div>
              <div
                className='swiper-slide'
                style={{backgroundImage: 'url(' + designer + ')'}}
              ></div>
              <div
                className='swiper-slide'
                style={{backgroundImage: 'url(' + inspectionTourImg2 + ')'}}
              ></div>
              <div
                className='swiper-slide'
                style={{backgroundImage: 'url(' + inspectionTourImg3 + ')'}}
              ></div>
            </div>
          </div>
          <img
            className='swiper-button-next swiper-button-white'
            src={rightArrow}
            alt=''
          />
        </div>
      </div>
    )
  }

  //  {/*设计师案例*/}
  RenderFloor6() {
    return (
      <div
        className='top_designer_cases'
        style={{backgroundImage: 'url(' + floor6Bg + ')'}}
      >
        <img className='top_designer_cases_title' src={floor6Tit} alt='' />
        <img className='top_more_desiger' src={moreDesiger} alt='' />
        {this.renderCaseCarousel()}
        <div className='top_designer_cases_btns'>
          <img className='top_designer_cases_btn'  onClick={() => {
            this.setState({planVisible: true})
          }} src={oneDesign} alt='' />
          <img className='top_designer_cases_btn'  onClick={() => {
            this.setState({designerVisible: true})
          }} src={nowSubscribe} alt='' />
        </div>
      </div>
    )
  }

  ///vip定制服务
  RenderFloor7() {
    return (
      <div className='vip_custom_service'>
        <img className='vip_custom_service_title' src={floor7Tit} alt='' />
        <div className='vip_custom_service_imgs'>
          <img className='vip_custom_service_img' src={floor7Img1} alt='' />
          <img className='vip_custom_service_img' src={floor7Img2} alt='' />
          <img className='vip_custom_service_img' src={floor7Img3} alt='' />
          <img className='vip_custom_service_img' src={floor7Img4} alt='' />
          <img className='vip_custom_service_img' src={floor7Img5} alt='' />
          <img className='vip_custom_service_img' src={floor7Img6} alt='' />
        </div>
        <div className='Omnidirectional_measuring_room'>
          <img
            className='Omnidirectional_measuring_room_icon'
            src={freeIf}
            alt=''
          />
          <span className='Omnidirectional_measuring_room_title'>
            理想生活第一步：360°全方位量房
          </span>
        </div>
        <div
          className='Omnidirectional_measuring_room_form'
          style={{backgroundImage: 'url(' + floor7Bg + ')'}}
        >
          <Input
            className='measuring_room_form_input'
            placeholder='请输入您的姓名：'
          />
          <Input
            className='measuring_room_form_input'
            placeholder='请输入您的小区地址：'
          />
          <Input
            className='measuring_room_form_input'
            placeholder='请输入您的联系方式：'
          />
          <div className='one_key_reservation_room_btn'>一键预约量房</div>
        </div>
        <div className='measuring_room_form_remarks'>
          <span style={{color: '#D20B02'}}>*</span>
          <span>请您正确填写信息，方便客服第一时间联系您，</span>
          <span style={{color: '#D20B02'}}>
            A股上市公司向您保证：我们将对您的信息严格保密
          </span>
        </div>
      </div>
    )
  }

  render() {
    const {planVisible, designerVisible} = this.state

    return (
      <div className='lewu_container'>
        {this.RenderBanner()}
        {this.RenderFloor1()}
        {/*高端定制*/}
        {this.RenderFloor2()}
        {/*四重解锁生活方式*/}
        {this.RenderFloor3()}
        {/*主材辅材*/}
        {this.RenderFloor4()}
        {/*E+工程系*/}
        {this.RenderFloor5()}
        {/*686巡检*/}
        {this.RenderFloor6()}
        {/*设计师案例*/}
        {this.RenderFloor7()}
        {/*VIP定制服务*/}

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
