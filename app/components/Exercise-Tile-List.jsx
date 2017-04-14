import React from 'react';
import ExerciseTile from './Exercise-Tile';

class ExerciseTileList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    return this.props.exercise.map((exercise, index) => {
      return (
        <li key={exercise.id}>
          <ExerciseTile title={exercise.exercise} detail={exercise.detail} />
        </li>
      );
    });
  }
  render(props) {
    return (
      <ul className="small-centered  small-12 columns text-center">
        {this.renderList()}
      </ul>
    );
  }
}
