import React, { Component } from 'react';
import * as d3 from 'd3';

import Line from './Line';

import '../styles.scss';
const ELEMENT_TYPES = {
	LINE: Line
}

export default class Sparkline extends Component {

	constructor(props) {
		super(props);
	    this.elements = [];

	    this.state = {
	    	margin: 2,
	    	xLine: d3.scaleLinear(),
	    	xBar: d3.scaleBand(),
	    	y: d3.scaleLinear(),
	    	height: 100,
	    	width: 100
	    }
	}

	componentWillMount() {
		this.readProps();
	}

	componentDidMount() {
		this.svg = d3.select(this.refs.svg);
	    

	    this.setHeight();
	    this.buildScales();
	}

	setHeight() {
		this.setState(function(state) {
			return {
				height: parseFloat(getComputedStyle(this.refs.svg).fontSize)
			}
		});
	}

	readProps() {
		Object.keys(this.props).forEach((key) => {
			let keyFormatted = key.toUpperCase();
			switch (keyFormatted) {
				case 'LINE':
				case 'AREA':
				case 'BAR':
				case 'BAND':
				case 'POINTS':
					let elementProps = parseProps(keyFormatted, this.props[key])
					this.elements.push(elementProps);
					break;
			};
		});
		if (this.elements.length === 0) {
			this.elements.push({type: 'LINE'});
		}

		function parseProps(key, value) {
			let elementProps = { type: key };
			if (typeof value === 'string') {
				elementProps.props = { className:  value };
			} else if (typeof value === 'object') {
				elementProps.props = value;
			}
			return elementProps;
		}
	}

	buildScales() {
		this.setState(function(state) {
			console.log(state, this);
			let plotWidth = +state.width + state.margin,
				plotHeight = +state.height + state.margin;

			let xRange = [state.margin, state.width - state.margin],
				yRange = [state.height - state.margin, state.margin];

			let xLine = d3.scaleLinear()
					.domain(d3.extent(this.props.data, (d, i) => i))
					.range(xRange);

			let xBar = d3.scaleBand()
				.domain(this.props.data.map((d,i) => i))
				.range(xRange);

			let y = d3.scaleLinear()
					.domain([0, d3.max(this.props.data)])
					.range(yRange);
			return {
				xLine: xLine,
				xBar: xBar,
				y: y
			}
		});
	}

	render() {
		let elements = this.elements.map((elementConfig) => {
			let element;
			switch (elementConfig.type){
				case 'LINE':
					element = <Line data={this.props.data} {...elementConfig.props} x={this.state.xLine} y={this.state.y} key="line"/>
					break;
			};
			return element;
		});
		return (
			<span className="sparkline-svg-container">
				<svg 
					className="sparkline-svg"
					height={this.state.height}
					width={this.state.width}
					ref="svg">
				{elements}
				</svg>
			</span>
		);
	}
}