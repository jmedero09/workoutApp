import React from 'react';


export var ExerciseTile = React.createClass({
	render:function(props){
		return (
			<div className="row small-centered">
				<div className="exercise-tile small-12  columns">
					<h1>Chest Press</h1>
					<p>Set1 Weight:147 x 12 Reps</p>

					<form>
					    <div className="small-4 columns">
					      <label>Weight
					        <input type="number" placeholder="Weight"/>
					      </label>
					    </div>
					    <div className="small-4 columns">
					      <label>Reps
					        <input type="number" placeholder="Reps"/>
					      </label>
					    </div>					
					</form>
				</div>
			</div>
		)
	}
});
export default (ExerciseTile);