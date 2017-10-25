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

var bold={
	fontWeight: 'bold',
	paddingTop: '20px'
}

class Demographics extends Component{
	constructor (props) {
		super(props);
	}

	render() {
		return(
		<div className='container'>
			<div className='row'>
				<h1 className = 'col-md-6'><small>Crystal Electronic Health Records</small></h1>
				<h3 className = 'col-md-6 text-right'>{this.props.userData.firstName + " " + this.props.userData.lastName}</h3>
			 	<h1 style= {patientStyle} className = 'col-md-12 text-left'><large>DEMOGRAPHICS</large></h1>
			</div>

			<div className="col-md-12">

		  		<div>
		    		<h3 style={bold} className="panel-title">First Name</h3>
		  		</div>
			  	<div className="panel-body">
			    	{this.props.userData.firstName}
			  	</div>

			  	<div className="">
		    		<h3 style={bold} className="panel-title">Last Name</h3>
		  		</div>
			  	<div className="panel-body">
			    	{this.props.userData.lastName}
			  	</div>

			  	<div>
		    		<h3 style={bold} className="panel-title">Height</h3>
		  		</div>
			  	<div className="panel-body">
			    	{this.props.userData.height}
			  	</div>

			  	<div>
		    		<h3 style={bold} className="panel-title">Weight</h3>
		  		</div>
			  	<div className="panel-body">
			    	{this.props.userData.weight}
			  	</div>

			  	<div>
		    		<h3 style={bold} className="panel-title">Age</h3>
		  		</div>
			  	<div className="panel-body">
			    	{this.props.userData.age}
			  	</div>

			  	<div>
		    		<h3 style={bold} className="panel-title">Gender</h3>
		  		</div>
			  	<div className="panel-body">
			    	{this.props.userData.gender}
			  	</div>

			</div>


		</div>

	)};

}





export default Demographics
