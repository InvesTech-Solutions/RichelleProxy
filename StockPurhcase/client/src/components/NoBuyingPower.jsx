import React from 'react';

var NoBuyingPower = (props) => {
	if (props.showToggle) {
    	return null;
  	}
	return(
			<div>
				<div class="_2HqLV43hwOPFAusOPMW9j6 _325DsXiT2EaQv5T6T46PYP" styles="transition-duration: 250ms;">
					<h4 class="_2u3a0JQhZ15ES3bu0kekro _29t8bHuv9WHeLa5x0fJ09b">
						<div class="_2_vAXELWiAvNJhpmn9OAum">
							<svg class="_2d210-cdlXbuwMc64jNNaZ" width="16" height="16" viewBox="0 0 16 16">
								<g fillRule="evenodd" transform="translate(0 -2)">
									<circle cx="8" cy="10" r="8">
									</circle>
									<text fontFamily="DINPro-Black, DINPro" fontSize="11.5" fontWeight="700" letterSpacing=".048">
										<tspan x="5.729" y="14">!</tspan>
									</text>
								</g>	
							</svg>
						</div>
						<div>Not Enough Buying Power</div>
					</h4>
				</div>
				<div class="_2HqLV43hwOPFAusOPMW9j6 _325DsXiT2EaQv5T6T46PYP" styles="transition-duration: 250ms;">
				<div class="Cig1YCIL-tp_Kp4cF-ilY">
					<div>
						<p>You don’t have enough buying power to buy shares of FB.</p>
						<p>If you would like to purchase 1 share you may deposit $180.43.</p>
					</div>
				</div>				
				</div>


			</div>

	)
}

export default NoBuyingPower;