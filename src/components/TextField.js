import React from 'react';

const TextField = props => {
  return (
    <div>
      <label className="sr-only">{props.label}</label>
      <input
        name={props.name}
        onChange={props.handlerFunction}
        type="text"
        value={props.content}
        placeholder={props.label}
        className="form-control"
      />
    </div>
  );
}

export default TextField;
