import React from "react";
import Wrapper from "../assets/wrappers/FormElem";

const FormElem = ({ type, value, name, labelText, onChange }) => {
  return (
    <Wrapper>
      <label htmlFor={name} className="formLabel">
        {labelText ? labelText : name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="formInput"
      />
    </Wrapper>
  );
};

export default FormElem;
