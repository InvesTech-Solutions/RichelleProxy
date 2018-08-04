import React from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from './components/HeaderBar.jsx';
import ReviewOrder from './components/ReviewOrder.jsx';
import ShareCalcForm from './components/ShareCalcForm.jsx';
import NoBuyingPower from './components/NoBuyingPower.jsx';
import $ from 'jquery';

var testData= [{
    id: 100,
    stock_name: 'Stokes - Nienow',
    bid: 909.87,
    bid_volume: 167,
    ask: 909.89,
    ask_volume: 1463,
    current_price: 909.88,
    prev_price: 538.5 } ]



class StockPurchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	stockData: testData,
    	owe: 0,
    }
    this.HandleSumChange = this.HandleSumChange.bind(this);
    this.GetOneStock = this.GetOneStock.bind(this);
  }

 componentDidMount(){
    this.GetOneStock();
  }

  GetOneStock(){
    let id = this.props.id
    var success = (DBdata) => {
      this.setState({stockData: DBdata});
    }
    $.ajax({
      url: `http://127.0.0.1:3009/${id}/info`, 
      success:success,
      error: (DATA) => {
        console.log('failed', id);
        console.log(DATA);
      }
    });

  }

  HandleSumChange(value){
    this.setState({owe: value})
  }

  render(){
  	return(
  <div class="market-closed theme-open-up" data-gr-c-s-loaded="true">
    <div class="_2bn-2l8NmMUVlptJ92NZTN">
  		<div class = "row">
  			<div class="col-12">
				<div class="col-5">
					<div class="sidebar-content">
						<form class="_3-OLNo3tnl0MlzrbPSrCni _3gWYbI2Ww21ztWF33BHU5-">
							<HeaderBar stockData = {this.state.stockData}/>
								<div>
									<ShareCalcForm stockData = {this.state.stockData}
													HandleSumChange = {this.HandleSumChange}
									/>
                  <ReviewOrder owe = {this.state.owe}/>
									<div class="_1APSXSBCoJlfhEejVcddzg _20PgGvRPSVKRSYcPfoqrrM">$0.00 Buying Power Available</div>
								</div>

								<div class="SLklvvv4c1LIkmjZaBvcB">
									<div class="q0bvIuW-PjVD1pXahR9gJ">
									</div>
									<div class="q0bvIuW-PjVD1pXahR9gJ">
									</div>
								</div>
						</form>
							<div class="sidebar-buttons">
								<button loggingcontext="[object Object]" type="button" class="_3dSQqzwfORdyqMK3WsQ_DG sidebar-button hJ4K1g8Iw9BKNXpQ6RnRQ">Add to Watchlist</button>
							</div>
					</div>
				</div>
			</div>
		</div>

     </div>
  </div>
  	)
  }
}

window.StockPurchase = StockPurchase;


