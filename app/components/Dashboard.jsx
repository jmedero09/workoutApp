import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {AddExerciseReducer} from '../reducers/reducers';
import ExerciseTileList from './Exercise-Tile-List';
import SetRepList from './SetRepsList';
import moment from 'moment';



class Dashboard extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleSubmit(e){
    	e.preventDefault();



    	var{dispatch, exercise} = this.props;

    	var exerciseText = this.refs.addExercise.value;

    	if(!exerciseText.length){
    		return alert('Please Enter Title');
    	}
		if(exerciseText.length>20){
			return alert('Title is to long keep between 1 and 20 chracters');
		}
    	dispatch(actions.addExercise(exerciseText));

    	this.refs.addExercise.value = '';

	}
	handleSave(e){
		e.preventDefault();
		var{dispatch} = this.props;

		var workout = prompt('Please enter the name of your workout');

		if(!workout.length){

			return alert('Please enter a title');
		}
		if(workout.length>15){

			return alert('That title is too long must be less that 15 chracters');

		}
		dispatch(actions.saveWorkout(workout));
		console.log(workout);

	}
	render(props){
		console.log(this.props);
		return (
			<div className="row">
				<div className="columns samll-centred">
					<ExerciseTileList/>
				</div>
				<div className="small-12 columns text-center samll-centred">
			        <form>
			          <input required className="addExerciseField text-center" type="text" ref="addExercise" placeholder="Add an Exercise"/>
			          <button onClick={this.handleSubmit} className="button expanded">Add Exercise</button>
			          <button onClick={this.handleSave} className="button expanded">Save Workout</button>
			        </form>
				</div>
			</div>
		)
	}
}
export default connect()(Dashboard);


