import React, {Component} from 'react';
import {render} from 'react-dom';

import "./styles.scss"

import { Sparkline } from '../../src';

class Demo extends Component {

	constructor(props) {
		super(props);
		this.text = [
		"Spill litter box, scratch at owner, destroy all furniture, especially you are asleep, yet ask to go outside and ask to come inside and ask to ",
		" go outside and ask to come inside. Curl up and sleep on the freshly laundered towels paw at your fat belly. Peer out window, chatter at birds, lure them to",
		"mouth sun bathe, yet scream for no reason at 4 am, for scratch the furniture or peer out window, chatter at birds, lure them to mouth yet refuse to leave cardboard"
		];
	}

	generateData(length, modifier) {
		let data = [];
		for (let i = 0; i < length; i++) {
			data.push(modifier ? modifier(Math.random(), i) : Math.random() * -1);
		};
		return data;
	}

	render() {
		return (
			<div className="wrapper">
				<div className="cell">
					<p> {this.text[0]}
					<Sparkline data={this.generateData(10, (d,i) => (d + i/10))}
						band="band-test"
						bars="bar-test"
					/>
					{this.text[1]}
					</p>
				</div>
				<div className="cell">
					<h1> {this.text[0]}
					<Sparkline data={this.generateData(25, (d, i) => (i + d*15))}
						band="band-test"
						points="points-test"
					/>
					{this.text[1]}
					</h1>
				</div>
				<div className="cell">
					{this.text[0]}
					<Sparkline data={this.generateData(15, (d,i) => (d - i/10))}
						line="line-test"
						band="band-test"
					/>
					{this.text[1]}
				</div>
				<div className="cell">
					<span>{this.text[0]}</span>
					<Sparkline data={this.generateData(20)}
						line="line-test"
						band="band-test"
					/>
					<span>{this.text[1]}</span>
				</div>
		    </div>
	    )
	}
}

render(<Demo/>, document.querySelector('#demo'))
