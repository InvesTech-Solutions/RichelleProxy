import React from 'react';


class ShareCalcForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    	sum: 0
    }
    this.HandleChange = this.HandleChange.bind(this);
  }

  HandleChange(event){
  	var priceSum = event.target.value * this.props.stockData[0].current_price;
  	this.props.HandleSumChange(priceSum);
  	this.setState({sum: priceSum})
  }

  render(){
	return(
		<div class="_2xD5k5HebZ-_z0yEzPgwzq _3TuaKh07qxoZswQi1NORRW _1Aynp-t7dtusYubqO6tY6T">
			<div class="form-group">
				<label>
				<div>Shares</div>
					<div>
						<input min="0" placeholder="0" step="1" name="quantity" type="number"  onChange = {this.HandleChange} />
					</div>
				</label>
			</div>
			<div class="Gi2gHtqY6JpnP8xMDIfFg _1q3TMCJGYQCbJKuHLeGyj6">
				<div class="">
					<div>
						<a class="yGuByOpkhY9Ne8UsfS63f" href="#">Market Price</a>
					</div>
				</div>
					<span class="_2cvSOo1pDo1jI9bNeDTKWw">${this.props.stockData[0].current_price}</span>
			</div>
			<div class="_2F-Eq4jmvzQrWQjqSlI-ic">
				<label class="pG2tGzwokJNOBrhmyI7rU">
					<div class="_1e1I7ETmQAE642xa95m7ku">Estimated Cost</div>
					<div class="_1c9J9MwL-hmwxd3I5U8nH2" placeholder = '$0.00'>${this.state.sum}</div>
				</label>
			</div>
		</div>
	)
	}
}

export default ShareCalcForm; 

// value= {this.state.shares}