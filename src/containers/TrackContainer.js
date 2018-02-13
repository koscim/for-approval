import React, { Component } from 'react';
import Chart from '../components/Chart';
import PieChart from '../components/PieChart';
import Pie from '../components/PieChart/Pie';
class TrackContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let minViewportSize = Math.min(width, height);
    let radius = (minViewportSize * 0.9) / 2;
    let x = width / 2;
    let y = height / 2;
    let data = [5, 2, 7, 1, 1, 3, 4, 9];
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Track assignment completion</h1>
          <p className="lead">View the completion status of employee assignments.</p>
          <hr className="my-4"/>
          <p>This is a detailed view of assignment completion per employee.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">See Details</a>
          </p>
        </div>
        <div className="App-chart-container">
          <Chart />
        </div>
        <div>
          <Pie x={500} y={500} radius={radius} data={data}/>
        </div>
      </div>
    )
  }
}

export default TrackContainer;
