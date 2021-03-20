import React, {Component} from 'react'
import {Input , Button} from 'antd'
import {
  jisuan,
  shangla,
  xiala
} from '../../../styles/images/home/index'
import './bottom.css' 
import $ from '../../../../node_modules/jquery'

export class Bottom extends Component {
    state = {
        imgIcon:shangla
    }

    RenderBottom() {
        return (
            <div className='bottom'>
               <center className='bottom-top' id='bottomTop'>
                   <table>
                       <tbody>
                           <tr>
                                <td>
                                    <span className='text text_front'>
                                        <img id='jisuan' className='icon jisuan' src={jisuan}></img>
                                        <span className='text text_color'>算一算</span>
                                        我家装修需要多少钱
                                    </span>
                                </td>
                                <td>
                                    <img onClick={()=>{this.iconHome()}} id='shangla' className='icon shangla' src={this.state.imgIcon}></img>
                                    <span className='text text_last'>(*提前了解详细预算，报价全透明)</span>
                                </td>
                            </tr>
                       </tbody>
                   </table>
               </center>
               <div className='bottom_form' id='bottom_form'>
                    <div  className='form_con'>
                    <table className='form_table'>
                        <tbody className='tbody'>
                            <tr className='firsttr'>
                                <td>
                                    <Input placeholder = '请输入您的姓名：' />
                                </td>
                                <td>
                                    <Input placeholder = '请输入您的联系方式：' />
                                </td>
                                <td rowSpan='2'>
                                    <Button type="primary" id='baojia'>一键获取<br/>装修报价</Button>
                                </td>
                                <td colSpan='2'>
                                    <span className='mianfei'>免费报价电话</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Input placeholder = '请输入您的小区名称：' />
                                </td>
                                <td>
                                    <Input placeholder = '请输入您的房屋面积：' />
                                </td>
                                <td colSpan='2'>
                                    <span className='phone'>400-686-1997</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
               </div>
            </div>
        )
    }

    render() {
        return (
            <div className='bottom_container'>
                {this.RenderBottom()}
            </div>
        )
    }
    //底部下拉滑动事件
    iconHome(){
        if( this.state.imgIcon == shangla ){
            this.setState({
                imgIcon:xiala
            },()=>{
                $('#bottom_form').slideDown()
                console.log(this.state.imgIcon);
            })
        }else{
            this.setState({
                imgIcon:shangla
            })
            $('#bottom_form').slideUp()
        }
    }
}