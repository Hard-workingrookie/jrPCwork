import React, {Component} from 'react'
import {Button, Breadcrumb, Icon } from 'antd'
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import $ from '../../../node_modules/jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {
    banner_back,
    banner_flu,
    home,
    jiantou,
    xing,
    zixun,
    zhuangxiu,
    loop1,
    huodong,
    xing1,
    fuwu,
    promise,
    xiangmu,
    yuyue1,
    red_radius,
    yellow_radius,
    zuo,
    you,
    yuan_left,
    yuan_right,
    yezhu,
    touxiang,
    xin,
    backAll,
    first_title,
    first_con,
    first_left,
    first_right,
    second_title,
    second_con1,
    second_con2,
    second_left,
    second_right,
    second_back,
    three_title,
    three_con,
    three_left, 
    three_right,
    four_title,
    four_con,
    four_left ,
    four_right,
    four_back,
    five_title ,
    five_con1 ,
    five_left ,
    five_right
} from '../../styles/images/service/index.js'
import './index.scss'
import moment from 'moment'

export default class Service extends Component {
    state = {
        ownersVoiceList: [
            // {
            //     id: 1,
            //     src: touxiang,
            //     name: '金隅汇景苑一区X先生',
            //     date: '2020年10月9日',
            //     grade:4,
            //     text: '施工质量特别好！当初选择居然之家也是因为居然之家的品牌和口碑非常好！从前期的设计...',
            //     design:5.0,
            //     service:5.0,
            //     pro:5.0
            // },
            // {
            //     id: 2,
            //     src: touxiang,
            //     name: '金隅汇景苑一区',
            //     date: '2020年10月9日',
            //     grade:4,
            //     text: '施工质量特别好！当初选择居然之家也是因为居然之家的品牌和口碑非常好！从前期的设计...',
            //     design:5.0,
            //     service:5.0,
            //     pro:5.0
            // },
            // {
            //     id: 3,
            //     src: touxiang,
            //     name: '金隅汇景苑一区',
            //     date: '2020年10月9日',
            //     grade:4,
            //     text: '施工质量特别好！当初选择居然之家也是因为居然之家的品牌和口碑非常好！从前期的设计...',
            //     design:5.0,
            //     service:5.0,
            //     pro:5.0
            // },
            // {
            //     id: 4,
            //     src: touxiang,
            //     name: '金隅汇景苑一区',
            //     date: '2020年10月9日',
            //     grade:4,
            //     text: '施工质量特别好！当初选择居然之家也是因为居然之家的品牌和口碑非常好！从前期的设计...',
            //     design:5.0,
            //     service:5.0,
            //     pro:5.0
            // },
        ],
        imgList:[]
      
    }
    //跳转到公司简介页面
    gocompanyProfile(){
        this.props.history.push({
            pathname: '/companyProfile'
          })
    }
    //业主之声
    golistOwnersVoice(){
        this.props.history.push({
            pathname: '/listOwnersVoice'
          })
    }
    open53() {
        var _53 = window.$53.createApi()
        _53.push('cmd', 'mtalk')
        _53.query()
      }
    
    RenderTop() {
        return (
            <div className='top' >
                <center className='centers'>
                    <img src= {banner_flu}></img>
                </center>
                <button  id='yuyue'>立即预约量房</button>
            </div>
        )
    }
    RenderMb() {
        return (
            <div className='sec_nav'>
                <div className='left'>
                    <Breadcrumb >
                        <Breadcrumb.Item href="/home">
                            <img src= {home} className='home'></img>
                            <span>首页</span>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>快屋整装</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div class="zwf"></div>
                <div className='right'>
                        <img src={xing}></img>
                        <a href='' onClick={()=>{this.gocompanyProfile()}} className='text'>居然之家自营家装</a>
                        <img src={zixun}></img>
                        <a href='' onClick={()=>{this.open53()}} className='text'>联系客服</a>
                    </div>
            </div>
        )
    }
    renderBannerTop(){
        return (
            <div>
                <div class="content-details inlneBlock">
                    <div class="fa-img">
                        <div class="big-img w51">
                            <ul id="details-bigImg">
                                <li style={{display:"block"}}><img src={zhuangxiu} alt=""/></li>
                                <li style={{display: "none"}}><img src={zhuangxiu} alt=""/></li>
                                <li style={{display: "none"}}><img src={zhuangxiu} alt=""/></li>
                                <li style={{display: "none"}}><img src={zhuangxiu} alt=""/></li>
                                <li style={{display: "none"}}><img src={zhuangxiu} alt=""/></li>
                            </ul>
                        </div>
                    </div>
                    <div class="img-items">
                        <div id="li-btn-prev" class=" inlneBlock li-btn "></div>
                        <div class="li-img inlneBlock">
                            <ul id="details-minImg">
                                <li class="active"><img  src={loop1} alt=""/></li>
                                <li><img src={loop1} alt=""/></li>
                                <li><img  src={loop1}alt=""/></li>
                                <li><img  src={loop1}alt=""/></li>
                                <li><img  src={loop1}alt=""/></li>
                                <li><img  src={loop1}alt=""/></li>
                                <li><img  src={loop1}alt=""/></li>
                                <li><img  src={loop1}alt=""/></li>
                                <li><img  src={loop1}alt=""/></li>
                            </ul>
                        </div>
                        <div id="li-btn-next" class="li-btn  inlneBlock"></div>
                    </div>
                </div>
            </div>
        )
    }
    RenderZhuang() {
        return (
            <div className="containerContentt">
                <div className='zhXiu'>
                <div className='z_left'>
                    {this.renderBannerTop()}
                    <div className='loop'>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='zuo'>
                                        <img></img>
                                    </td>
                                    <td>
                                        <img></img>
                                    </td>
                                    <td>
                                        <img></img>
                                    </td>
                                    <td>
                                        <img></img>
                                    </td>
                                    <td className='you'>
                                        <img></img>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="z_right">
                    <div className='right-top'>
                        <div className='right_title'>快屋整装套餐/全包装修/一站式装修</div>
                        <div className="right_title2">
                            <span className='price'>899</span><span className='danwei'>元/m<sup>2</sup></span>
                            <img src={huodong} className='huodong'></img><span className='huodong_text'>活动通知</span>
                        </div>
                        <span className='pink'>在线咨询客户经理&nbsp;&nbsp;享受额外惊喜</span>
                        <div className='lines'></div>
                        <table className='pingjia'>
                            <tbody>
                                <tr>
                                    <td className='first'>
                                        <span className='yuyue'>预约次数：</span><span id='num'>39998</span>
                                    </td>
                                    <div className="SeparationLine"></div>
                                    <td>
                                        <span className='yuyue'>人气：</span>
                                        <img className='xingList' src={xing1}></img>
                                        <img className='xingList' src={xing1}></img>
                                        <img className='xingList' src={xing1}></img>
                                        <img className='xingList' src={xing1}></img>
                                        <img className='xingList' src={xing1}></img>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='line2'></div>
                        
                        <ul className='list'>
                            <li>
                                <img src={yuyue1}></img> 
                                <span className='grey'>在线预约：</span><span className='black'>享免费环保量房</span>
                            </li>
                            <li>
                                <img src={xiangmu}></img> 
                                <span className='grey'>服务包含内容：</span><span className='black'>设计、施工、辅材、主材</span>
                            </li>
                            <li>
                                <img src={promise}></img> 
                                <span className='grey'>服务承诺：</span><span className='black'>一口价零增项&nbsp;&nbsp;先行赔付</span>
                            </li>
                            <li>
                                <img src={fuwu}></img> 
                                <span className='grey'>数字化服务：</span><span className='black'>金牌管家&nbsp;app远程监管&nbsp;ERP统一管理</span>
                            </li>
                            <li>
                                <button className='red'>免费获取报价</button>
                                <button className='yellow'>立即预约咨询</button>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            </div>
        )
    }

    RenderPingjia() {
        const {ownersVoiceList} = this.state;
        return (
            <div className="pingListC">
                <div className='pingList'>
                    <div className='ping_top'>
                        <div className="pingTop">
                        <span>
                            <img className='yezhu_src' src={yezhu}></img><span className='ping_text_left'>业主评价</span>
                        </span>
                        <div className="lineB"></div>
                        </div>
                        <span className='ping_text_right' onClick={()=>{this.golistOwnersVoice()}}>
                            查看更多<img className='right_img' src={jiantou}></img>
                        </span>
                    </div>
                    <ul className='pingdiv'>
                        {ownersVoiceList.map((item) => {
                            let i = item.logTime
                            let statusPassTime = moment(i).format('YYYY年MM月DD日')
                            return (
                                <li className='ping_list' key={item.icon}>
                                    
                                    <div className = 'ping_list_div'>
                                    <div className="pingjiaListC">
                                        <div>
                                            <img className='touxiang' src= {item.icon}></img>
                                        </div>
                                        <div className="pingjaLists">
                                            <div className='name'> {item.username} </div><br/>
                                            <div className='date'> {statusPassTime} <span className='fabu'>发布评价</span></div>
                                        </div>
                                        </div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span className="pingfen">评分：</span>
                                                        <span className='pingfen_xin'>
                                                            {Array.from({length: item.score}, (_, i) => i).map(
                                                            (a, index) => {
                                                                return <img src={xin} alt='' key={index} />
                                                            }
                                                            )}
                                                        </span>
                                                    </td>
                                                    <td className="hui">
                                                        设计:<span> {item.designScore} </span>
                                                    </td>
                                                    <td  className="hui">
                                                        服务:<span> {item.serviceScore} </span>
                                                    </td>
                                                    <td  className="hui">
                                                        施工:<span> {item.buildScore} </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <text className='textarea'>
                                            {item.content}
                                        </text>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        )
    }
    RenderBack() {
        return (
            <div className='back'>
                <img src= {backAll}></img>
            </div>
        )
    }
    RenderSupei() {
        return (
            <div className='listDIV'>
                <center className='zhengzhuang'>
                    <div className="listTop">
                    <img className='title' src = {first_title}></img>
                    </div>
                    <center>
                        <img className='container' src = {first_con}></img>
                    </center>
                    <div className='bottom_con'>
                        <img className='bottom_left' src={three_left}></img>
                        <img className='bottom_left' src={first_right}></img>
                    </div>
                </center>
                <center className='gexinghua'>
                    <div className="listTopx">
                        <img className='title' src = {second_title}></img>
                    </div>
                    <center>
                        <img className='container con1' src = {second_con1}></img>
                        <img className='container con2' src = {second_con2}></img>
                    </center>
                    <div className='bottom_con'>
                        <img className='bottom_left' src={second_left}></img>
                        <img className='bottom_left' src={second_right}></img>
                    </div>
                </center>
                <center className='xijie'>
                    <div className="listTopx">
                        <img className='title' src = {three_title}></img>
                    </div>
                    <center>
                        <img className='container' src = {three_con}></img>
                    </center>
                    <div className='bottom_con'>
                        <img className='bottom_left' src={three_left}></img>
                        <img className='bottom_left' src={three_right}></img>
                    </div>
                </center>
                <center className='chengdun'>
                    <div className="listTops">
                        <img className='title' src = {four_title}></img>
                    </div>
                    <center>
                        <img className='container' src = {four_con}></img>
                    </center>
                    <div className='bottom_con'>
                        <img className='bottom_left' src={four_left}></img>
                        <img className='bottom_left' src={four_right}></img>
                    </div>
                </center>
                <center className='wuwanjia'>
                    <div className="listTop">
                        <img className='title' src = {five_title}></img>
                    </div>
                    <center> 
                        <img className='container conlist' src = {five_con1}></img>
                        <img className='container conlist' src = {five_con1}></img>
                        <img className='container conlist' src = {five_con1}></img>
                        <img className='container conlist' src = {five_con1}></img>
                        <img className='container conlist' src = {five_con1}></img>
                        <img className='container conlist' src = {five_con1}></img>
                    </center>
                    <div className='bottom_con'>
                        <img className='bottom_left' src={five_left}></img>
                        <img className='bottom_left' src={five_right}></img>
                    </div>
                </center>
                
            </div>
        )
    }

    render() {
        return (
            <div className='service'>
                {this.RenderTop()}
                {this.RenderMb()}
                {this.RenderZhuang()}
                {this.RenderPingjia()}
                {this.RenderBack()}
                {this.RenderSupei()}
            </div>
        )
    }
    componentWillMount(){
        var maxI, sliderLi, index, sliderminImg,liindex,liLenght,minI,minslider;
        liindex =0;
        liLenght= 0;
        var len=0;
        $(function () {
            //产品详情页轮播图
            sliderLi = $('#details-bigImg').find('li');
    //        console.log(sliderLi);
           var len = sliderLi.length - 1;
            index = 0;
            minI = parseInt(len/4);
            maxI =minI;
            minslider =0;
            $('.btn-prev').on('click', function () {
                if (index == 0){
                    _addBorder(0);
                }
                _prev();
            });
            $('.btn-next').on('click', function () {
                // console.log(index);
                _next();
            });
    //        console.log(index);
    
            //绑定小图列表
            sliderminImg = $('#details-minImg').find('li');
            //设置ul的width
            $('#details-minImg').width(len*167);
            $(sliderminImg).each(function (i,even) {
                $(this).on('click',function () {
                //    console.log(i);
                    index = i;
                    // console.log(index);
                    _setBig(i);
                    _addBorder(i);
                })
            });
            $('#li-btn-next').on('click', function () {
            //    console.log(minI);
                if(minI >= 1){
                    minslider += (-167*3);
                    $('#details-minImg').animate({'left':minslider+'px'}, 450);
                    minI--;
                }
            });
            $('#li-btn-prev').on('click', function () {
            //    console.log(minI)
                if(minI < maxI){
                    minslider += (167*3);
                    $('#details-minImg').animate({'left':minslider+'px'}, 450);
                    minI++;
                }
    
            })
        });
    
        function _prev() {
            if (index == 0) {
                return false;
            }
            _fadeOut(index);
            this.index--;
            _fadeIn(index);
            _liprev(index);
            _addBorder(index);
        }
    
        function _next() {
            if (index == len) {
                // console.log(index);
                return false;
            }
            // console.log(len);
            _fadeOut(index);
            index++;
            _fadeIn(index);
            _liNext(index);
            _addBorder(index);
        }
    
        function _fadeOut(index) {
    //        console.log(index);
            var tempImg = $(sliderLi[index]);
            $(tempImg).delay(0).fadeOut(500);
        }
    
        function _fadeIn(index) {
    //        console.log(index);
            var tempImg = $(sliderLi[index]);
            $(tempImg).delay(500).fadeIn(600);
        }
    
        //轮播图小图列表
        function _liNext(index) {
           if((index-1)%2 == 0 && index !=1) {
    //           console.log('right');
               liindex += 2;
            //    console.log(liindex);
               liLenght=-167*liindex;
            //    console.log(liindex);
               $('#details-minImg').animate({'left':liLenght+'px'}, 500);
    
           }
        }
        function _liprev(index) {
            if((index-1)%2 == 0 && liLenght <=-167) {
    //            console.log('left');
                liindex -= 2;
                // console.log(liindex);
                liLenght=-167*liindex;
                // console.log(liindex);
                $('#details-minImg').animate({'left':liLenght+'px'}, 500);
            }
        }
        //给小图添加红色框
        function _addBorder(i) {
            if(i >= len){
                return false;
            }
            if(i < 0){
                return false;
            }
            $(sliderminImg).each(function () {
                $(this).removeClass('active');
            });
            $(sliderminImg[i]).addClass('active');
        }
        //点击小图立马切换到大图
        function _setBig(i) {
            $(sliderLi).each(function (i1,e1) {
                _fadeOut(i1);
                $(this).stop();
            });
            _fadeIn(i);
        }
    }

    componentDidMount() {
        var top = document.getElementsByClassName('top')[0];
        top.style.background = '../../styles/images/service/banner_back.png';
        this.get(`${this.api.getownersVoice}?page=${1}&limit=${4}`, '').then(
            (res) => {
              this.setState({
                ownersVoiceList: res.data
              })
              this.state.ownersVoiceList.map((item, key) => {
                this.setState(
                  {
                    imgList: item.imgUrl.split(',')
                  },
                  () => {
                  }
                )
              })
            }
          )
    }


}