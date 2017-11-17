import React, { Component } from 'react';

import Points from '../Character/Points';
import Name from '../Character/Name';
import Race from '../Character/Race';
import Characteristics from '../Character/Characteristics';
import Attributes from '../Character/Attributes';
import Skills from '../Character/Skills';

class Character extends Component {
  render() {
    return (
      <div className="Character">

        <h1>Character sheet</h1>

        <p>Welcome to Heroes Quest, please create a character</p>

        <h2>Profile</h2>
        <form>
          <Name {...this.props.character} />
          <Race {...this.props.character} skillCheck={this.props.skillCheck} />      
        </form>

        <h2>Characteristics</h2>
        <Points {...this.props.character} />
        <Characteristics {...this.props.character} characteristicChange={this.props.characteristicChange} />

        <h2>Attributes</h2>
        <Attributes {...this.props.character} />

        <h2>Skills</h2>        
        <Skills {...this.props.character} 
          skillChange={this.props.skillChange}
          skillCheck={this.props.skillCheck}
        />
      </div>
    );
  }
}

export default Character;
