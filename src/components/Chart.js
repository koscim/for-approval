import React, { Component } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from './Chart/Axes';
import Bars from './Chart/Bars';
import ResponsiveWrapper from '../containers/ResponsiveWrapper';
import { getXScale, getYScale } from '../helpers/d3Helpers';

class Chart extends Component {
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

    const xScale = this.getXScale(this.props.data, margins, svgDimensions, scaleBand(), 'employee');
    const yScale = this.getYScale(maxValue, margins, svgDimensions, scaleLinear());

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={this.props.data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    )
  }
}

export default ResponsiveWrapper(Chart);
