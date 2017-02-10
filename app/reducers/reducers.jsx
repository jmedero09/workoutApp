import * as redux from'redux';
import update from 'immutability-helper';

export var AddExerciseReducer = (state=[],action)=>{
	switch(action.type){
		case 'ADD_EXERCISE':
			return update(state,{$push: [{
				id:action.id,
				exercise:action.exercise,
				detail:[]
			}]})
			// return[
			// 	...state,
			// 	{
			// 		id:action.id,
			// 		exercise:action.exercise,
			// 		detail:[

			// 		]
			// 	}
			// ];
			case 'ADD_EXERCISE_DETAILS':
				console.log('......',action.id,action.weight,action.reps)
				var exerciseIndex = state.findIndex(function(exercise){
					return exercise.id === action.id
				})
				console.log('look at me',exerciseIndex)

				return update()
	// 			return state.map((detail)=>{
	// 				if(detail.id===action.id){

	// 					return{
	// 						...detail.detail,
	// 						weight:action.weight,
	// 						reps:action.reps
	// 					}
	// 				}
	// 				else{
	// 					return detail
	// 				}
	// 			});

	// 	default:
	// 		return state;
	// }
	}
}

// export var AddExerciseDetailsReducer = (state=[],action)=>{
// 	switch(action.type){
// 		case 'ADD_EXERCISE_DETAILS':
// 			return
// 				detail:[
// 					...state,
// 					{
// 					id:action.id,
// 					set:Math.floor(Math.random() * 10000),
// 					weight:action.weight,
// 					reps:action.reps	
// 					}
// 				]
// 		default:
// 			return state;
// 	}
// }


// function updateObjectInArray(array, action) {
//     return array.map( (item, index) => {
//         if(index !== action.index) {
//             // This isn't the item we care about - keep it as-is
//             return item;
//         }

//         // Otherwise, this is the one we want - return an updated value
//         return {
//             ...item,
//             ...action.item
//         };    
//     });
// }

// 	export var AddExerciseDetailsReducer = (state=[],action)=>{
// 	switch(action.type){
// 		case 'ADD_EXERCISE_DETAILS':
// 			return state.map(item,index)=>{

// 			}
// 		default:
// 			return state;
// 	}
// }











export default (AddExerciseReducer);