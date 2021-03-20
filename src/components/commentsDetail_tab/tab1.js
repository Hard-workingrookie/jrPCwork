import React, { Component } from 'react'
import { jq } from '../../styles/images/commentsDetail/index'
import './tab.css'
export default class tab1 extends Component {
 
    render() {
        return (
                <div className="content">
                    <div className="content_left">
                        <div><img className='jq' src={jq} alt='' /></div>
                        <div>北京金隅汇景苑一区xx业主 送来了锦旗</div>
                    </div>
                    <div className="content_left">
                        <div><img className='jq' src={jq} alt='' /></div>
                        <div>北京金辰府三区xx业主 送来了锦旗</div>
                    </div>
                </div>
        )
    } w
}
