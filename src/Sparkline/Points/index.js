import React, { Component } from 'react';
import * as d3 from 'd3';

import '../../styles.scss';

export default class Line extends Component {

	componentDidMount() {
		this.g = d3.select(this.refs.g);
	}

	componentDidUpdate(props) {
		this.buildPoints();
	}

	buildPoints() {
		this.g.selectAll(".point")
			.data(this.props.data).enter()
			.append('circle')
				.classed('point', true)
				.attr('r', 1)
				.attr('cx', (d, i) => this.props.xLine(i))
				.attr('cy', (d) => this.props.y(d));
	}

	render() {
		return (
			<g ref='g'>
			</g>
		);
	}
}
