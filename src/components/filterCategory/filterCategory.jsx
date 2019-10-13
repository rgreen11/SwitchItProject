import React from "react";

import "bootstrap/dist/css/bootstrap.css";

export default ({ handle, options, name }) => {
  return (
    <select
      id="inputState"
      onChange={handle}
      className="form-control tab-color"
      defaultValue={name}
    >
      <option value={name} disabled>
        {name}
      </option>
      {options.map((option, i) => {
        return <option key={i}>{option}</option>;
      })}
    </select>
  );
};
