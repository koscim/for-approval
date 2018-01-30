import React, { Component } from 'react';
import DropdownItem from '../components/DropdownItem';

const NavDropdown = (props) => {
  let items = props.items.map(item => {
    return(
      <DropdownItem title={item}/>
    )
  })
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link dropdown-toggle' href="http://example.com" id={props.id}
        data-toggle='dropdown' aria-haspopup='true'
        aria-expanded='false'>{props.title}</a>
      <div className='dropdown-menu' aria-labelledby={props.id}>
        {items}
      </div>
    </li>
  )
}

export default NavDropdown;
