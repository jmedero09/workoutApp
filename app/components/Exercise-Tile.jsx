import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {AddExerciseDetailsReducer} from '../reducers/reducers';
import SetRep from './SetReps';

class ExerciseTile extends React.Component {
	constructor(props){
		super(props) 
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onKeyPress = this.onKeyPress.bind(this);

	}
	handleSubmit(e){
		e.preventDefault();

		var{dispatch} = this.props;

    	var weight = this.refs.weight.value;
    	var reps = this.refs.reps.value;

		var attribute = $(e.target.attributes['data-reactid']).val();
		var id = attribute.slice(10,46);
    	dispatch(actions.addExerciseDetails(id,weight,reps));

    	this.refs.weight.value = '';
    	this.refs.reps.value = '';

	}
	onKeyPress(e) {
    if(e.key === 'Enter')
        this.handleSubmit(e);
  	}
	render(props){
		console.log('props in exercise-tile',this.props.detail);
		return (
			<div className="row small-centered">
				<div className="exercise-tile small-12 columns">
					<h1>{this.props.title}</h1>

						{this.props.detail.map((detail,index)=>{

							return <SetRep weight={detail.weight} reps={detail.reps}/>

						})}
					
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
};
 var mapStateToProps = (state) => {
	console.log('State',state.addExercise);
	//whatever gets returned in here will show up as props from exercise list 
	//var something = state.addExercise.map(function(exercise){return exercise.exercise});
  return {
  	exercise:state.addExercise
  }
  
};
export default connect(mapStateToProps)(ExerciseTile);