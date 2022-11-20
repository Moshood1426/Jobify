import React from "react";
import Wrapper from "../assets/wrappers/FormCheckbox";

const FormCheckbox = ({ checked, onChange, name, id, labelText }) => {
  return (
    <Wrapper>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        id={name}
        className={"checkboxItem"}
      />
      <label htmlFor={name} className="formLabel">
        {labelText ? labelText : name}
      </label>
    </Wrapper>
  );
};

export default FormCheckbox;
