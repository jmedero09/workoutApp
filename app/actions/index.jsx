import * as redux from 'redux';
import uuid from 'node-uuid';
import moment from 'moment';

export var addExercise = exercise => {
  return {
    type: 'ADD_EXERCISE',
    id: uuid(),
    exercise: exercise,
    details: []
  };
};

export var addExerciseDetails = (id, weight, reps) => {
  return {
    type: 'ADD_EXERCISE_DETAILS',
    id: id,
    weight: weight,
    reps: reps
  };
};

export var saveWorkout = workoutLabel => {
  return {
    type: 'SAVE_WORKOUT',
    workoutLabel: workoutLabel,
    date: moment().format('MMM Do YYYY'),
    storedSessoin: []
  };
};

export var openWorkout = id => {
  return {
    type: 'OPEN_WORKOUT',
    id: id
  };
};

export var createExercie = props => {
  return {
    type: 'CREATE_POST'
  };
};

// There are three possible states for our login
// process and we need actions for each of them
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  };
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

// Three possible states for our logout process as well.
// Since we are using JWTs, we just need to remove the token
// from localStorage. These actions are more useful if we
// were calling the API to log the user out
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  };
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  };
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  };

  return dispatch => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));
    return fetch('http://localhost:8080/auth/login', config)
      .then(response => response.json().then(user => ({ user, response })))
      .then(({ user, response }) => {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError(user.message));
          return Promise.reject(user);
        }

        // If login was successful, set the token in local storage
        localStorage.setItem('id_token', user.token);

        // Dispatch the success action
        return dispatch(receiveLogin(user));
      })
      .catch(err => new Error(err));
  };
}

// Logs the user out
export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('id_token');
    dispatch(receiveLogout());
  };
}
