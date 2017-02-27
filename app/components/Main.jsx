import React from 'react';
import {Link, hashHistory} from 'react-router';


var Main = React.createClass({
	render:function(){
		return(
			<div className="row">
				<div className="small-centered  small-12 columns text-center">
					<Link to="/"><img className="logoImg" src="logo.png"/></Link>
					<p className="dash-header small-12 columns small-centered ">Welcome to your Dashboard. Please add an exercise to your dashboard and begin tracking your workout</p>
				</div>
					{this.props.children}
			</div>
		)

		
	}
});

module.exports = Main;