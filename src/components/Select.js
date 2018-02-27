import React from 'react';

const Select = props => {
  let optionElements = props.options.map(option =>{
    return (
      <option key={option} value={option}>{option}</option>
    );
  })

  return (
    <div>
      <label className="sr-only">{props.label}</label>
      <select
        name={props.name}
        value={props.selectedOption}
        onChange={props.handlerFunction}
        className="form-control form-control-lg">
        <option value="">{props.label}</option>
        {optionElements}
      </select>
    </div>
  );
}

export default Select;
