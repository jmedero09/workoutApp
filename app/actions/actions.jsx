import * as redux from'redux';
import uuid from 'node-uuid';

export var addExercise = (exercise)=>{
	return{
		type:'ADD_EXERCISE',
		id:uuid(),
		exercise:exercise,
		details:[]

	}
}

export var addExerciseDetails = (id,weight,reps)=>{
	return{
		type:'ADD_EXERCISE_DETAILS',
		id:id,
		set:0,
		weight:weight,
		reps:reps		
	}

}

