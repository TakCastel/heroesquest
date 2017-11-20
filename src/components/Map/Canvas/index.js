import React, { Component } from 'react'

import character from '../../../assets/images/male-human.png'

class Canvas extends Component {

  render() {
    return ( 
      <div className="canvas-content">
        <img src={character} alt="character" /> 
        <br/>            
        <canvas id="canvas" ref="chart">Your browser doesn 't support canvas</canvas>   
      </div>
    )
  }

}

export default Canvas