var redux = require('redux');
import uuid from 'node-uuid';

export var addExercise = (exercise)=>{
	return{
		type:'ADD_EXERCISE',
		id:uuid(),
		exercise:exercise,

	}
}

export default (addExercise);