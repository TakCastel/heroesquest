import React, { Component } from 'react'
import { Row, Col } from 'antd';

import { INITIAL_SKILL_POINTS } from '../../../settings'

class Skills extends Component {

  // Handle the props of a skill depending on checkbox
  handleCheckbox(e, skill) {
    this.props.changeSkill(skill)
  }

  /* Display a checkbox to pick or unpick a skill
  When checked the skill return true, uncheck return false */
  renderSkill(skill) {
    let disabled = this.props.countSkill >= INITIAL_SKILL_POINTS && this.props.skills[skill] === false
    let readonly = 
      (this.props.race === 'human' && skill === 'blade')
      || (this.props.race === 'sylvan' && skill === 'accuracy')
      || (this.props.race === 'greenskin' && skill === 'hammer')
      || (this.props.race === 'gnome' && skill === 'alchemy')
      || (this.props.race === 'reptilian' && skill === 'hands')
      || (this.props.race === 'magister' && skill === 'spell') 

    return (
      <div className="white-space-nowrap" key={skill}>
        <input 
          type="checkbox" 
          disabled={disabled}
          readOnly={readonly}          
          checked={this.props.skills[skill]}
          id={skill}      
          value={skill}
          onChange={(e) => {this.handleCheckbox(e, skill)}} 
        />
        <label className="first-letter-uppercase" htmlFor={skill} readOnly={readonly}> {skill}</label>    
      </div>  
    )
  }
  
  /* Display list of 6 items with a map and sort them by category
  Note that it is splitted in 3 groups, from 0 to 18th element */
  render() {
    let skillsList = Object.keys(this.props.skills)

    return (
      <div className="center">
        <div className="spacer"></div>      
        <p>Select <strong>{INITIAL_SKILL_POINTS} skills</strong> for your first level</p>
        <div className="spacer"></div>        
        <p><strong>Note:</strong> A free skill is automatically selected depending on your race</p>
        <Row type="flex" justify="space-around">        
          <Col lg={3}>
            <div className="spacer"></div>                
            <h3>Fight</h3> 
            <div className="spacer"></div>            
            {skillsList.map((skill, i) => {                
              if (i >= 0 && i <= 5) {
                return this.renderSkill(skill)
              }
              return null
            })}
          </Col>
          <Col lg={3}>
            <div className="spacer"></div>                
            <h3>Stealth</h3>
            <div className="spacer"></div>            
            {skillsList.map((skill, i) => {
              if (i > 5 && i <= 11) {
                return this.renderSkill(skill)
              }
              return null                
            })}
          </Col>
          <Col lg={3}>
            <div className="spacer"></div>      
            <h3>Magic</h3>
            <div className="spacer"></div>            
            {skillsList.map((skill, i) => {
              if (i > 11 && i <= 18) {
                return this.renderSkill(skill)
              }
              return null                
            })}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Skills
