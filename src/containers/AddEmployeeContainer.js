import React, { Component } from 'react';
import Select from '../components/Select';
import TextField from '../components/TextField';

class AddEmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      roleSelected: '',
      roles: ['Preparer', 'Reviewer', 'Approver']
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateInputChange = this.validateInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearFOrm.bind(this);
  }
  handleInputChange(event) {
    this.validateInputChange(event.target.value, event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }


  render() {
    return (
      <form className="callout" onSubmit={this.handleFormSubmit}>
        {errorDiv}
        <TextField
          content={this.state.firstName}
          label='First Name'
          name='firstName'
          handlerFunction={this.handleInputChange}
        />
        <TextField
          content={this.state.lastName}
          label='Last Name'
          name='lastName'
          handlerFunction={this.handleInputChange}
        />
        <Select
          handlerFunction={this.handleInputChange}
          name='roleSelected'
          label='Role'
          options={this.state.roles}
          selectedOption={this.state.roleSelected}
        />
      </form>
    )
  }
}
