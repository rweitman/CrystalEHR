import React from 'react';

var patientStyle = {
	color: '#2e96ea'
}

const Networks = () => (
	<div className='container'>
		<div className='row'>
			<h1 className='col-md-6'><small>Crystal Electronic Health Records</small></h1>
			<h1 className='col-md-6 text-right'><small>Hospital Networks</small></h1>
		</div>

		<div className='panel panel-default star'>
				<div className='panel-heading'>
					<div className='panel-title'>
						<h1 style={patientStyle}>Hospital Networks</h1>
					</div>
				</div>
				<div className='panel-body text-center'>

					<div className='row begin'>
						<div className='col-md-12'>
							<p> 
							Hospital Networks
							</p>
						</div>
					</div>
				</div>
			</div>
	</div>
	
	);

export default Networks