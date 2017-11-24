import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';

import Profile from '../Character/Profile'
import Characteristics from '../Character/Characteristics'
import Skills from '../Character/Skills'

const Step = Steps.Step;

class Character extends Component {

  state = { current: 0 }

  renderFormProfile() {
    return (
      <Profile {...this.props}/> 
    )
  }
  
  renderFormCharacteristics() {
    return (
      <div>
        <Characteristics {...this.props}/>
      </div>
    )
  }

  renderFormSkills() {
    return (
      <Skills {...this.props}/>
    )
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {

    let disabled = this.props.name === '' || this.props.countSkill < 3 || this.props.race === 'default' || this.props.totalSpentInCharacteristics < 11
    const { current } = this.state 
    
    console.log(this.props.name, this.props.countSkill, this.props.race, this.props.totalSpentInCharacteristics)
    
    const steps = [{
      title: 'Profile',
      content: this.renderFormProfile(),
    }, {
      title: 'Characteristics',
      content: this.renderFormCharacteristics(),
    }, {
      title: 'Skills',
      content: this.renderFormSkills(),
    }];

    console.log(disabled)
  
    return (
      <div>
        <h1>Character creation</h1>
        <p>Welcome to Heroes Quest, this is the character creation</p>
        <div className="spacer"></div>      
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="spacer"></div>        
        <div className="steps-action">
        {
          this.state.current < steps.length - 1
          &&
          <Button type="primary" onClick={() => this.next()}>Next</Button>
        }
        {
          this.state.current === steps.length - 1
          &&
          <Button type="primary" onClick={() => message.success('Character created!')}  disabled={disabled}>Done </Button>
        }
        {
          this.state.current > 0
          &&
          <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
            Previous
          </Button>
        }
        </div>
      </div>
    );
  }
}

export default Character
