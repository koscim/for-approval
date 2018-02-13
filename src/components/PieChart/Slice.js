import React, { Component } from 'react'
import { arc } from 'd3-shape';

export default class Slice extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { value, fill, innerRadius = 0, outerRadius} = this.props;

    const path = arc()
      .outerRadius(outerRadius - 10)
      .innerRadius(innerRadius)

    return (
      <path d={path(value)} fill={fill}/>
    );
  }
}
