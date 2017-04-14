import React from 'react';
import { Link, hashHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { isAuthenticated, errorMessage, dispatch, exercise } = this.props;
    return (
      <div className="row">
        <div className="small-centered  small-12 columns text-center">
          <Link to="/"><img className="logoImg" src="logo.png" /></Link>
        </div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />

        <Dashboard isAuthenticated={isAuthenticated} dispatch={dispatch} />
        <div>
          <Link to="/">Home</Link>
          <Link to="/savedworkout">Workouts</Link>
        </div>
      </div>
    );
  }
}

var mapStateToProps = (state, props) => {
  return state;
};
export default connect(mapStateToProps)(Main);
