import React, { Component } from 'react';
import * as d3 from 'd3';

import Line from './Line';
import NormalBand from './NormalBand';
import Points from './Points';
import Bars from './Bars';

import '../styles.scss';

export default class Sparkline extends Component {

	constructor(props) {
		super(props);
	    this.elements = [];

	    this.state = {
	    	margin: 2,
	    	xLine: d3.scaleLinear(),
	    	xBar: d3.scaleBand(),
	    	y: d3.scaleLinear(),
	    	height: 1,
	    	width: 1
	    };
	}

	componentWillMount() {
		this.readProps();
	}

	componentDidMount() {
		this.svg = d3.select(this.refs.svg);

		this.setState(function(state) {
			let height = parseFloat(getComputedStyle(this.refs.svg).fontSize);
			let width = height * 4;

			let plotWidth = width + state.margin,
				plotHeight = height + state.margin;

			let xRange = [state.margin, width - state.margin],
				yRange = [height - state.margin, state.margin];

			let xLine = d3.scaleLinear()
				.domain(d3.extent(this.props.data, (d, i) => i))
				.rangeRound(xRange);

			let xBar = d3.scaleBand()
				.domain(this.props.data.map((d,i) => i))
				.range(xRange)
				.paddingInner(0.1);

			let y = d3.scaleLinear()
				.domain(d3.extent(this.props.data))
				.range(yRange);

			return {
				height: height,
				width: width,
				xLine: xLine,
				xBar: xBar,
				y: y
			}
		});
	}

	readProps() {
		Object.keys(this.props).forEach((key) => {
			let keyFormatted = key.toUpperCase();
			switch (keyFormatted) {
				case 'LINE':
				case 'AREA':
				case 'BARS':
				case 'BAND':
				case 'POINTS':
					let elementProps = parseProps(keyFormatted, this.props[key]);
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

		console.log(this.elements);
	}

	render() {
		let elements = this.elements.map((elementConfig) => {
			let element;
			switch (elementConfig.type){
				case 'LINE':
					element = <Line data={this.props.data} {...elementConfig.props} {...this.state} key="line"/>
					break;
				case 'BAND':
					element = <NormalBand data={this.props.data} {...elementConfig.props} {...this.state} key="band"></NormalBand>
					break;
				case 'POINTS':
					element = <Points data={this.props.data} {...elementConfig.props} {...this.state} key="points"></Points>
					break;
				case 'BARS':
					element = <Bars data={this.props.data} {...elementConfig.props} {...this.state} key="points"></Bars>
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
