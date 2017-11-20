import React, { Component } from 'react';
import { INITIAL_CHARACTERISTIC_POINTS } from '../../../settings'

class Points extends Component {

  constructor(props){
    super(props);
    this.state = {
      points: 0,
    };
  }

  componentDidMount() {
    this.calculatePoints(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.calculatePoints(nextProps)
  }

  // Calculate the number of points remaining to spend in characteristics 
  calculatePoints(props) {
    this.setState({points: INITIAL_CHARACTERISTIC_POINTS - props.totalSpentInCharacteristics})
  }

  render() {
    return (
      <div>
        <p>You have <strong>{this.state.points}</strong> points to spend on your new character.</p>
      </div>
    )
  }
}

export default Points;
