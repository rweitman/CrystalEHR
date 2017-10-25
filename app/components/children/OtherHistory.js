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

class OtherHistory extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(


	<div className='container'>
		{console.log("User Data: " + JSON.stringify(this.props.userData))}
		<div className='row'>
			<h1 className = 'col-md-6'><small>Crystal Electronic Health Records</small></h1>
			<h3 className = 'col-md-6 text-right'>{this.props.userData.firstName + " " + this.props.userData.lastName}</h3>
		 	<h1 style= {patientStyle} className = 'col-md-12 text-left'><large>HISTORY</large></h1>
		</div>

		<div className='star'>
				<div className='panel-body text-left'>

					<div className='row begin'>
						<div className='col-md-12'>


						<form style={spaceTop}>
								  <div className="form-group">
								    <label><large>Family Medical History</large></label>
								    <div id="pastFamily">
								    	<p>Heart Disease: {this.props.userData.heartDisease}</p>
								    	<p>Heart Attack: {this.props.userData.heartAttack}</p>
								    	<p>Cancer: {this.props.userData.cancer}</p>
								    	<p>Diabetes: {this.props.userData.diabetes}</p>
								    	<p>High Blood Pressure: {this.props.userData.highBloodPressure}</p>
								    </div>
								  </div>
								  <div className="form-group">
								    <label><large>Social</large></label>
								    <div id="pastSocial">
								    	<p>Alcohol Units Per Week: {this.props.userData.alcohol}</p>
								    	<p>Smoking: {this.props.userData.smoking}</p>
								    	<p>Daily Exercise: {this.props.userData.dailyExercise}</p>
								    	<p>Foreign Travel: {this.props.userData.foreignTravel}</p>
								    </div>
								  </div>
								  <div className="form-group">
								  	<label>Pregnancy/Birth</label>
								  	<div id="pastBirth"></div>
								  </div>
								  <div className="form-group">
								  	<label>Past Surgical</label>
								  	<div id="pastSurgical"></div>
								  </div>
						</form>

						</div>
					</div>
				</div>
			</div>
	</div>

)};

} // END OTHER HISTORY

export default OtherHistory
