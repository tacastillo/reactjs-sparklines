import React, { Component } from 'react';
import * as d3 from 'd3';

import '../../styles.scss';

export default class Line extends Component {

	componentDidMount() {
		this.line = d3.select(this.refs.line);
	}

	componentDidUpdate(props) {
		this.buildLine();
	}

	buildLine() {
		this.lineFunc = d3.line()
			.x((d, i) => this.props.xLine(i))
			.y((d) => this.props.y(d));

		this.line
			.datum(this.props.data)
			.attr('d', this.lineFunc);
	}

	render() {
		return (
			<g>
				<path className="line" ref="line">
				</path>
			</g>
		);
	}
}
