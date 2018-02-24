import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate'
import Axes from './LineGraph/Axes';
import ResponsiveWrapper from '../containers/ResponsiveWrapper';
import * as d3 from 'd3';
import './LineGraph.css'

class LineGraph extends Component {
  constructor() {
    super()
    this.xScale = scaleBand();
    this.yScale = scaleLinear();
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 }
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 300),
      height: 500
    }

    let data = [
      {date: new Date(2007, 3, 24), value: 93.24},
      {date: new Date(2007, 3, 25), value: 95.35},
      {date: new Date(2007, 3, 26), value: 98.84},
      {date: new Date(2007, 3, 27), value: 99.92},
      {date: new Date(2007, 3, 30), value: 99.80},
      {date: new Date(2007, 4,  1), value: 99.47},
    ];

    const maxValue = Math.max(...data.map(d => d.value));

    // scaleBand type
    const xScale = this.xScale
      .padding(0.5)
      .domain(data.map(d => d.date))
      .range([margins.left, svgDimensions.width - margins.right]);

    const yScale = this.yScale
      .domain([0, maxValue + 20])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    let line = d3.line()
      .x(function(d) { return xScale(d.date); })
      .y(function(d) { return yScale(d.value); })

    let x = this.props.parentWidth / 2;
    let y = (svgDimensions.height / 2);

    let newLine = line(data);
    console.log(newLine);
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
