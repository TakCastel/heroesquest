import React, { Component } from 'react'

class Create extends Component {

  // handleClick(e, name) {
  //   e.preventDefault()
  //   localStorage.setItem('name', this.props.name)
  //   localStorage.setItem('race', this.props.race)
  //   localStorage.setItem('characteristics', JSON.stringify(this.props.characteristics))
  //   // localStorage.setItem('skills', this.props.skills[skill])    
  // }

  render() {
    let disabled = this.props.name === '' || this.props.countSkill < 3 || this.props.race === 'default' || this.props.totalSpentInCharacteristics < 11
    
    return (
      <div>
        <p>
          <strong>Choose carefully!</strong>
        </p>
        <p>
          Once your character is created, you cannot go back to this page unless you restart the game.
        </p>
        <button 
          disabled={disabled}
          className="float-right" 
          type='button' 
          // onClick={(e, name) => this.handleClick(e, name)}
          >
          Create character
        </button>
      </div>
    )
  }

}

export default Create