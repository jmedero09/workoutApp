import * as redux from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import {reducer as formReducer } from 'redux-form';

import {AddExerciseReducer, AddExerciseDetailsReducer, saveWorkoutReducer} from 'reducers';

export var configure = (initialState = {})=>{
	var reducer = redux.combineReducers({
		addExercise:AddExerciseReducer,
		savedWorkout:saveWorkoutReducer,
		form:formReducer
	});

	var store = redux.createStore(reducer,initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension():f => f

		));
	return store;
};