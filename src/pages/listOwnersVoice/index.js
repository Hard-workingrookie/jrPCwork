import React, { Component } from 'react'
import Tab1 from '../../components/commentsDetail_tab/tab1.js'
import Tab2 from '../../components/commentsDetail_tab/tab2.js'
import {
    yzzs
} from '../../styles/images/commentsDetail/index'
import './index.scss'
export default class commentsDetail extends Component {
    state = {
        flag: true,
    }
    setFlag = (type) => {
        this.setState({
            flag: type,
        });
    }
    render() {
        return (
            <div className="commentsDetail_container">
                
                <div className="commentsDetail_container_top">
                    <div className="top_radius">
                        <div className={this.state.flag ? 'btn btn-choose':'btn'}
                        onClick={() => this.setFlag(true)}>业主评价</div>
                        <div className={!this.state.flag ? 'btn1 btn-choose':'btn1'}
                        onClick={() => this.setFlag(false)}>业主锦旗</div>
                    </div>
                </div>
                <div className="commentsDetail_container_content">
                {this.state.flag == true ? <Tab2 />:<Tab1/>}
                </div>
            </div>
        )
    }
}
