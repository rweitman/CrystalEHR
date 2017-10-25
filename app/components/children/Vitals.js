// import React from 'react';
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



class Vitals extends Component {

	constructor(props) {
		super(props);



	}


 render(){
	 return(

	<div className='container'>
		{console.log("User Data: " + JSON.stringify(this.props.userData))}
		<div className='row'>
			<h1 className = 'col-md-6'><small>Crystal Electronic Health Records</small></h1>
			<h3 className = 'col-md-6 text-right'>{this.props.userData.firstName + " " + this.props.userData.lastName}</h3>
		 	<h1 style= {patientStyle} className = 'col-md-12 text-left'><large>VITALS</large></h1>
		</div>

		<div className='star'>
				<div className='panel-body text-left'>

					<div className='row begin'>
						<div className='col-md-12'>
							{ <form style={spaceTop}>
								  <div className="form-group">
								    <label>Temperature</label>
								    <div id="temp"></div>
								    <p>{this.props.userData.temperature}</p>
								  </div>
								  <div className="form-group">
								    <label>Heart Rate</label>
								    <div id="heart"></div>
								    <p>{this.props.userData.heartRate}</p>
								  </div>
								  <div className="form-group">
								  	<label>Systolic Blood Pressure</label>
								  	<div id="sblood"></div>
								  	<p>{this.props.userData.systolicBloodPressure}</p>
								  </div>
								  <div className="form-group">
								  	<label>Diastolic Blood Pressure</label>
								  	<div id="dblood"></div>
								  	<p>{this.props.userData.diastolicBloodPressure}</p>
								  </div>
								  <div className="form-group">
								  	<label>Respiratory Rate</label>
								  	<div id="resRate"></div>
								  	<p>{this.props.userData.respiratoryRate}</p>
								  </div>
							    	<div className="form-group">
								  	<label>Height</label>
								  	<div id="height"></div>
								  	<p>{this.props.userData.height}</p>
								  </div>
								  <div className="form-group">
								  	<label>Weight</label>
								  	<div id="weight"></div>
								  	<p>{this.props.userData.weight}</p>
								  </div>
								  <div className="form-group">
								  	<label>Body Mass Index</label>
								  	<div id="bmi"></div>
								  	<p>{this.props.userData.bmi}</p>
								  </div>


						</form> }


						</div>
					</div>
				</div>
			</div>
	</div>

)};

} // END VITALS CLASS

export default Vitals
