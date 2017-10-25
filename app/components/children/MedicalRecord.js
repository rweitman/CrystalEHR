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

class MedicalRecord extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(

	<div className='container'>
		<div className='row'>
			<h1 className = 'col-md-6'><small>Crystal Electronic Health Records</small></h1>
			<h3 className = 'col-md-6 text-right'>{this.props.userData.firstName + " " + this.props.userData.lastName}</h3>
			<h1 style= {patientStyle} className='col-md-12 text-left'><large>MEDICAL RECORD</large></h1>
		</div>

		<div className='star'>
				<div className='panel-body text-left'>

					<div className='row begin'>
						<div className='col-md-12'>

						<form style={spaceTop}>
								  <div className="form-group">
								    <label>Past Medical History</label>
								    <div id="pastMedical">
								    <p>{this.props.userData.medHist}</p>
								    </div>
								  </div>
								  <div className="form-group">
								    <label>Allergy</label>
								    <div id="pastAllergy">
								    <p>{this.props.userData.allergies}</p>
								    </div>
								  </div>
								  <div className="form-group">
								  	<label>Immunization</label>
								  	<div id="pastImmune">
								  	<p>{this.props.userData.immunizations}</p>
								  	</div>
								  </div>
								 <div className="form-group">
								 	<label>Comments</label>
								 	<div id="pastComment">
								 	<p>{this.props.userData.otherComments}</p>
								 	</div>
								 </div>
						</form>

						</div>
					</div>
				</div>
			</div>
	</div>

)};

	}

export default MedicalRecord;
