import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {AddExerciseReducer} from '../reducers/reducers';
import ExerciseTileList from './Exercise-Tile-List';
import SetRepList from './SetRepsList';



class Dashboard extends React.Component{
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleSubmit(e){
    	e.preventDefault();

    	var{dispatch, exercise} = this.props;

    	var exerciseText = this.refs.addExercise.value;

    	dispatch(actions.addExercise(exerciseText));

    	this.refs.addExercise.value = '';

	}
	render(props){
		console.log(this.props);
		return (
			<div className="row">
				<div className="columns samll-centred">
					<ExerciseTileList/>
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
}
export default connect()(Dashboard);


