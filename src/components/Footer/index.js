import React, {Component} from 'react'
import '../../../node_modules/jquery/src/jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import {NavLink} from 'react-router-dom'

import {
  douYin,
  footerBg,
  footerLogo,
  gongZhonghao
} from '../../styles/images/home/index'

class Footer extends Component {
  render() {
    return (
      <div
        className='FooterContainer'
        style={{backgroundImage: 'url(' + footerBg + ')'}}
      >
        <img className='footerLogo' src={footerLogo} alt='' />
        <ul className='footer_link_list'>
          <li className='footer_link_item'>
            <span className='footer_link_title'>关于居然</span>
            <NavLink className='footer_link' to='/companyProfile'>
              公司简介
            </NavLink>
            <NavLink className='footer_link' to='/contactUs'>
              联系我们
            </NavLink>
            <NavLink className='footer_link' to='/juranSiteMap'>
              网站地图
            </NavLink>
            <NavLink className='footer_link' to='#'>
              集团官网
            </NavLink>
          </li>
          <li className='footer_link_item'>
            <span className='footer_link_title'>装修服务</span>
            <NavLink className='footer_link' to='/kuaiwu'>
              快屋整装
            </NavLink>
            <NavLink className='footer_link' to='/lewu'>
              乐屋个性化
            </NavLink>
            <NavLink className='footer_link' to='/designTop'>
              顶层别墅
            </NavLink>
            <NavLink className='footer_link' to='/oldRoom'>
              老房改造
            </NavLink>
          </li>
          <li className='footer_link_item'>
            <span className='footer_link_title'>装修保障</span>
            <NavLink className='footer_link' to='/brandBlliance'>
              品牌联盟
            </NavLink>
            <NavLink className='footer_link' to='/eProject'>
              E+工程体系
            </NavLink>
            <NavLink className='footer_link' to='/promiseJuran'>
              居然承诺
            </NavLink>
          </li>

          <li className='footer_link_contact'>
            <span className='footer_link_title'>联系我们</span>
            <p className='home_decoration_consultation'>
              家装咨询：400-996-1997
            </p>
            <p className='company_address'>
              公司地址：北京市朝阳区十八里店乡周家庄8号居然靓屋 灯饰城四层东侧
            </p>
            <span>查看更多》</span>
            <NavLink className='footer_link' to='/quickQuote'>
              免费家装报价
            </NavLink>
            <NavLink className='footer_link' to='#'>
              免费户型规划
            </NavLink>
          </li>

          <li className='footer_codes'>
            <img className='footer_code' src={gongZhonghao} alt='' />
            <img className='footer_code' src={douYin} alt='' />
          </li>
        </ul>

        <div className='line'></div>
        <p className='footer_copyright'>
          北京居然之家装饰工程有限公司版权所有 © 2000-2020 All Rights Reserved.
          京ICP备14008453号-1
        </p>
        <p className='footer_disclaimers'>
          免责声明：本网站内容部分来源于网络，如权利人发现存在误传其作品情形，请及时与本站联系
        </p>
      </div>
    )
  }
}

export default Footer
