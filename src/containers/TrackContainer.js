import React, { Component } from 'react';
import Chart from '../components/Chart';

class TrackContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
      </div>
    )
  }
}

export default TrackContainer;
