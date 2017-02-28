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

       let exercises = this.props.description.map((detail,index)=> {
            
            let details = detail.detail.map((item)=><SetRep set={++index} weight={item.weight} reps={item.reps}/>)
                return <div>
                    <h1>{detail.exercise}</h1>
                    {details}                            
                </div>
        });

       return(
            <div className="exercise-tile small-12 columns text-center">
                {exercises}
            </div>
        )

   }
}
var mapStateToProps = (state) => {
  return {
      description:state.addExercise
  }
  
};
export default connect(mapStateToProps)(WorkoutDescription);