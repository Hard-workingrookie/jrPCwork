import React, {Component} from 'react'
import '../../../node_modules/jquery/src/jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import {NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Dialog from '../Dialog/index'

import {
  location,
  hot,
  gift,
  phone,
  BigGift,
  logo,
  listed_company
} from '../../styles/images/home/index'

class Head extends Component {
  state = {
    navData: [
      {
        name: '居然首页',
        active: true,
        path: '/home'
      },
      {
        name: '活动专区',
        active: false,
        path: '/home'
      },
      {
        name: '装修服务',
        active: false,
        menu: [
          {id: 1, name: '乐屋个性化', path: '/lewu'},
          {id: 2, name: '899整装', path: '/kuaiwu'},
          {id: 3, name: '顶层别墅', path: '/designTop'},
          {id: 4, name: '老房装修', path: '/oldRoom'},
          {id: 5, name: '厨房翻新', path: '/kitchenRenovation'},
          {id: 6, name: '卫生间翻新', path: '/bathroomRenovation'},
          {id: 7, name: '居然焕新', path: '/refreshJuran'}
        ]
      },
      {
        name: '装修案例',
        active: false,
        path: '/home'
      },
      {
        name: '选设计师',
        active: false,
        path: '/home'
      },
      {
        name: '章鱼买手',
        active: false,
        menu: [
          {id: 1, name: '299主材包', path: '/mainMaterialsT'},
          {id: 2, name: '699主材包', path: 'mainMaterialsS'},
          {id: 3, name: '会员招募', path: '/recruiting'}
        ]
      },
      {
        name: '线下体验',
        active: false,
        menu: [
          {id: 1, name: '线下门店', path: '/listStore'},
          {id: 2, name: '参观工地', path: '/listConstruction'}
        ]
      },
      {
        name: '装修保障',
        active: false,
        menu: [
          {id: 1, name: '项目团队', path: '/projectTeam'},
          {id: 2, name: '品牌联盟', path: '/brandBlliance'},
          {id: 3, name: 'E+工程体系', path: '/eProject'},
          {id: 4, name: '居然承诺', path: '/promiseJuran'},
          {id: 5, name: '数字化服务', path: '/protectionJuran'}
        ]
      },
      {
        name: '装修攻略',
        active: false,
        menu: [
          {id: 1, name: '装修前', path: '/decorationPre'},
          {id: 2, name: '装修中', path: 'decorationZ'},
          {id: 3, name: '装修后', path: '/decorationAfter'},
          {id: 4, name: '装修问答', path: '/renovationq'},
          {id: 5, name: '装修百科', path: '/decorationEncy'},
          {id: 6, name: '装修日记', path: '/renovationDiary'}
        ]
      },
      {
        name: '关于居然',
        active: false,
        menu: [
          {id: 1, name: '公司简介', path: '/companyProfile'},
          {id: 2, name: '公司动态', path: '/companyNews'},
          {id: 3, name: '业主之声', path: '/listOwnersVoice'},
          {id: 4, name: '联系我们', path: '/listStore'}
        ]
      }
    ],
    giftVisible: false
  }

  giftSaveInfo() {}
  chooseNav(name, path) {
    let {navData} = this.state
    navData.map((item) => {
      item.active = false
      if (item.name == name) {
        item.active = true
      }
    })
    this.setState({
      navData: navData
    })
    if (path) {
      this.props.history.push({pathname: path})
    }
  }
  //跳转到报价页面
  goquickQuote() {
    this.props.history.push({
      pathname: '/quickQuote'
    })
  }
  RenderHeaderTop() {
    return (
      <div className='header_top'>
        <div className='header_top_left'>
          <div className='change_address'>
            <img className='address_icon' src={location} alt='' />
            <span className='address_name'>北京</span>
            <span className='switch_address'>[切换]</span>
          </div>
        </div>
        <div className='header_top_right'>
          <div className='preferential_activities'>
            <img className='gift_icon' src={gift} alt='' />
            <span className='activities_span'>优惠活动</span>
            <span className='online_consultation'>
              在线咨询客户经理享受额外惊喜
            </span>
          </div>
          <div className='consultation_hotline'>
            <img className='phone_icon' src={phone} alt='' />
            <span className='hotline_phone'>咨询热线：400-686-1997</span>
          </div>
        </div>
      </div>
    )
  }

  RenderHeaderMid() {
    return (
      <div className='header_mid'>
        <div className='header_mid_left'>
          <img className='header_logo' src={logo} alt='' />
        </div>
        <div className='header_mid_right'>
          <img className='listed_company' src={listed_company} alt='' />
          <div className='Hour_Hotline'>
            <span className='Hour_Hotline_text'>24小时服务热线</span>
            <span className='Hour_Hotline_phone'>400-686-1997</span>
          </div>
          <img
            className='BigGift'
            src={BigGift}
            alt=''
            onClick={() => {
              this.setState({giftVisible: true})
            }}
          />
        </div>
      </div>
    )
  }

  RenderHeaderNav() {
    const {navData} = this.state
    return (
      <ul className='nav nav-tabs header_nav'>
        {navData.map((item, index) => {
          return (
            <li
              role='presentation'
              className='dropdown header_nav_li'
              key={index}
              onClick={this.chooseNav.bind(this, item.name, item.path)}
            >
              <a
                className={`header_nav_link dropdown-toggle ${
                  item.active ? 'header_nav_link_active ' : ''
                }`}
                data-toggle='dropdown'
                href='item.link'
                aria-haspopup='true'
                aria-expanded='false'
              >
                {item.name} {item.menu && <span className='caret'></span>}
              </a>
              {item.name == '活动专区' ? (
                <img className='activity_hot' src={hot} alt='' />
              ) : (
                ''
              )}
              <div className={`${item.active ? 'navlink_active' : ''}`}></div>
              {item.menu && (
                <ul className='dropdown-menu'>
                  {item.menu.map((menuItem) => {
                    return (
                      <li key={menuItem.id}>
                        <NavLink to={menuItem.path}>{menuItem.name}</NavLink>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
        <li className='header_nav_li'>
          <div
            onClick={() => {
              this.goquickQuote()
            }}
            className='quick_quotation'
          >
            快速报价
          </div>
        </li>
      </ul>
    )
  }

  render() {
    const {giftVisible} = this.state
    return (
      <div className='headContainer'>
        {this.RenderHeaderTop()}
        <div className='header_line'></div>
        {this.RenderHeaderMid()}
        <div className='header_line'></div>
        {this.RenderHeaderNav()}
        <Dialog
          type='gift'
          visible={giftVisible}
          cancelClick={() => this.setState({giftVisible: false})}
          btnTxt={['立即获取']}
          saveInfo={this.giftSaveInfo.bind(this)}
        />
      </div>
    )
  }
}

export default withRouter(Head)
