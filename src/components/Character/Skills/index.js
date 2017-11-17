import React, { Component } from 'react'
import { INITIAL_SKILL_POINTS } from '../../../settings'

import '../style.css'

class Skills extends Component {

  // Handle the props of a skill depending on checkbox
  handleCheckbox(e, skill) {
    this.props.skillChange(skill)
  }

  /* Display a checkbox to pick or unpick a skill
  When checked the skill return true, uncheck return false */
  renderSkill(skill) {
    let disabled = this.props.countSkill >= INITIAL_SKILL_POINTS && this.props.skills[skill] === false   
    let checked = null

    // let skillsChecking = Object.keys(this.props.skills)
    
    // skillsChecking.map((skill) => {
    //   if (this.props.check === ['human'] && this.props.skills.blade === false) {
    //     return (
    //       this.props.countSkill + 1,
    //       this.props.skills.blade === true,
    //       checked = ''
    //     )
    //   }
    //   else if (this.props.check === ['default'] && this.props.skills.blade === true) {
    //     return (
    //       this.props.countSkill - 1,
    //       this.props.skills.blade === false,      
    //       checked = null 
    //     )
    //   }
    //   return null
    // })

    return (
      <div key={skill}>
        <input 
          type="checkbox" 
          disabled={disabled}
          checked={checked}
          id={skill}      
          onChange={(e) => {this.handleCheckbox(e, skill)}} 
          value={skill}
        />
        <label htmlFor={skill} className="object">{skill}</label>    
      </div>  
    )
  }
  
  /* Display list of 6 items with a map and sort them by category
  Note that it is splitted in 3 groups, from 0 to 18th element */
  render() {
    let skillsList = Object.keys(this.props.skills)

    // console.log(this.props.skills.blade)
    // console.log(this.props.check)
    // console.log(this.props.countSkill)

    return (
      <div>
        <p>Select {INITIAL_SKILL_POINTS} skills for your first level</p>
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
