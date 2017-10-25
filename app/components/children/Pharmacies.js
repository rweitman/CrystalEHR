import React, { Component } from "react";

var patientStyle = {
	color: '#2e96ea'
}
var spaceTop = {
	paddingTop: '20px'
}

var marginTop = {
	marginTop: '20px'
}

var littleTop = {
	paddingTop: '5px',
	paddingBottom: '5px'
}
var stopMargin = {
	marginTop: '0px'
}

class Pharmacies extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(

	<div className='container'>
		<div className='row'>
			<h1 className = 'col-md-6'><small>Crystal Electronic Health Records</small></h1>
			<h3 className = 'col-md-6 text-right'>{this.props.userData.firstName + " " + this.props.userData.lastName}</h3>
		 	<h1 style= {patientStyle} className = 'col-md-12 text-left'><large>PHARMACIES</large></h1>
		</div>

		<div className='star'>
				 <div className="form-group">
								   <label>Coppell</label>
								  		<div style={littleTop} className="panel-body">
								    	<h4 style={stopMargin}>Walgreens</h4>
								    	<p>313 N Denton Tap Rd, Coppell, TX 75019</p>
								    	<h4 style={stopMargin}>CVS</h4>
								    	<p>1000 East Sandy Lake Drive, Coppell, TX 75019</p>
								  		</div>
								  </div>
								  </div>
								  <div className="form-group">
								  	<label>Irving</label>
								 		<div style={littleTop} className="panel-body">
								    	<h4 style={stopMargin}>Lindsey's Pharmacy</h4>
								    	<p>2616 Texas Dr, Irving, TX 75062</p>
								    	<h4 style={stopMargin}>Boardwalk Pharmacy</h4>
								    	<p>1110 Cottonwood Ln #115, Irving, TX 75038</p>
								  		</div>
								  </div>
								  <div className="form-group">
								  	<label>Dallas</label>
										<div style={littleTop} className="panel-body">
								    	<h4 style={stopMargin}>Preston Road Pharmacy</h4>
								    	<p>6901 Preston Rd, Dallas, TX 75205</p>
								    	<h4 style={stopMargin}>CVS</h4>
								    	<p>6832 Snider Plaza, Dallas, TX 75205</p>
								  		</div>
								  </div>
								  <div className="form-group">
								  	<label>Denton</label>
								  		<div style={littleTop} className="panel-body">
								    	<h4 style={stopMargin}>Denton Pharmacy</h4>
								    	<p>1620 W University Dr, Denton, TX 76201</p>
								    	<h4 style={stopMargin}>Sam's Club Pharmacy</h4>
								    	<p>2850 W Univeristy Dr, Denton, TX 76201</p>
								  		</div>
								  </div>
				<div className='panel-body text-left'>

					<div className='row begin'>
						<div className='col-md-12'>

						<form style={spaceTop}>

						</form>

						</div>
					</div>
				</div>
			</div>

	)};

	}
export default Pharmacies
