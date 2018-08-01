import React from 'react';


var HeaderBar = (props) => {
	//turn stocknames into symbol
	var matches = props.stockData[0].stock_name.match(/\b(\w)/g);              // ['J','S','O','N']
	var symbol = matches.join('');  



	return(
		<header class="card-heading">
			<div class="U9B2wa4QH-rLcDnS_0kE0 _2CdF8ROmbBPXbBuNptKesY">
				<div class="_15MvmwlptOhnFnCFJaLnpx">
					<div class="_2lP6gwomUu18F6aHSMmAIu">
						<div class="active _13V-uMdIJ98QSYzEoEpcho">
							<div class="_2zlNYDxUnWc0a8cd9uPqqF _1kWgk09VvsBhMuY4ZmAd4b _3H1s6rWVwVzE0vllQv6t50 _1lG0_TVqxZIWfNPQupuNeV" styles="transition-duration: 250ms;">
								<div class="_3fXvdBijiTVGE92FUJyRlC">
									<div class="_2V6Md24xa4DhSWKWJ0xJyc">
										<h3 class="_3sl1gTFP42qCnEJjYpwZSm _1iW5XtlWSjKBHDf-vyRlxz">Buy {symbol}</h3>
									</div>
								</div>
								<h3 class="_3sl1gTFP42qCnEJjYpwZSm _1iW5XtlWSjKBHDf-vyRlxz">Buy {symbol}</h3>
							</div>
						</div>
					</div>
				</div>
			<svg class="_17h07zIpSA60Ja5t0pYWTi" width="12px" height="15px" viewBox="0 0 12 15" version="1.1">
				<g stroke="none" strokeWidth="1" fillRule="evenodd">
					<path d="M2,6 L2,6 L2,3.99582624 C2,1.78899235 3.79535615,0 6,0 C8.209139,0 10,1.79652125 10,3.99582624 L10,6 L12,6 L12,15 L0,15 L0,6 L2,6 Z M8,6 L8,3.99961498 C8,2.88743329 7.1045695,2 6,2 C4.88772964,2 4,2.89525812 4,3.99961498 L4,6 L8,6 Z">
					</path>
				</g>
			</svg>
				<div class="_1_u4cIFxkJhXNAgG8Bs0BM">
					<div>
						<div class="_2UAXZmpnhsRodHEwKOVidw">
							<div class="IkvqSKQfIANyEV_AzG1xY">
								<svg class="_1sTI87VcHv4IA7ntSiCczw" width="28" height="28" viewBox="0 0 28 28">
									<path fillRule="evenodd" d="M14,16 C12.8954305,16 12,15.1045695 12,14 C12,12.8954305 12.8954305,12 14,12 C15.1045695,12 16,12.8954305 16,14 C16,15.1045695 15.1045695,16 14,16 Z M6,16 C4.8954305,16 4,15.1045695 4,14 C4,12.8954305 4.8954305,12 6,12 C7.1045695,12 8,12.8954305 8,14 C8,15.1045695 7.1045695,16 6,16 Z M22,16 C20.8954305,16 20,15.1045695 20,14 C20,12.8954305 20.8954305,12 22,12 C23.1045695,12 24,12.8954305 24,14 C24,15.1045695 23.1045695,16 22,16 Z">
									</path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderBar;

