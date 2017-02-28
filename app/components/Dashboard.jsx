import React from 'react';
import {
    connect
} from 'react-redux';
import * as actions from '../actions/actions';
import {
    AddExerciseReducer
} from '../reducers/reducers';
import ExerciseTileList from './Exercise-Tile-List';
import SetRepList from './SetRepsList';
import moment from 'moment';
import {
    Link,
    hashHistory
} from 'react-router';
import {
    fields,
    reduxForm
} from 'redux-form';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        var {
            dispatch,
            exercise
        } = this.props;

        var exerciseText = this.refs.addExercise.value;

        dispatch(actions.addExercise(exerciseText));

        this.refs.addExercise.value = '';

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'get'
        }).then(function(response) {
           return response.json()
        }).then(function(data) {
            console.log(data);
        });        

    }
    handleSave(e) {
        e.preventDefault();
        var {
            dispatch
        } = this.props;

        dispatch(actions.saveWorkout(workout));
        hashHistory.push('/savedworkout');
    }
    render() {
        const {
            fields: {
                exercise,
                weight,
                reps
            },
            handleSubmit
        } = this.props;

        return (
            <div className="row">
				<div className="columns samll-centred">
					<ExerciseTileList/>
				</div>
				<div className="{small-12 columns text-center samll-centred} ">
			        <form onSubmit={this.handleSubmit}>
			          <input required minLength="4" maxLength="15"className="addExerciseField text-center" type="text" ref="addExercise" placeholder="Add an Exercise" {...exercise}/>
			          <div className="textHelp">{exercise.touched ? exercise.error :''}</div>
			          <button className="button expanded">Add Exercise</button>
			          <button onClick={this.handleSave} className="button expanded">Save Workout</button>
			        </form>
				</div>
			</div>
        )
    }
}

function validate(values) {
    var errors = {};
    if (!values.exercise) {
        errors.exercise = 'You Must Enter an exercise';
    } else if (values.exercise && values.exercise.length < 4) {
        errors.exercise = 'yooo u wallin hard body';
    }

    return errors;
}
export default reduxForm({
    form: 'dashboardForm',
    fields: ['exercise', 'weight', 'reps'],
    validate
}, null, )(Dashboard);
