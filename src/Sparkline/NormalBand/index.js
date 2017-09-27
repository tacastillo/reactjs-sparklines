import React, { Component } from 'react';
import * as d3 from 'd3';

import '../../styles.scss';

export default class NormalBand extends Component {

	componentDidMount() {
		this.band = d3.select(this.refs.band);
	}

	componentDidUpdate(props) {
		this.buildBand();
	}

	buildBand() {

		let mean = d3.mean(this.props.data);
		let stdev = d3.deviation(this.props.data);
		let halfway = this.props.y(mean);

		this.band
			.attr("x", this.props.margin)
			.attr("y", this.props.y(mean + stdev))
			.attr("width", this.props.width - this.props.margin * 2)
			.attr("height", this.props.y(mean - stdev) - this.props.y(mean + stdev));
	}

	render() {
		return (
			<g>
				<rect className="band" ref="band">
				</rect>
			</g>
		);
	}
}
