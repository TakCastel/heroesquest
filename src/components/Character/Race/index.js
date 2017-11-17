import React, { Component } from 'react'

import '../style.css'

class Race extends Component {

  raceSelect(e) {
    let check = e.target.value
    this.props.skillCheck(check)
  }

  render() {
    return (
      <label>
        Race : 
        <div className="select-wrapper">
          <select onChange={(e) => this.raceSelect(e)}>
            <option value="default">Pick a race... </option>
            <option value="human">Human</option>
            <option value="sylan">Sylvan</option>
            <option value="greenskin">Greenskin</option>
            <option value="gnome">Gnome</option>
            <option value="reptilian">Reptilian</option>
            <option value="magister">Magister</option>
          </select>
        </div>
      </label>
    );
  }
}

export default Race;
