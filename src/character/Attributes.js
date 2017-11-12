import React, { Component } from 'react';
import './AppCharacter.css';

class Attributes extends Component {

  constructor(props){
      super(props);
      this.state = { 
        strenght: 1,
        health: 1,
        magicka: 1,
        stamina: 1,
        charge: 1,
        luck: 1,
      };
    }

  strenghtMod(type){
    this.setState(prevState => {
        return {strenght: type === 'add' ? prevState.strenght + 1: prevState.strenght - 1}
    });
  }

  healthMod(type){
    this.setState(prevState => {
        return {health: type === 'add' ? prevState.health + 1: prevState.health - 1}
    });    
  }

  magickaMod(type){
    this.setState(prevState => {
        return {magicka: type === 'add' ? prevState.magicka + 1: prevState.magicka - 1}
    });    
  }

  staminaMod(type){
    this.setState(prevState => {
        return {stamina: type === 'add' ? prevState.stamina + 1: prevState.stamina - 1}
    });    
  }

  chargeMod(type){
    this.setState(prevState => {
        return {charge: type === 'add' ? prevState.charge + 1: prevState.charge - 1}
    });    
  }

  luckMod(type){
    this.setState(prevState => {
        return {luck: type === 'add' ? prevState.luck + 1: prevState.luck - 1}
    });    
  }

  render() {
    return (
      <div className="Attributes">
      <h1>Attributes</h1>
        <h2>Characteristics</h2>
          <table className="Table">
            <tbody>
              <tr>
                <td>Strenght: {this.state.strenght}</td>
                <td>
                  <input type='button' onClick={() => {this.strenghtMod('add')}} value='+1'/>
                  <input type='button' onClick={() => {this.strenghtMod('sub')}} value='-1'/>
                </td>
              </tr>
              <tr>
                <td>Health: {this.state.health}</td>
                <td>
                  <input type='button' onClick={() => {this.healthMod('add')}} value='+1'/>
                  <input type='button' onClick={() => {this.healthMod('sub')}} value='-1'/>
                </td>
              </tr>
              <tr>
                <td>Magicka: {this.state.magicka}</td>
                <td>
                  <input type='button' onClick={() => {this.magickaMod('add')}} value='+1'/>
                  <input type='button' onClick={() => {this.magickaMod('sub')}} value='-1'/>
                </td>
              </tr>
              <tr>
                <td>Stamina: {this.state.stamina}</td>
                <td>
                  <input type='button' onClick={() => {this.staminaMod('add')}} value='+1'/>
                  <input type='button' onClick={() => {this.staminaMod('sub')}} value='-1'/>
                </td>
              </tr>
              <tr>
                <td>Charge: {this.state.charge}</td>
                <td>
                  <input type='button' onClick={() => {this.chargeMod('add')}} value='+1'/>
                  <input type='button' onClick={() => {this.chargeMod('sub')}} value='-1'/>
                </td>
              </tr>
              <tr>
                <td>Luck: {this.state.luck}</td>
                <td>
                  <input type='button' onClick={() => {this.luckMod('add')}} value='+1'/>
                  <input type='button' onClick={() => {this.luckMod('sub')}} value='-1'/>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Advantages</h2>
        <ul>
          <li>bonus +{Math.floor(this.state.strenght / 2)} to dice attack result</li>
          <li>total of {this.state.health * 5} life points</li>
          <li>capacity to cast {this.state.magicka} spells</li>
          <li>can walk {Math.ceil(this.state.stamina / 2)} cell</li>
          <li>total of {this.state.charge * 2} items bearable</li>
          <li>can throw an other dice {this.state.luck} times</li>
        </ul>
      </div>
    )
  }
}

export default Attributes;
