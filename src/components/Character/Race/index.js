import React, { Component } from 'react'

class Race extends Component {

  selectRace(e) {
    let race = e.target.value
    this.props.changeRace(race)

    if (race === 'human') {
      this.props.checkSkill('blade')
    }
    if (race === 'sylvan') {
      this.props.checkSkill('accuracy')
    }
    if (race === 'greenskin') {
      this.props.checkSkill('hammer')
    }
    if (race === 'gnome') {
      this.props.checkSkill('alchemy')
    }
    if (race === 'reptilian') {
      this.props.checkSkill('hands')
    }
    if (race === 'magister') {
      this.props.checkSkill('spell')
    }
  }

  render() {
    return (
      <label>
        Race : 
        <div className="select-custom">
          <select onChange={(e) => this.selectRace(e)}>
            <option value="default">Pick a race... </option>
            <option value="human">Human</option>
            <option value="sylvan">Sylvan</option>
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
