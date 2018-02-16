import React from 'react';

export default const AssignmentList = props => {
  let assignmentItems = props.assignmentPayload.map((assignment, index) => {
    return (
      <li key={index}>
        <strong>
          {assignment.firstName} {assignment.lastName}
        </strong>
        <br/>
        {assignment.roleSelected}
        <br/>
        {assignment.assignmentSelected}
      </li>
    );
  });
  return (
    <div>
      <h3 className="text-center">Assignment List</h3>
      <ul>{assignmentItems}</ul>
    </div>
  );
}
