import * as redux from'redux';
import uuid from 'node-uuid';

export var addExercise = (exercise)=>{
	return{
		type:'ADD_EXERCISE',
		id:uuid(),
		exercise:exercise,

	}
}

export var addExerciseDetails = (weight,reps)=>{
	return{
		type:'ADD_EXERCISE_DETAILS',
		set:0,
		weight:weight,
		reps:reps		
	}

}

