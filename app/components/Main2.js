import React, { Component } from "react";
import Column1 from "./children/Column1";
import Column2 from "./children/Column2";
import Patient from "./children/Patient";
import Calendar from "./children/Calendar";
import Hospital from "./children/Hospital";
import Appointments from "./children/Appointments";
import Search from "./children/Search";
import MedicalRecord from "./children/MedicalRecord";
import OtherHistory from "./children/OtherHistory";
import Vitals from "./children/Vitals";
import Demographics from "./children/Demographics";
import PatientInfoPage from "./containers/PatientInfoPage";
import Images from "./children/Images";
import Tests from "./children/Tests";
import Prescriptions from "./children/Prescriptions";
import Pharmacies from "./children/Pharmacies";

var items = []; //home
//History
var items2 = ['Demographics', 'Vitals', 'Tests', 'Images'];
//Records
var items3 = ['Medical History', 'Other Histories'];
var items4 = ['Prescriptions', 'Pharmacies'];
var items5 = ['Chief Complaint', 'Plan/Progress'];
var items6 = ['Calendar'];
var items7 = ['Search'];
var items8 = [];
// Here we include all of the sub-components
class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			showComp1: false,
			showComp2: false,
			showComp3: false,
			showComp4: false,
			showComp5: false,
			showComp6: false,
			showComp7: false,
			showComp8: false,
			items: items,
			items2: items2,
			items3: items3,
			items4: items4,
			items5: items5,
			items6: items6,
			items7: items7,
			items8: items8,
			showSubComp1: false,
			showSubComp2: false,
			showSubComp3: false,
			showSubComp4: false,
			showSubComp5: false,
			showSubComp6: false,
			showSubComp7: false,
			showSubComp8: false,
			showSubComp9: false,
			showSubComp10: false,
			showSubComp11: false,
			showSubComp12: false,
			showSubComp13: false,
			showSubComp14: false,
			showSubComp15: false,
			showSubComp16: false,
			showSubComp17: false,
			showSubComp18: false,
			showSubComp19: false,
			showSubComp20: false,
			showSubComp21: false,
			showSubComp22: false,
			showSubComp23: false,
			showSubComp24: false,
			showSubComp25: false,
			showSubComp26: false,
			showSubComp27: false,
			showSubComp28: false,
			user: ''

		};
		this._onButtonClick1 = this._onButtonClick1.bind(this);
		this._onButtonClick2 = this._onButtonClick2.bind(this);
		this._onButtonClick3 = this._onButtonClick3.bind(this);
		this._onButtonClick4 = this._onButtonClick4.bind(this);
		this._onButtonClick5 = this._onButtonClick5.bind(this);
		this._onButtonClick6 = this._onButtonClick6.bind(this);
		this._onButtonClick7 = this._onButtonClick7.bind(this);
		this._onButtonClick8 = this._onButtonClick8.bind(this);
		this.col2Button1 = this.col2Button1.bind(this);
		this.col2Button2 = this.col2Button2.bind(this);
		this.col2Button3 = this.col2Button3.bind(this);
		this.col2Button4 = this.col2Button4.bind(this);
		this.getUser = this.getUser.bind(this);
	}

	getUser(user) {
		this.setState({
			user: user
		});
	}

	clearComps() {
		this.setState({
			showComp1: false,
			showComp2: false,
			showComp3: false,
			showComp4: false,
			showComp5: false,
			showComp6: false,
			showComp7: false,
			showComp8: false
		});
	}

	clearSubComps() {
		this.setState({
			showSubComp1: false,
			showSubComp2: false,
			showSubComp3: false,
			showSubComp4: false,
			showSubComp5: false,
			showSubComp6: false,
			showSubComp7: false,
			showSubComp8: false,
			showSubComp9: false,
			showSubComp10: false,
			showSubComp11: false,
			showSubComp12: false,
			showSubComp13: false,
			showSubComp14: false,
			showSubComp15: false,
			showSubComp16: false,
			showSubComp17: false,
			showSubComp18: false,
			showSubComp19: false,
			showSubComp20: false,
			showSubComp21: false,
			showSubComp22: false,
			showSubComp23: false,
			showSubComp24: false,
			showSubComp25: false,
			showSubComp26: false,
			showSubComp27: false,
			showSubComp28: false
		});
	}

	_onButtonClick1() {
		this.clearSubComps();
		this.clearComps();
		this.setState({
			showComp1: true
		});
		console.log("BKUTIZN" + this.state.showComp1);
	}

	_onButtonClick2() {
		this.clearComps();
		this.setState({
			showComp2: true
		});
	}

	_onButtonClick3() {
		this.clearComps();
		this.setState({
			showComp3: true
		});
	}
	_onButtonClick4() {
		this.clearComps();
		this.setState({
			showComp4: true
		});
	}
	_onButtonClick5() {
		this.clearComps();
		this.setState({
			showComp5: true
		});
	}
	_onButtonClick6() {
		this.clearSubComps();
		this.clearComps();
		this.setState({
			showComp6: true
		});
	}
	_onButtonClick7() {
		this.clearComps();
		this.setState({
			showComp7: true
		});
	}

	_onButtonClick8() {
		this.clearComps();
		this.setState({
			showComp8: true
		});
	}

	col2Button1() {
		this.clearSubComps();
		if (this.state.showComp1) {
			this.setState({
				showSubComp1: true
			});
		}
		else if (this.state.showComp2) {
			this.setState({
				showSubComp2: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp3: true
			});
		}
		else if (this.state.showComp4) {
			this.setState({
				showSubComp4: true
			});
		}
		else if (this.state.showComp5) {
			this.setState({
				showSubComp5: true
			});
		}
		else if (this.state.showComp6) {
			this.setState({
				showSubComp6: true
			});
		}
		else if (this.state.showComp7) {
			this.setState({
				showSubComp7: true
			});
		}
	}
	col2Button2() {
		this.clearSubComps();
		if (this.state.showComp1) {
			this.setState({
				showSubComp8: true
			});
		}
		else if (this.state.showComp2) {
			this.setState({
				showSubComp9: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp19: true
			});
		}
		else if (this.state.showComp4) {
			this.setState({
				showSubComp11: true
			});
		}
		else if (this.state.showComp5) {
			this.setState({
				showSubComp12: true
			});
		}
		else if (this.state.showComp6) {
			this.setState({
				showSubComp13: true
			});
		}
		else if (this.state.showComp7) {
			this.setState({
				showSubComp14: true
			});
		}
	}
	col2Button3() {
		this.clearSubComps();
		if (this.state.showComp1) {
			this.setState({
				showSubComp15: true
			});
		}
		else if (this.state.showComp2) {
			this.setState({
				showSubComp16: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp17: true
			});
		}
		else if (this.state.showComp4) {
			this.setState({
				showSubComp18: true
			});
		}
		else if (this.state.showComp5) {
			this.setState({
				showSubComp19: true
			});
		}
		else if (this.state.showComp6) {
			this.setState({
				showSubComp20: true
			});
		}
		else if (this.state.showComp7) {
			this.setState({
				showSubComp21: true
			});
		}
	}

	col2Button4() {
		this.clearSubComps();
		if (this.state.showComp1) {
			this.setState({
				showSubComp22: true
			});
		}
		else if (this.state.showComp2) {
			this.setState({
				showSubComp23: true
			});
		}
		else if (this.state.showComp3) {
			this.setState({
				showSubComp24: true
			});
		}
		else if (this.state.showComp4) {
			this.setState({
				showSubComp25: true
			});
		}
		else if (this.state.showComp5) {
			this.setState({
				showSubComp26: true
			});
		}
		else if (this.state.showComp6) {
			this.setState({
				showSubComp27: true
			});
		}
		else if (this.state.showComp7) {
			this.setState({
				showSubComp28: true
			});
		}
	}


  	render() {
  		return(
  			<div className="hold">
  				<Column1
  				_onButtonClick1={this._onButtonClick1}
  				_onButtonClick2={this._onButtonClick2}
  				_onButtonClick3={this._onButtonClick3}
  				_onButtonClick4={this._onButtonClick4}
  				_onButtonClick5={this._onButtonClick5}
  				_onButtonClick6={this._onButtonClick6}
  				_onButtonClick7={this._onButtonClick7}
  				_onButtonClick8={this._onButtonClick8}
  				/>

  			{this.state.showComp1 ? <Column2 items={this.state.items}
  											 col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 col2Button4 = {this.col2Button4}
  											 /> : null }
  			{this.state.showComp2 ? <Column2 items={this.state.items2}
  										     col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 col2Button4 = {this.col2Button4}
  											/> : null }
  			{this.state.showComp3 ? <Column2 items={this.state.items3}
  										     col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 col2Button4 = {this.col2Button4}
  											/> : null }
  			{this.state.showComp4 ? <Column2 items={this.state.items4}
  											col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 col2Button4 = {this.col2Button4}
											 /> : null }
  			{this.state.showComp5 ? <Column2 items={this.state.items5}
  											col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 col2Button4 = {this.col2Button4}
											 /> : null }
  				{this.state.showComp6 ? <Calendar /> : null}
  			{this.state.showComp7 ? <Column2 items={this.state.items7}
  											col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 col2Button4 = {this.col2Button4}
											 /> : null }
  			{this.state.showComp8 ? <Column2 items={this.state.items8}
  											col2Button1 = {this.col2Button1}
											 col2Button2 = {this.col2Button2}
											 col2Button3 = {this.col2Button3}
											 col2Button4 = {this.col2Button4}
											 /> : null }

			{this.state.showComp1 ? <PatientInfoPage />: null}

			{this.state.showSubComp1 ? <Patient  /> : null}
			{this.state.showSubComp2 ? <Demographics userData = {this.state.user} /> : null}
			{this.state.showSubComp3 ? <MedicalRecord /> : null}
			{this.state.showSubComp10 ? <OtherHistory /> : null}
			{this.state.showSubComp4 ? <Prescriptions /> : null}
			{this.state.showSubComp11 ? <Pharmacies /> : null}
			{this.state.showSubComp6 ? <Calendar /> : null}

			{this.state.showSubComp7 ? <Search getUser = {this.getUser}/> : null}
			{this.state.showSubComp9 ? <Vitals userData = {this.state.user}/> : null}
			{this.state.showSubComp16 ? <Tests /> : null}
			{this.state.showSubComp23 ? <Images /> : null}




  		{/* if statement for each of the 21 components*/}

  			</div>



  		)

  	}
};

module.exports = App;
