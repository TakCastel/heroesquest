import React, { Component } from 'react'
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
      <div className="left" key={skill}>
        <input 
          className="checkbox-custom"
          type="checkbox" 
          disabled={disabled}
          readOnly={readonly}          
          checked={this.props.skills[skill]}
          id={skill}      
          value={skill}
          onChange={(e) => {this.handleCheckbox(e, skill)}} 
        />
        <label htmlFor={skill} className="object" readOnly={readonly} >{skill}</label>    
      </div>  
    )
  }
  
  /* Display list of 6 items with a map and sort them by category
  Note that it is splitted in 3 groups, from 0 to 18th element */
  render() {
    let skillsList = Object.keys(this.props.skills)

    return (
      <div className="center">
        <p>Select {INITIAL_SKILL_POINTS} skills for your first level</p>
        <p><strong>Note:</strong> A free skill is automatically selected depending on your race</p>
        <form name="checkSkills" id="checkSkills">
            <div className="skill-list">
            <h3>Fight</h3>
              {skillsList.map((skill, i) => {                
                if (i >= 0 && i <= 5) {
                  return this.renderSkill(skill)
                }
                return null
              })}
            </div>
            <div className="skill-list">  
              <h3>Stealth</h3>        
              {skillsList.map((skill, i) => {
                if (i > 5 && i <= 11) {
                  return this.renderSkill(skill)
                }
                return null                
              })}
            </div>
            <div className="skill-list">
              <h3>Magic</h3>
              {skillsList.map((skill, i) => {
                if (i > 11 && i <= 18) {
                  return this.renderSkill(skill)
                }
                return null                
              })}
            </div>
          </form>
      </div>
    )
  }
}

export default Skills
