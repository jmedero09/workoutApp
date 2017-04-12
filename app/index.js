console.log('dsadsa');
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import Dashboard from './components/Dashboard';
import SavedWorkoutList from './components/SavedWorkoutList';
import Login from './components/Login';
import * as actions from './actions';
import Main from './components/Main';
import WorkoutDescription from './components/WorkoutDescription';
var store = require('./store/configureStore').configure();
export var subscribe = store.subscribe(() => {
  var state = store.getState();
});
// Load foundation
$(document).foundation();
// App css
// require('style!css!applicationStyles');
// require('style!css!sass!scssApplicationStyles');
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <Route path="savedworkout" component={SavedWorkoutList} />
        <Route path="description" component={WorkoutDescription} />
        <IndexRoute component={Dashboard} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
