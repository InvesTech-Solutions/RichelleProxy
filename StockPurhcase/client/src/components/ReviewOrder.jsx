import React from 'react';
import NoBuyingPower from './NoBuyingPower.jsx';
import InvalidShare from './InvalidShare.jsx';

class ReviewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showToggle: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(e) {
  	e.preventDefault();
    this.setState({showToggle: !this.state.showToggle});

  }
  	render(){
		return(
		<div class="theme-closed-down">
			<div class="ALPO5r7w2wIkvTuVkrZxA _3uogMWFbTxrCyXUHQuOvRr _3G-y-FFX-GcouMdgj4S7na">
				<div class="_3NYUZLMS54TNjTgbj_F0W- _1kWgk09VvsBhMuY4ZmAd4b" styles="height: 0px; transition-duration: 300ms;">
					<div class="_2V6Md24xa4DhSWKWJ0xJyc">
						<InvalidShare showToggle = {this.state.showToggle} />
					</div>
				</div>
				<div class="_3_Y5qz2hHsr3c1JlQ15G0N">
					<button class="btn btn-primary" onClick={this.handleToggleClick} >{this.state.showToggle ? 'Review Order' : 'Back'}</button>
				</div>
			</div>
		</div>
	)
	}
}

export default ReviewOrder;

// <div class="_3_Y5qz2hHsr3c1JlQ15G0N">
// <button type="button" class="_3dSQqzwfORdyqMK3WsQ_DG _1uaripz9PIQ8yApSTs6BKk">Deposit $180.49</button>
// <button type="button" class="btn-link btn">Back</button>
// </div>
// <NoBuyingPower showToggle = {this.state.showToggle} />