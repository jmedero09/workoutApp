import React from 'react';
import {connect} from 'react-redux';
import SetReps from './SetReps';

export var SetRepsList = React.createClass({

	renderList:function(){
		console.log('my this.props',this.props)
		
				return this.props.exercise[0].detail.map((details,index)=>{
					return(

						<li key={index}>
							<SetReps weight={details.weight} reps={details.reps}/>
						</li>
					)

				});					
			
	},
	render:function(props){
		return (
			<ul className="small-centered  small-12 columns text-center">
				{this.renderList()}
			</ul>
		)
	}
});
export default SetRepsList
  