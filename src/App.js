import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './containers/NavBar';
import HomeContainer from './containers/HomeContainer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => {
  const TOPICS = ['prepare', 'review', 'approve']
  let links = TOPICS.map(topic => {
    return (
      <li>
        <Link to={`${match.url}/${topic}`}>
          {topic.toUpperCase()}
        </Link>
      </li>
    )
  })
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {links}
      </ul>
      <Route path={`${match.url}/:topicId`} component={Topic}/>
      <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path='/' component={HomeContainer}/>
          <Route path='/about' component={About}/>
          <Route path='/topics/' component={Topics}/>
        </div>
      </Router>
    );
  }
}

export default App;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
