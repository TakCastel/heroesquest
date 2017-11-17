import React, { Component } from 'react'
import { INITIAL_CHARACTERISTIC_POINTS } from '../../../settings'

import FontAwesome from 'react-fontawesome'

class Characteristics extends Component {

  // Handle the characteristics change from table inputs
  handleChange(type, characteristic) {
    let value = type === 'add' ? + 1 : - 1;
    this.props.characteristicChange(characteristic, value)
  }

  // Provide button minor or minus applied to characteristic
  // NOTE : the rendering shall be inside a table tbody 
  renderCharacteristic(characteristic) {

    let disabledMinor = this.props.totalSpentInCharacteristics >= INITIAL_CHARACTERISTIC_POINTS
    let disabledMinus = this.props.characteristics[characteristic] <= 0

    return (
      <tr>
        <td className="object">{characteristic}:</td>
        <td>{this.props.characteristics[characteristic]}</td>
        <td>
          <button type='button' disabled={disabledMinor} onClick={() => {this.handleChange('add', characteristic)}}><FontAwesome name='plus' /></button>
          <button type='button' disabled={disabledMinus} onClick={() => {this.handleChange('sub', characteristic)}}><FontAwesome name='minus' /></button>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div>
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