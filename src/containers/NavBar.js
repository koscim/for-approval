import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import NavItem from '../components/NavItem';


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
