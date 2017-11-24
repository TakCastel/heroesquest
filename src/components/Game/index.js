import React, {
	Component
} from 'react'
import Canvas from '../Game/Canvas'

class Game extends Component {
	
	render() {
		return ( 
			<div className="container">
				<Canvas/>
			</div>
		)
	}

}

export default Game