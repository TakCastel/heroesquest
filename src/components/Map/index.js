import React, {	Component } from 'react'
import Canvas from '../Map/Canvas'
import Message from '../Map/Message'

class Map extends Component {

	render() {
		return ( 
			<div className="container">
				<Message/>
				<Canvas/>
			</div>
		)
	}
	
}

export default Map