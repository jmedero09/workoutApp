import * as redux from 'redux';
import thunk from 'redux-thunk';
import {AddExerciseReducer, AddExerciseDetailsReducer} from 'reducers';

export var configure = (initialState = {})=>{
	var reducer = redux.combineReducers({
		addExercise:AddExerciseReducer,
	});

	var store = redux.createStore(reducer,initialState, redux.compose(
		redux.applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension():f => f

		));
	return store;
};