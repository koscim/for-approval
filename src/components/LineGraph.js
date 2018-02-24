import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate'
import Axes from './LineGraph/Axes';
import ResponsiveWrapper from '../containers/ResponsiveWrapper';
import * as d3 from 'd3';
import './LineGraph.css'
import { getXScale, getYScale } from '../helpers/d3Helpers';

class LineGraph extends Component {
  constructor(props) {
    super(props)
    this.getXScale = getXScale.bind(this);
    this.getYScale = getYScale.bind(this);
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 300),
      height: 500
    }

    const maxValue = Math.max(...this.props.data.map(d => d.value));
    const xScale = this.getXScale(this.props.data, margins, svgDimensions, scaleBand(), 'date');
    const yScale = this.getYScale(maxValue, margins, svgDimensions, scaleLinear());

    let line = d3.line()
      .x(function(d) { return xScale(d.date); })
      .y(function(d) { return yScale(d.value); })
      
    let newLine = line(this.props.data);

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <path className='linechart_path' d={newLine}></path>
      </svg>
    )
  }
}

export default ResponsiveWrapper(LineGraph);
