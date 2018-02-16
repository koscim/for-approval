import React, { Component } from 'react';
import Select from '../components/Select';
import TextField from '../components/TextField';

export default class AssignmentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      firstName: '',
      lastName: '',
      assignment: '',
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
  validateInputChange(value, name) {
    let label = name.replace(/([A-Z])/g, '$1').toUpperCase();
    if (value === '' || value === '  ') {
      let newError = { [name]: `${label} may not be blank.` };
      this.setState({ errors: Object.assign(this.state.errors, newError) });
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState[[name]];
      this.setState({ errors: errorState });
      return true;
    }
  }
  handleFormSubmit(event) {
    event.preventDefault();
    if (this.validateInputChange(this.state.firstName, 'firstName') &&
    this.validateInputChange(this.state.lastName, 'lastName') &&
    this.validateInputChange(this.state.roleSelected, 'roleSelected')) {
      let formPayload = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        roleSelected: this.state.roleSelected
      };
      this.handleClearForm(event);
    }
  }
  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      firstName: '',
      lastName: '',
      assignment: '',
      roleSelected: ''
    });
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
        <Select
          handlerFunction={this.handleInputChange}
          name='assignmentSelected'
          label='Assignment'
          options={props.data}
          selectedOption={this.state.assignmentSelected}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
