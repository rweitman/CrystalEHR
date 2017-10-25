// Include React
import React  from 'react';
import PropTypes from 'prop-types';
import Component from '../Main.js';

var logoStyle = {
	boxShadow: "solid", color: "#fff"
}

var typeStyle = {
	padding: "40px 0 0 40px"
}

const Columns = props =>(

		<div className="blue">
			<p ><img src="Icons/UT_Southwestern_Logo-01.png"></img></p>

			{/* <p><span onClick={() => props.col2Button1()}>{props.items[0]}</span></p>
			<p><span onClick={() => props.col2Button2()}>{props.items[1]}</span></p>
			<p><span onClick={() => props.col2Button3()}>{props.items[2]}</span></p> */}

			<p style={typeStyle}><span onClick={() => props.col2Button1()}>{props.items[0]}</span></p>
      <p style={typeStyle}><span onClick={() => props.col2Button2()}>{props.items[1]}</span></p>
      <p style={typeStyle}><span onClick={() => props.col2Button3()}>{props.items[2]}</span></p>
      <p style={typeStyle}><span onClick={() => props.col2Button4()}>{props.items[3]}</span></p>
      <p style={typeStyle}><span onClick={() => props.col2Button5()}>{props.items[4]}</span></p>

		</div>

);



module.exports = Columns;
