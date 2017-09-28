import React, { Component } from 'react';
import * as d3 from 'd3';

import '../../styles.scss';

export default class Bars extends Component {

	componentDidMount() {
		this.g = d3.select(this.refs.g);
	}

	componentDidUpdate(props) {
		this.buildBars();
	}

	buildBars() {
		this.g.selectAll(".bar")
			.data(this.props.data).enter()
			.append('rect')
				.classed('bar', true)
				.attr('x', (d, i) => this.props.xBar(i))
				.attr('y', (d) => (this.props.y(d)))
				.attr('width', this.props.xBar.bandwidth())
				.attr('height', (d) => this.props.height - this.props.y(d));
	}

	render() {
		return (
			<g ref='g'>
			</g>
		);
	}
}
