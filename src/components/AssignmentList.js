import React from 'react';

const AssignmentList = props => {
  let assignmentItems = props.assignmentPayload.map((assignment, index) => {
    return (
      <li className="list-group-item" key={index}>
        <strong>
          {assignment.employeeSelected}
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
      <div className="jumbotron">
        <h3 className="display-4">Assignment List</h3>
      </div>
      <div className="align-items-center justify-content-center">
        <ul className="list-group">{assignmentItems}</ul>
      </div>
    </div>
  );
}

export default AssignmentList;
