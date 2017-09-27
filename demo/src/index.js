import React, {Component} from 'react';
import {render} from 'react-dom';

import "./styles.scss"

import { Sparkline } from '../../src';

class Demo extends Component {

	constructor(props) {
		super(props);
		this.text = [
		"Spill litter box, scratch at owner, destroy all furniture, especially you are asleep, yet ask to go outside and ask to come inside and ask to ",
		"go outside and ask to come inside. Curl up and sleep on the freshly laundered towels paw at your fat belly. Peer out window, chatter at birds, lure them to",
		"mouth sun bathe, yet scream for no reason at 4 am, for scratch the furniture or peer out window, chatter at birds, lure them to mouth yet refuse to leave cardboard"
		];
	}

	render() {
		return (
			<div className="wrapper">
				<div className="cell">
				TEH FUCK
					<p> {this.text[0]}
					<Sparkline data={[1,2,2,2,3,4,4,3,3,5,5,6,6,4,3,4,5,6,6,1,5,2,6,4,4,5,4,5,5,5,6,6,4,3,4,4,3,4,4,5,5,3,8,7,9,6,7,6,6,7,4,4,6]} line="line-test"/>
					{this.text[1]}
					</p>
				</div>
				<div className="cell">
					<h1> {this.text[0]}
					<Sparkline data={[7,3,6,4]}/>
					{this.text[1]}
					</h1>
				</div>
				<div className="cell">
					{this.text[0]}
					<Sparkline data={[3,4,4,6]}/>
					{this.text[1]}
				</div>
				<div className="cell">
					<span>{this.text[0]}</span>
					<Sparkline data={[3,4,4,6]}/>
					<span>{this.text[1]}</span>
				</div>
		    </div>
	    )
	}
}

render(<Demo/>, document.querySelector('#demo'))
