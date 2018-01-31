import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders a Router', () => {
  const div = document.createElement('div');
  const app = ReactDOM.render(<App />, div);
})

// <Router>
//   <div className="App">
//     <NavBar/>
//     <Route exact path='/' component={Home}/>
//     <Route path='/about' component={About}/>
//     <Route path='/topics/' component={Topics}/>
//   </div>
// </Router>
