import React from 'react';
var {connect} = require('react-redux');
var actions = require('../actions/actions');
var {AddExerciseReducer} = require('../reducers/reducers');

export var Dashboard = React.createClass({

	handleSubmit:function(e){
    	e.preventDefault();

    	var{dispatch, exercise} = this.props;

    	var exerciseText = this.refs.addExercise.value;

    	dispatch(actions.addExercise(exerciseText));

    	this.refs.addExercise.value = '';

	},
	render:function(props){
		console.log(this.props);


		return (
			<div className="row">
				<div className="small-centered  small-12 columns text-center">
					<p className="dash-header small-12 columns small-centered ">Welcome to your Dashboard. Please add an exercise to your dashboard and begin tracking your workout</p>
				</div>
				<div className="columns samll-centred">
					{this.props.exercise}
				</div>
				<div className="small-12 columns text-center samll-centred">
			        <form onSubmit={this.handleSubmit}>
			          <input className="addExerciseField text-center" type="text" ref="addExercise" placeholder="Add an Exercise"/>
			          <button className="button expanded">Add Exercise</button>
			          <button className="button expanded">Save Workout</button>
			        </form>
				</div>
			</div>
		)
	}
});
export var mapStateToProps = (state, props) => {
  console.log('state',state);
  return {
    exercise: state.exercise
  }
};
export default connect(mapStateToProps)(Dashboard);


