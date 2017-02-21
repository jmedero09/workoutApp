import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {AddExerciseDetailsReducer} from '../reducers/reducers';
import SetRep from './SetReps';



class WorkoutDescription extends React.Component {
	constructor(props){
		super(props);
	}
	render(props){
		return(
			
			<div className="exercise-tile small-12 columns">
				<h1>{this.props.title}</h1>

				{this.props.description.map((detail,index)=>{
					return <SetRep set={++index} weight={detail.details.weight} reps={detail.reps}/>
				})}
			</div>
			
		)

	}
}
var mapStateToProps = (state) => {
	console.log('State',state.addExercise);
	//whatever gets returned in here will show up as props from exercise list 
	//var something = state.addExercise.map(function(exercise){return exercise.exercise});
  return {
  	description:state.addExercise
  }
  
};
export default connect(mapStateToProps)(WorkoutDescription);