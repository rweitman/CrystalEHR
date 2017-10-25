import React from 'react';

var patientStyle = {
	color: '#2e96ea'
}

const Hospital = () => (
	<div className='container'>
		<div className='row'>
			<h1 className='col-md-6'><small>Crystal Electronic Health Records</small></h1>
			<h1 className='col-md-6 text-right'><small>Phillip Chu</small></h1>
		</div>

		<div className='panel panel-default star'>
				<div className='panel-heading'>
					<div className='panel-title'>
						<h1 style={patientStyle}>Hospital</h1>
					</div>
				</div>
				<div className='panel-body text-center'>

					<div className='row begin'>
						<div className='col-md-12'>
							<p> 
							Hospital Names
							</p>
						</div>
					</div>
				</div>
			</div>
	</div>
	
	);

export default Hospital