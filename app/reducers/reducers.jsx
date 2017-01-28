var redux = require('redux');
import uuid from 'node-uuid';


export var AddExerciseReducer = (state=[],action)=>{
	switch(action.type){
		case 'ADD_EXERCISE':
			return[
				...state,
				{
					id:uuid(),
					exercise:action.exercise,
				}
				
			];
		default:
			return state;
	}
}
