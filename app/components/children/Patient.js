import React, { Component } from "react";
// import './PatientStyle.css';

var patientStyle = {
	color: '#2e96ea'
}

var boxStyle1 = {
	borderRight: '2px solid #D9DCE1',
	borderBottom: '2px solid #D9DCE1',
	height: '150px',

}

var boxStyle2 = {
	borderBottom: '2px solid #D9DCE1',
	height: '150px',

}

var boxStyle3 = {
	borderLeft: '2px solid #D9DCE1',
	borderBottom: '2px solid #D9DCE1',
	height: '150px',

}

var boxStyle4 = {
	borderTop: '2px solid #D9DCE1',
	borderRight: '2px solid #D9DCE1',
	height: '150px',

}

var boxStyle5 = {
	borderTop: '2px solid #D9DCE1',
	height: '150px'

}

var boxStyle6 = {
	borderLeft: '2px solid #D9DCE1',
	borderTop: '2px solid #D9DCE1',
	height: '150px',

}

var columnWidth ={
	width: '12.499999995%'
}

class Patient extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(


	<div className='container'>
		<div className='row'>
			<h1 className = 'col-md-6'><small>Crystal Electronic Health Records</small></h1>
			<h3 className = 'col-md-6 text-right'>{this.props.userData.firstName + " " + this.props.userData.lastName}</h3>
			<h1 style= {patientStyle} className = 'col-md-12 text-left'><large>Patient</large></h1>
		</div>

			<div className='panel panel-default star'>
				<div className='panel-body text-center'>
					<div className='row begin'>
						<div className='col-md-1' style = {columnWidth}>
						</div>
						<div className='col-md-3' style={boxStyle1}>
							<h2 style={patientStyle}>{this.props.userData.firstName + " " + this.props.userData.lastName}</h2>
							<h4>{this.props.userData.dob}</h4>
						</div>
						<div className='col-md-3' style={boxStyle2}>
							<h3>Age</h3>
							<h4>{this.props.userData.age}</h4>
						</div>
						<div className='col-md-3' style={boxStyle3}>
							<h3>Gender</h3>
							<h4>{this.props.userData.gender}</h4>
						</div>
					</div>

					<div className='row begin'>
						<div className='col-md-12'>
							<h2>Chief Complaint</h2>
							<h4>{this.props.userData.visitReason}
							</h4>
						</div>
					</div>

					<div className='row end'>
					<div className='col-md-1' style = {columnWidth}>
						</div>
						<div className='col-md-3'style={boxStyle4}>
							<h3>Contact</h3>
							<h4>Phone: {this.props.userData.phone}</h4>
							<h4>Email: {this.props.userData.email}</h4>
						</div>
						<div className='col-md-3' style={boxStyle5}>
							<h3>Marital Status</h3>
							<h4>Marital Status: {this.props.userData.maritalStatus}</h4>
						</div>
						<div className='col-md-3' style={boxStyle6}>
							<h3>Height / Weight</h3>
							<h4>Height: {this.props.userData.height}</h4>
							<h4>Weight: {this.props.userData.weight}</h4>
						</div>
					</div>
				</div>
			</div>

	</div>

)};

} // END PATIENT
export default Patient
