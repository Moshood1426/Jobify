import React from "react";
import Wrapper from "../assets/wrappers/FormElem";

const FormSelectElem = ({ name, labelText, options, onChange, value }) => {
  return (
    <Wrapper>
      <label htmlFor={name} className="formLabel">
        {labelText ? labelText : name}
      </label>
      <select
        name={name}
        id={name}
        className="formInput"
        onChange={onChange}
        value={value}
      >
        {options.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default FormSelectElem;
