import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <nav className="navbar navbar-dark bg-dark">
              <a className="navbar-brand" href="#">For Approval</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarForApproval" aria-controls="navbarForApproval"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarForApproval">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/topics">Topics</Link>
                  </li>
                </ul>
                <form className="form-inline my-2 my-md-0">
                  <input className="form-control" type="text" placeholer="Search" aria-label="Search"/>
                </form>
              </div>
            </nav>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/topics/' component={Topics}/>
        </div>
      </Router>
    );
  }
}

export default App;
