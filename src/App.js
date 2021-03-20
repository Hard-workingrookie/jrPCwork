import React, {Component} from 'react'
import './App.scss'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './router/index'
import routes from './router/config'
import Head from './components/Head/index'
import Footer from './components/Footer/index'

export default class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.resizeListener)
    this.resizeListener()
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeListener)
  }
  resizeListener() {
    // 定义设计图的尺寸 1920
    let designSize = 1920
    // 获取 html 元素
    let html = document.documentElement
    // 定义窗口的宽度
    let clientW = html.clientWidth
    let sizeNum = 100
    if (clientW <= 1360) {
      sizeNum = 130
    } else if (clientW <= 1400) {
      sizeNum = 120
    } else if (clientW <= 1600) {
      sizeNum = 110
    }
    // html 的fontsize 大小
    let htmlRem = (clientW * sizeNum) / designSize
    html.style.fontSize = htmlRem + 'px'
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Head />
          <div style={{marginTop:'1.9rem'}}>
          <RouterView routes={routes}></RouterView>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}
