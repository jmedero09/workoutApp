import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import {AddExerciseDetailsReducer} from '../reducers/reducers';
import SetRep from './SetReps';


class WorkoutDescription extends React.Component {
	constructor(props){
		super(props);
		this.exercises = [];
	}
	 render(props){
        console.log(this.props.description.exercise);
        
        
             this.exercises = this.props.description.map((detail,index)=>

                    
             		<div>
                    <h1>{detail.exercise}</h1>

                    detail.detail.map((item,i)=> {

                    <SetRep set={++index} weight={item.weight} reps={item.reps}/>

                    });
                    </div>
                   
            );
        
        
        return(
            <div className="exercise-tile small-12 columns text-center">
              {this.exercises}
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