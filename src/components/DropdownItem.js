import React, { Component } from 'react';

const DropdownItem = (props) => {
  return (
    <a className='dropdown-item' href='#'>{props.title}</a>
  )
}

export default DropdownItem;
