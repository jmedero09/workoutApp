import React from 'react';
import ReactDOM from'react-dom';
import{Route, Router, IndexRoute, hashHistory} from 'react-router';
var {Provider} = require('react-redux');

import Dashboard from './components/Dashboard';
import ExerciseTile from './components/Exercise-Tile';
import SavedWorkOut from './components/SavedWorkOut';
import Login from './components/Login';

var actions =  require('./actions/actions');
var store = require('./store/configureStore').configure();


export var subscribe = store.subscribe(()=>{

	var state = store.getState();
	console.log('New State ', store.getState());

});

store.dispatch(actions.addExercise('Chest Press'));

// Load foundation
$(document).foundation();

// App css
require('style!css!applicationStyles')
require('style!css!sass!scssApplicationStyles')

ReactDOM.render(
<Provider store={store}>	
	<Dashboard/>
</Provider>,
  document.getElementById('app')
);
