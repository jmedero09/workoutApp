console.log('dsadsadsa');
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import Dashboard from './components/Dashboard';
import SavedWorkoutList from './components/SavedWorkoutList';
import Login from './components/Login';
import * as actions from './actions';
import Main from './components/Main';
import WorkoutDescription from './components/WorkoutDescription';
var store = require('./store/configureStore').configure();

// $(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={Main}>
        <Route path="savedworkout" component={SavedWorkoutList} />
        <Route path="description" component={WorkoutDescription} />
        <IndexRoute component={Dashboard} />
      </Route>
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
