import React, { Component } from 'react';
import Chart from '../components/Chart';

const styles = {
  width: 500,
  height: 300,
  padding: 30
};

const numDataPoints = 50;

const randomNum = () => Math.floor(Math.random() * 1000);

const randomDataSet = () => {
  return Array.apply(null, { length: numDataPoints }).map(() => [randomNum(), randomNum()]);
}

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: randomDataSet()
    };
  }
  randomizeData() {
    this.setState({ data: randomDataSet() });
  }

  render() {
    return (
      <div>
        This is a Home Component
        <div className="App-chart-container">
          <Chart />
        </div>
      </div>
    )
  }
}

export default HomeContainer;
