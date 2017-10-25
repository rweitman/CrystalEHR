import React, { Component } from "react";


var spaceMe = {
	marginBottom: '50px'
}
var patientStyle = {
	color: '#2e96ea'
}

var newName = "";
var pushedName = {

}



class Search extends Component{

	constructor(props) {
		super(props);



		this.state= {
			name: "None Selected",
			note: "None Selected",
			showButton: false
		}




		this.handleSubmit= this.handleSubmit.bind(this);
		this.handleData = this.handleData.bind(this);

	}


	handleData(data){
		this.props.getUser(data);
	}

	handleSubmit(){

	console.log("button clicked");


	var patientName = $("#srch-term").val().trim()

	var objectSent = {
		patientName: patientName
	}




	$.getJSON("allPatients", (data) => {
  // Call our function to generate a table body




	  for(var i = 0; i < data.length ; i++){
	  	if(data[i].lastName === patientName){
	  		console.log(data[i].lastName);
	  	    pushedName = {
	  			Name: data[i].firstName + " " + data[i].lastName,
	  			Calendar: data[i].calendar
	  		}
				this.handleData(data[i]);


	  	}
	  }


  	   console.log(data);
	});

	this.setState({
		name: pushedName.Name,
		note: pushedName.Calendar,
		showButton: true
	});

}


	render(){
	return(
	<div className='container'>
		<div className='row'>
			<h1 className = 'col-md-6'><small>Crystal Electronic Health Records</small></h1>
		 	<h3 className = 'col-md-6 text-right'><small></small></h3>
		 	<h1 style= {patientStyle} className = 'col-md-12 text-left'><large>SEARCH</large></h1>
		</div>

		<div className = "star">
			<div className = "panel-body text-center">
				<div className="input-group add-on" style = {spaceMe}>
		      			<input className="form-control" placeholder="Search" name="srch-term" id="srch-term" type="text"></input>
			      			<div className="input-group-btn">
			        		<button onClick={this.handleSubmit} className="btn btn-default" id = "patientSearch" type="submit"><i className="glyphicon glyphicon-search"></i></button>
			      			</div>
		      	</div>

		      	<div className="panel panel-default">


		  		{this.state.showButton ? <div className="panel-heading">{this.state.name}</div> : null}
		  		{this.state.showButton ? <div className="panel-body">{this.state.note}</div>: null}

				</div>
			</div>
		</div>



	</div>
	)




	}
}




export default Search
