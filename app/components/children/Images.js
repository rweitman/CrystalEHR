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

class Images extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(

	<div className='container'>
		<div className='row'>
			<h1 className = 'col-md-6'><small>Crystal Electronic Health Records</small></h1>
			<h3 className = 'col-md-6 text-right'>{this.props.userData.firstName + " " + this.props.userData.lastName}</h3>
		 	<h1 style= {patientStyle} className = 'col-md-12 text-left'><large>Images</large></h1>
		</div>

		<div className='star'>

				<div className='panel-body text-left'>

					<div className='row begin'>
						<div className='col-md-12'>

						<form style={spaceTop}>
							<p><img src="Icons/mriscan.jpg"></img></p>
						</form>

						</div>
					</div>
				</div>
			</div>
	</div>

	)};

	}

export default Images;
