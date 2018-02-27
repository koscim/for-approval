import React, { Component } from 'react';
import Chart from '../components/Chart';
import Pie from '../components/PieChart/Pie';
import LineGraph from '../components/LineGraph';
import Select from '../components/Select';

class TrackContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['Bar Chart', 'Pie Chart', 'Line Graph'],
      chartSelected: 'Bar Chart'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let minViewportSize = Math.min(width, height);
    let radius = (minViewportSize * 0.9) / 2;
    let x = width / 2;
    let y = height / 2;
    let data = [5, 2, 7, 1, 1, 3, 4, 9];
    let linegraphData = [
      {date: new Date(2007, 3, 24), value: 93.24},
      {date: new Date(2007, 3, 25), value: 95.35},
      {date: new Date(2007, 3, 26), value: 98.84},
      {date: new Date(2007, 3, 27), value: 99.92},
      {date: new Date(2007, 3, 30), value: 99.80},
      {date: new Date(2007, 4,  1), value: 99.47},
    ];
    let chart;
    if (this.state.chartSelected === 'Bar Chart') {
      chart = <Chart />;
    } else if (this.state.chartSelected === 'Pie Chart') {
      chart = <Pie x={500} y={500} radius={radius} data={data}/>
    } else if (this.state.chartSelected === 'Line Graph') {
      chart = <LineGraph data={linegraphData}/>
    } else {
      chart = null;
    }

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
        <Select
          name='chartSelected'
          selectedOption={this.state.chartSelected}
          handlerFunction={this.handleInputChange}
          options={this.state.options}
        />
        <div className="App-chart-container">
          {chart}
        </div>
      </div>
    )
  }
}

export default TrackContainer;
