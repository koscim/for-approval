import React from 'react';

const TextField = props => {
  return (
    <div className="form-group">
      <label>
        {props.label}
        <input
          name={props.name}
          onChange={props.handlerFunction}
          type="text"
          value={props.content}
          className="form-control"
        />
      </label>
    </div>
  );
}

export default TextField;
