import React from 'react';
import ReactDOM from'react-dom';
import{Route, Router, IndexRoute, hashHistory} from 'react-router';
var {Provider} = require('react-redux');
import Dashboard from './components/Dashboard';
import ExerciseTile from './components/Exercise-Tile';
import SavedWorkOut from './components/SavedWorkOut';
import Login from './components/Login';
import * as actions from './actions/actions';
import ExerciseTileList from './components/Exercise-Tile-List';
import Main from './components/Main';

var store = require('./store/configureStore').configure();


export var subscribe = store.subscribe(()=>{

	var state = store.getState();
	console.log('New State ', store.getState());

});

// store.dispatch(actions.addExercise('Chest Press'));
// store.dispatch(actions.addExercise('should Press'));
// store.dispatch(actions.addExercise('leg Press'));
// store.dispatch(actions.addExercise('push Press'));
// store.dispatch(actions.addExercise('arm Press'));


// Load foundation
$(document).foundation();

// App css
require('style!css!applicationStyles')
require('style!css!sass!scssApplicationStyles')

ReactDOM.render(
<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Dashboard}/>
		</Route>
	</Router>	
</Provider>,
  document.getElementById('app')
);
