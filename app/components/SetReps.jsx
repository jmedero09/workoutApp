import React from 'react';


export var SetReps = React.createClass({

render:function(props){
	
	return(
		<div className="row small-centered">
			<div className="setreps small-12 columns">
				<p>Set {this.props.set} Weight:{this.props.weight} x {this.props.reps} Reps</p>
			</div>
		</div>
		)
	}
});

export default (SetReps);







