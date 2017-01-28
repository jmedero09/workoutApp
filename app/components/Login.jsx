import React from 'react';

export var Login = React.createClass({
	render:function(){
		return(
			<div className="row">
				<div className="small-12 small-centered columns login-container">
					<p>Please Use your email and password to login to your dashboard</p>
					<div className="row">
						<div>
							<div className="small-11 small-centered columns">
				        	<input className="email text-center" type="text" ref="email" placeholder="Email"/>
							<input className="password text-center" type="text" ref="password" placeholder="Password"/>
						</div>

							<button className="button expanded">Login</button>
				          	<button className="button expanded">Create User</button>

						</div>
					</div>					
				</div>

			</div>
		)
	}
});



export default (Login)

