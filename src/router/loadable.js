// react 路由懒加载中间件
import Loadable from 'react-loadable';
import React from 'react';

/***
 * loading加载中出现的提示
 */
export default function loadable(loader) {
  return Loadable({
    loader,
    loading() {
      return <div> 正在加载... </div>
    }
  })
}