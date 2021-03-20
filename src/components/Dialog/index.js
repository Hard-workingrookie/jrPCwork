import React, {Component} from 'react'
import {Modal, Input} from 'antd'
import './index.scss'
import {
  designerBg,
  encourageBg,
  giftBg,
  hourglass,
  priceBg,
  planBg,
  roomBg,
  storageBg
} from '../../styles/images/dialog/index'
class Dialog extends Component {
  state = {
    name: '',
    area: '',
    tel: '',
    question: '',
    telShow: false
  }

  componentWillMount() {}
  componentDidMount() {
    // this.state.timer = setInterval(() => {
    //   this.setState({
    //     price: Math.floor(Math.random() * (100000 - 10000)) + 10000
    //   })
    // }, 100)
  }

  saveInfo() {
    // let {name, area, tel, question} = this.state
    // let obj = {
    //   name: name,
    //   area: area,
    //   tel: tel,
    //   question: question
    // }
    // if (tel === '') {
    //   this.setState({
    //     telShow: true
    //   })
    // } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(tel)) {
    //   Toast.info('手机号码格式不正确~', 1)
    // } else {
    //   this.props.saveInfo(obj)
    //   this.setState({
    //     name: '',
    //     area: '',
    //     tel: '',
    //     question: ''
    //   })
    //   this.props.minus()
    // }
  }

  saveQuestion() {
    // let {question} = this.state
    // let obj = {
    //   question: question
    // }
    // if (question === '') {
    //   Toast.info('内容为空哟~', 1)
    // } else {
    //   this.props.saveInfo(obj)
    //   this.setState({
    //     question: ''
    //   })
    // }
  }

  inputChange(type, e) {
    if (type === 1) {
      this.setState({
        name: e.target.value
      })
    } else if (type === 2) {
      this.setState({
        area: e.target.value
      })
    } else if (type === 3) {
      this.setState({
        tel: e.target.value
      })
    } else {
      this.setState({
        question: e.target.value
      })
    }
  }

  componentWillUnmount() {
    // if (this.state.timer !== null) {
    //   clearInterval(this.state.timer)
    // }
  }

  RenderBg() {
    const {type} = this.props
    let imgsrc = null
    switch (type) {
      case 'plan':
        imgsrc = planBg
        break
      case 'encourage': //鼓励
        imgsrc = encourageBg
        break
      case 'gift':
        imgsrc = giftBg
        break
      case 'price':
        imgsrc = priceBg
        break
      case 'designer':
        imgsrc = designerBg
        break
      case 'storage':
        imgsrc = storageBg
        break
      default:
        imgsrc = roomBg
        break
    }
    return (
      <div
        className='dialog_bg'
        style={{backgroundImage: 'url(' + imgsrc + ')'}}
      >
        {this.RenderInput()}
        {this.RenderBottom()}
      </div>
    )
  }

  RenderTitle() {
    const {type, subTitle} = this.props
    let {price} = this.state
    let changeArea
    if (type === 'like') {
      changeArea = (
        <div className='design_title_f'>
          您将获得居然之家提供的
          <span style={{color: '#0166B3'}}>精美礼品</span>一份
        </div>
      )
    } else if (type === 'design') {
      changeArea = (
        <div className='design_title_f'>
          目前已有 <span style={{color: '#0166B3'}}> {subTitle} </span>
          人获取全屋设计方案
        </div>
      )
    } else if (type === 'room') {
      changeArea = (
        <div className='design_title_f'>
          今天仅剩 <span style={{color: '#0166B3'}}> {this.props.num} </span>
          个名额
        </div>
      )
    } else if (type === 'ask') {
      changeArea = (
        <div className='design_title_f'>
          仅剩 <span style={{color: '#0166B3'}}> {this.props.num} </span>
          个名额
        </div>
      )
    } else if (type === 'price') {
      changeArea = (
        <div className='price_sub_title'>
          <div className='price_sub_title_m'>
            <span className='price_sub_title_left'>预估金额</span>
            <div className='price_sub_title_right'>
              <span>{price}</span>元
            </div>
          </div>
          <div className='design_title_f'>
            目前已有 <span style={{color: '#0166B3'}}> {subTitle} </span>
            人获取装修报价
          </div>
        </div>
      )
    } else if (type === 'activitie') {
      changeArea = (
        <div className='design_title_f'>
          居然之家 <span style={{color: '#0166B3'}}> {subTitle} </span>
          天内的活动会以短信方式通知您
        </div>
      )
    } else {
      changeArea = <div className='design_title_f'>{subTitle}</div>
    }
    return changeArea
  }

  RenderInput() {
    let {telShow} = this.state
    const {btnTxt, type} = this.props
    let changeArea = null
    changeArea = (
      <div
        className='design_input_grounp'
        style={{marginLeft: type == 'plan' ? ' 5.5rem' : '5rem'}}
      >
        <Input
          ref={(myInput) => (this.myInput = myInput)}
          className='design_input'
          placeholder='您的姓名'
          value={this.state.name}
          onChange={this.inputChange.bind(this, 1)}
        />
        {type != 'gift' && (
          <div className=''>
            <Input
              ref={(myInput) => (this.myInput = myInput)}
              className='design_input'
              placeholder='您的房屋面积'
              value={this.state.area}
              type='number'
              onChange={this.inputChange.bind(this, 2)}
            />
            <span className='square'>
              m<sup>2</sup>
            </span>
          </div>
        )}
        <Input
          ref={(myInput) => (this.myInput = myInput)}
          className='design_input'
          placeholder='您的手机号码'
          value={this.state.tel}
          onChange={this.inputChange.bind(this, 3)}
          type='number'
        />
      </div>
    )
    return changeArea
  }

  RenderBottom() {
    const {btnTxt, type} = this.props
    let changeArea = null
    changeArea = (
      <div className=''>
        <div
          style={{right: type == 'plan' ? ' 1.1rem' : '1.58rem',bottom:type=='gift'?'1.42rem':'.8rem'}}
          className='dialog_btn'
        >
          {btnTxt}
        </div>
      </div>
    )
    return changeArea
  }

  render() {
    const {visible, cancelClick, content, type} = this.props
    return (
      <div className='my_dialog_container'>
        <Modal
          centered
          visible={visible}
          footer={null}
          onCancel={cancelClick}
          closable={false}
        >
          <div className='my_dialog_box'>
            {this.RenderBg()}
            <div className='dialog_close_btn_box' onClick={cancelClick}>
              <div className='dialog_close_btn'>
                <span>x</span>
              </div>
            </div>
            {/*
           {this.RenderTitle()}
          */}
          </div>
        </Modal>
      </div>
    )
  }
}

export default Dialog
