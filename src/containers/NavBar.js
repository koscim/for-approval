import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NavItem from '../components/NavItem';
import NavDropdown from './NavDropdown';

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">For Approval</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarForApproval" aria-controls="navbarForApproval"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarForApproval">
        <ul className="navbar-nav mr-auto">
          <NavDropdown id='dropdown01' title='Dropdown' items={['Action', 'Another action', 'Something else here']}/>
          <NavItem link='/' title='Home'/>
          <NavItem link='/about' title='About'/>
          <NavItem link='/topics' title='Topics'/>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholer="Search" aria-label="Search"/>
        </form>
      </div>
    </nav>
  )
}

export default NavBar;

// <li className="nav-item active">
//   <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
// </li>
// <li className="nav-item">
//   <a className="nav-link" href="#">Link</a>
// </li>
// <li className="nav-item">
//   <a className="nav-link disabled" href="#">Disabled</a>
// </li>
