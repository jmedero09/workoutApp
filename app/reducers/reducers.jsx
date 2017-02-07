import * as redux from'redux';

export var AddExerciseReducer = (state=[],action)=>{
	switch(action.type){
		case 'ADD_EXERCISE':
			return[
				...state,
				{
					id:action.id,
					exercise:action.exercise,
				}
			];
		default:
			return state;
	}
}

export var AddExerciseDetailsReducer = (state=[],action)=>{
	switch(action.type){
		case 'ADD_EXERCISE_DETAILS':
			return[
				...state,
				{
					set:Math.floor(Math.random() * 10000),
					weight:action.weight,
					reps:action.reps	
				}
			];
		default:
			return state;
	}
}


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