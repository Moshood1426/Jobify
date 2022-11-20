import React from "react";
import useAppContext from "../store/appContext";

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div className={`alert alert-${alertType}`}>
      <p>{alertText}</p>
    </div>
  );
};

export default Alert;
