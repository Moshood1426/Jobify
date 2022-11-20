import React from "react";
import Card from "./Card";
import logo from "../assets/images/logoIcon.svg";
import FormElem from "./FormElem";

const ForgotPassword = ({ forgotPass }) => {
  const returnToJobify = (
    <p className="footerText forgotpassText" onClick={forgotPass}>
      Return To Login
    </p>
  );
  return (
    <div>
      <div className="container">
        <Card footer={returnToJobify}>
          <div className="header">
            <img src={logo} alt="Logo" />
            <h3 className="headerTitle">Forgot your password?</h3>
            <p className="forgotPassSubtitle">
              Enter the email you used for Jobify, and we'll help you create a
              new password.
            </p>
          </div>
          <form>
            <FormElem type="email" name={"email"} />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
