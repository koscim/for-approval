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
          <NavItem link='/' title='Home'/>
          <NavItem link='/track' title='Track'/>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;

// <NavDropdown id='dropdown01' title='Actions' items={['Prepare', 'Review', 'Approve']}/>
// <NavItem link='/about' title='About'/>
// <NavItem link='/topics' title='Topics'/>
// <form className="form-inline my-2 my-md-0">
//   <input className="form-control" type="text" placeholer="Search" aria-label="Search"/>
// </form>
