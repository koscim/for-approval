import React, { Component } from 'react';
import { scaleOrdinal } from 'd3-scale';
import { pie } from 'd3-shape';
import Slice from './Slice';
import ResponsiveWrapper from '../../containers/ResponsiveWrapper';


class Pie extends Component {
  constructor(props){
    super(props);

    this.colorScale = scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "d0743c", "#ff8c00"]);
    this.renderSlice = this.renderSlice.bind(this);
  }
  renderSlice(value, i) {
    return (
      <Slice key={i}
        outerRadius={Math.max(this.props.parentWidth / 4, 200)}
        value={value}
        fill={this.colorScale(i)} />
    )
  }

  render() {
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 500),
      height: 500
    }

    let { data } = this.props;
    const pieChart = pie()
      .sort(null)
      .value(d => d);

    let x = this.props.parentWidth / 2;
    let y = 500;
    return (
      <svg width={svgDimensions.width} height={svgDimensions.height * 2}>
        <g transform={`translate(${x}, ${y})`}>
          {pieChart(data).map(this.renderSlice)}
        </g>
      </svg>
    )
  }
}

export default ResponsiveWrapper(Pie);