import React, { Component } from 'react';
import AssignmentFormContainer from './AssignmentFormContainer';
import AssignmentList from '../components/AssignmentList';

export default class AssignmentIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assignmentPayload: []
    };
    this.trackAssignmentPayload = this.trackAssignmentPayload.bind(this);
  }

  trackAssignmentPayload(submission) {
    this.setState({ assignmentPayload: this.state.assignmentPayload.concat(submission) });
  }

  render() {
    return (
      <div>
        <AssignmentFormContainer trackAssignmentPayload={this.trackAssignmentPayload} />
        <AssignmentList assignmentPayload={this.state.assignmentPayload} />
      </div>
    )
  }
}
