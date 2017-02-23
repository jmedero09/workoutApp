import * as redux from'redux';
import uuid from 'node-uuid';
import moment from 'moment';


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
		weight:weight,
		reps:reps		
	}

}

export var saveWorkout = (workoutLabel)=>{
	return{
		type:'SAVE_WORKOUT',
		workoutLabel:workoutLabel,
		date: moment().format("MMM Do YYYY"),
		storedSessoin:[]	
	}
}

export var openWorkout = (id)=>{
	return{
		type:'OPEN_WORKOUT',
		id:id
	}
}