import React, { Component } from 'react'
import { Button, Icon } from 'antd';

import { INITIAL_CHARACTERISTIC_POINTS } from '../../../settings'

class Characteristics extends Component {

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

  // Handle the characteristics change from table inputs
  handleChange(type, characteristic) {
    let value = type === 'add' ? + 1 : - 1;
    this.props.changeCharacteristic(characteristic, value)
  }

  state = {
    size: 'large',
  };

  // Provide button minor or minus applied to characteristic
  renderCharacteristic(characteristic) {
    const size = this.state.size;    

    let disabledMinor = this.props.totalSpentInCharacteristics >= INITIAL_CHARACTERISTIC_POINTS
    let disabledMinus = this.props.characteristics[characteristic] <= 0

    return (
      <tr>
      <td>{characteristic}</td>
      <td>{this.props.characteristics[characteristic]}</td>
        <td>
          <Button.Group size={size}>
            <Button type='button' disabled={disabledMinor} onClick={() => {this.handleChange('add', characteristic)}}><Icon type="plus" /></Button>
            <Button type='button' disabled={disabledMinus} onClick={() => {this.handleChange('sub', characteristic)}}><Icon type="minus" /></Button>
          </Button.Group>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <div className="spacer"></div>
        <p>You have <strong>{this.state.points} points</strong> to spend on your new character.</p>
        <div className="spacer"></div>
        <table>
          <tbody>
            {this.renderCharacteristic('strenght')}
            {this.renderCharacteristic('health')}
            {this.renderCharacteristic('magicka')}
            {this.renderCharacteristic('stamina')}
            {this.renderCharacteristic('charge')}
            {this.renderCharacteristic('luck')}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Characteristics