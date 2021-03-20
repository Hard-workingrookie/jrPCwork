import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {
  guanbi,
  baojia,
  liangfang,
  kefu,
  dianhua
} from '../../../styles/images/home/index'
import './right.css' 

export class Rightred extends Component {
    
    state = {
        rightNav: [
            {
                id: 1,
                name:'环保量房',
                active:false,
                path:''
            },
            {
                id: 2,
                name:'户型规划',
                active:false,
                path:''
            },
            {
                id: 3,
                name:'0元报价',
                active:false,
                path:''
            },
            {
                id: 4,
                name:'设计大礼包',
                active:false,
                path:''
            },
            {
                id: 5,
                name:'一站式整装',
                active:false,
                path:''
            }
        ],
        rightBlue: [
            {
                id: 1,
                name: '在线客服',
                active: false,
                path:'',
                src: kefu
            },
            {
                id: 2,
                name: '电话咨询',
                active: false,
                path:'',
                src: dianhua
            },
            {
                id: 3,
                name: '免费量房',
                active: false,
                path:'',
                src: liangfang
            },
            {
                id: 4,
                name: '快速报价',
                active: false,
                path:'',
                src: baojia
            },
        ]
    }


    RenderRightRed() {
        const {rightNav} =this.state;
        return (
            <div className='right_top'>
              <img id='guanbi' className='guanbi' src={guanbi}></img>
              <ul className='rightNav'>
                  {rightNav.map((item) => {
                      return (
                        <li className='rightRed_li' key={item.id}>
                            <div className='right_con'>
                                <NavLink className='right_text' to={item.path}>{item.name}</NavLink>
                            </div>
                        </li>
                      )
                  })} 
              </ul>
            </div>
        )
    }

    RenderRightBlue() {
        const {rightBlue} = this.state;
        return (
            <div className='rightBlue'>
                <ul className='rightBlue_con'>
                    {rightBlue.map((item) => {
                        return (
                            <li className='rightBlue_li' key={item.id}>
                                <div className='rightBlue_text'>
                                    <img className='rightBlue_img' src={item.src}></img>
                                    <NavLink className='rightBlue_A' to={item.path}> {item.name} </NavLink>
                                </div>
                            </li>
                        )
                    })} 

                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className='right_container'>
                {this.RenderRightRed()}
                {this.RenderRightBlue()}
            </div>
        )
    }

    componentDidMount() {
        // 右侧红色背景导航栏，点击关闭
        var guanbi = document.getElementById('guanbi');
        guanbi.onmouseover = function() {
            guanbi.style.cursor = 'pointer';
        }
        var rightRed = document.getElementsByClassName('right_top')[0];
        var rightBlue = document.getElementsByClassName('rightBlue')[0];
        // console.log(rightRed)
        guanbi.onclick = function() {
            rightRed.style.display = 'none';
            rightBlue.style.display = 'block';
        }
       
        console.log(rightBlue)


    }
}