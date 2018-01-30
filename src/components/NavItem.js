import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li className='nav-item'>
      <Link className='nav-link' to={`${props.link}`}>{props.title}</Link>
    </li>
  )
}

export default NavItem;
