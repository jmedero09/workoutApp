import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {AddExerciseDetailsReducer} from '../reducers/reducers';
import SetRepList from './SetRepsList';

export var ExerciseTile = React.createClass({

	handleSubmit:function(e){
		e.preventDefault();

		var{dispatch} = this.props;

    	var weight = this.refs.weight.value;
    	var reps = this.refs.reps.value;


    	dispatch(actions.addExerciseDetails(weight,reps));

    	this.refs.weight.value = '';
    	this.refs.reps.value = '';
		console.log('poooooop');

	},
	onKeyPress: function(e) {
    if(e.key === 'Enter')
        this.handleSubmit(e);
  	},

	render:function(props){
		return (
			<div className="row small-centered">
				<div className="exercise-tile small-12 columns">
					<h1>{this.props.title}</h1>

					<SetRepList/>
					
					<form onKeyPress={this.onKeyPress}>
					    <div className="small-4 columns">
					      <label>Weight</label>
					        <input name="weight" type="number" ref="weight" placeholder="Weight"/>
					    </div>
					    <div className="small-4 columns">
					      <label>Reps</label>
					        <input name="reps" type="number" ref="reps" placeholder="Reps"/>
					    </div>
					</form>
				</div>
			</div>
		)
	}
});
export var mapStateToProps = (state) => {
	console.log('yerrrr',state.addDetail);
	//whatever gets returned in here will show up as props from exercise list 
	//var something = state.addExercise.map(function(exercise){return exercise.exercise});
  return {
  	exercise:state.addDetail
  }
  
};
export default connect(mapStateToProps)(ExerciseTile);