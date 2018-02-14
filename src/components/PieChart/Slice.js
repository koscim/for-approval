import React, { Component } from 'react'
import { arc } from 'd3-shape';

export default class Slice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false
    };
    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
  }

  onMouseOver() {
    this.setState({ isHovered: true });
  }

  onMouseOut() {
    this.setState({ isHovered: false });
  }

  render() {
    let { value, label, fill, innerRadius = 0, outerRadius, cornerRadius, padAngle} = this.props;
    if (this.state.isHovered) {
      outerRadius *= 1.1;
    }
    const path = arc()
      .outerRadius(outerRadius - 10)
      .innerRadius(innerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle)

    return (
      <g onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}>
        <path d={path(value)} fill={fill}/>
        <text transform={`translate(${path.centroid(value)})`}
              dy=".35em"
              textAnchor="middle"
              fill="white">
          {label}
        </text>
      </g>
    );
  }
}
