import React from 'react';
import {connect} from 'react-redux';
import SavedWorkout from './SavedWorkOut';
import {Link, IndexLink} from 'react-router';



class SavedWorkoutList extends React.Component{
	constructor(props){
		super(props);
	}
	renderList(){
		return this.props.saved.savedWorkout.map((savedWorkout,index)=>{
			return(
				<Link to="description"><li key={index}>
					<SavedWorkout workout={savedWorkout.workoutLabel} date={savedWorkout.date}/>
				</li></Link>				
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
  return {
  	saved:state
  }
  
};

export default connect(mapStateToProps) (SavedWorkoutList)