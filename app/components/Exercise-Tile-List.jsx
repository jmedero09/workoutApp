import React from 'react';
import {connect} from 'react-redux';
import ExerciseTile from './Exercise-Tile';

export var ExerciseTileList = React.createClass({

	renderList:function(){
		return this.props.exercise.map((exercise)=>{
			return(
				///<li key={exercise.id} className="list-group-item">{exercise.exercise}</li>
				<li key={exercise.id}>
					<ExerciseTile title={exercise.exercise}/>
				</li>				
			);
		});
	},
	render:function(props){
		return (
			<ul className="small-centered  small-12 columns text-center">
				{this.renderList()}
			</ul>
		)
	}
});
export var mapStateToProps = (state, props) => {
	//console.log('yerrrr',state);
	//whatever gets returned in here will show up as props from exercise list 
	//var something = state.addExercise.map(function(exercise){return exercise.exercise});
  return {
  	exercise:state.addExercise
  }
  
};
export default connect(mapStateToProps)(ExerciseTileList);



