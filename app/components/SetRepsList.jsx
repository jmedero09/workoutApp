import React from 'react';
import {connect} from 'react-redux';
import SetReps from './SetReps';

export var SetRepsList = React.createClass({

	renderList:function(){
		return this.props.detail.map((detail)=>{
			return(
				<li key={detail.set}>
					<SetReps set={detail.set} weight={detail.weight} reps={detail.reps}/>
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
export var mapStateToProps = (state) => {
	console.log('yerrrr',state);
	//whatever gets returned in here will show up as props from exercise list 
	//var something = state.addExercise.map(function(exercise){return exercise.exercise});
  return {
  	detail:state.addDetail
  }
  
};
export default connect(mapStateToProps)(SetRepsList);