import React, { useState } from "react";

const useDropdown = (label, defaultState, optionsArray) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown ${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        name={id}
        value={state}
        onChange={e => updateState(e.target.value)}
        onBlur={e => updateState(e.target.value)}
        disabled={!optionsArray.length}
      >
        <option>All</option>
        {optionsArray.map((item, i) => (
          <option key={`${item}-${i}`} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
