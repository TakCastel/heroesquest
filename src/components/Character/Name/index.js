import React, { Component } from 'react'

class Name extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  
  // Handle the input change for name
  handleChange(e) {
    this.setState({name: e.target.value})
  }

  render() {
    return (
        <label>
          Name:
          <input 
            type="text" 
            value={this.state.value} 
            placeholder='Enter a name'
            onChange={(e) => this.handleChange(e)} 
          />
        </label>
    )
  }

}

export default Name