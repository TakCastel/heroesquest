import React, { Component } from 'react'

import Points from '../Character/Points'
import Name from '../Character/Name'
import Race from '../Character/Race'
import Characteristics from '../Character/Characteristics'
import Attributes from '../Character/Attributes'
import Skills from '../Character/Skills'
import Create from '../Character/Create'

class Character extends Component {
  render() {
    return (
      <div className="container">

        <h1>Character sheet</h1>

        <p>Welcome to Heroes Quest, please create a character</p>

        <h2>Profile</h2>
        <form>
          <Name 
            {...this.props.character} 
            changeName={this.props.changeName} /><br/>
          <Race 
            {...this.props.character} 
            changeRace={this.props.changeRace}
            checkSkill={this.props.checkSkill} />      
        </form>
  
        <h2>Characteristics</h2>
        <Points {...this.props.character} />
        <Characteristics
          {...this.props.character} 
          changeCharacteristic={this.props.changeCharacteristic} />

        <h2>Attributes</h2>
        <Attributes 
          {...this.props.character} />

        <h2>Skills</h2>        
        <Skills 
          {...this.props.character} 
          changeSkill={this.props.changeSkill} />

        <Create {...this.props.character}
          createCharacter={this.props.createCharacter} />
      </div>
    );
  }
}

export default Character;
