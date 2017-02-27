import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {AddExerciseDetailsReducer} from '../reducers/reducers';
import SetRep from './SetReps';
import { Field, reduxForm } from 'redux-form';

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
	render(){
		const { fields:{ exercise, weight, reps},handleSubmit,onKeyPress} = this.props;
		return (
			<div className="row small-centered">
				<div className="exercise-tile small-12 columns">
					<h1>{this.props.title}</h1>

						{this.props.detail.map((detail,index)=>{

							return <SetRep key={index} set={++index} weight={detail.weight} reps={detail.reps}/>

						})}
					
					<form onKeyPress={this.onKeyPress}>
					    <div className="small-4 columns">
					      <label>Weight</label>
					        <input required maxLength="4" name="weight" type="number" ref="weight" {...weight}/>
					    </div>
					    
					    <div className="small-4 columns">
					      <label>Reps</label>
					        <input required maxLength="2" name="reps" type="number" ref="reps"{...reps}/>
					    </div>
					</form>
					<div className="textHelp">{weight.touched ? weight.error:''}</div>
					<div className="textHelp">{reps.touched ? reps.error:''}</div>
				</div>
			</div>
		)
	}
};
 var mapStateToProps = (state) => {
  return {
  	exercise:state.addExercise
  }
};
function validate(values){
	var errors = {};
	console.log(values.weight);
	if(!values.weight){

		errors.weight = 'You Must Enter a weight';
	}
	if(!values.reps){

		errors.reps = 'You Must Enter a rep';
	}

	return errors;
}
export default reduxForm({
	form:'exerciseForm',
	fields:['exercise','weight','reps'],
	validate
},mapStateToProps,)(ExerciseTile);













