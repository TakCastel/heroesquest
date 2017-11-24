import React, { Component } from 'react';

class Abilities extends Component {

  render() {
    return (
      <div>
        <ul>
          <li>Bonus +{Math.round(this.props.characteristics.strenght / 3)} to dice attack result</li>
          <li>Total of {(this.props.characteristics.health * 3) + 5} life points</li>
          <li>Capacity to cast {this.props.characteristics.magicka} spells</li>
          <li>Can walk {Math.ceil(this.props.characteristics.stamina / 2) + 1} cell</li>
          <li>Total of {Math.ceil(this.props.characteristics.charge * 1.5) + 1} items bearable</li>
          <li>Can throw again up to {this.props.characteristics.luck} dices</li>
        </ul>
      </div>
    )
  }
}

export default Abilities;