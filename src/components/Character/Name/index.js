import React, { Component } from 'react'

class Name extends Component {

  // Handle the input change for name
  handleChange(e) {
    let name = e.target.value
    this.props.changeName(name)
  }
  
  render() {
    return (
        <label className="spaced">
          Name:
          <input 
            type="text" 
            placeholder='Enter a name'
            onChange={(e) => this.handleChange(e)} 
          />
        </label>
    )
  }

}

export default Name