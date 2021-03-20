import React, { Component } from 'react'
import {xin} from '../../styles/images/commentsDetail/index'
import moment from "moment";
import {withRouter} from 'react-router-dom'
import './tab.css'
 class tab2 extends Component {
    state={
        ownersVoiceList:[]
    }
    componentDidMount(){
        this.get(`${this.api.getownersVoice}?page=${1}&limit=${10}`, '').then(
            (res) => {
                this.setState({
                    ownersVoiceList:res.data
				})
            }
        )
	}
    goDetails(id){
		this.props.history.push({
			pathname: '/page/detailsOwnersVoice'
			,id:id
		})
	}
	renderowenr(){
		let {ownersVoiceList } = this.state;
		return (
		<div className="tab2_content">
		{
			ownersVoiceList&&ownersVoiceList.map((item,key)=>{
				let i=item.logTime
				let statusPassTime = moment((i)).format('YYYY年MM月DD日'); 
					return(
							<div key={key} className="neighbor_case_content" 
							key={item.id} onClick={this.goDetails.bind(this,item.id)}
							>
						<div className="neighbor_case_content_leftt">
							<img  className="touxiang" src={item.icon} alt="" />
						</div>
						<div className="neighbor_case_content_rightt">
							<div className="neighbor_case_content_r">
								<div className="name_" key={key}>{item.username}</div>
								<div className="b_ll">{statusPassTime}</div>
								<span className="pingfenb">
									<span className="pingfen_fen">评分：</span>
										<span className="pingfen_xin"item={item.score}>
											{
												Array.from({ length: item.score }, (_, i) => i).map((a, index) => {
													return (
														<img src={xin} alt='' />
													)
												})
											}
										</span>
								</span>
							</div>
							<div className="neighbor_case_content_right_b">
							</div>
							<div className="neighbor_case_content_right_c">
								<span className="xaingjiee">
									<div><span>设计：</span><span key={key}>{item.designScore}.0</span></div>
									<div><span>服务：</span><span>{item.serviceScore}.0</span></div>
									<div><span>施工：</span><span>{item.buildScore}.0</span></div>
								</span>
							</div>
							<div className="neighbor_case_content_right_dd">
								{item.content}
							</div>
						</div>
					</div> 
					)
				})
			}
		</div>
		)
}
    render() {
        return (
            <div>
              { this.renderowenr()}
            </div>
        )
    }
}
export default withRouter(tab2)
