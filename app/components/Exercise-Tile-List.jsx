import React from 'react';
import {connect} from 'react-redux';
import ExerciseTile from './Exercise-Tile';

class ExerciseTileList extends React.Component {
	constructor(props){
		super(props);
	}
	renderList(){
		return this.props.exercise.map((exercise,index)=>{
			return(

				<li key={exercise.id}>
					<ExerciseTile title={exercise.exercise} detail={exercise.detail}/>
				</li>				
			);
		});
	}
	render(props){
		return (
			<ul className="small-centered  small-12 columns text-center">
				{this.renderList()}
			</ul>
		)
	}
}
var mapStateToProps = (state, props) => {
	//console.log('yerrrr',state);
	//whatever gets returned in here will show up as props from exercise list 
	//var something = state.addExercise.map(function(exercise){return exercise.exercise});
  return {
  	exercise:state.addExercise
  }
  
};
export default connect(mapStateToProps)(ExerciseTileList);



