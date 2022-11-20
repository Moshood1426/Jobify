import React, { useEffect } from "react";
import { Navbar, FormElem, Card, ForgotPassword, Alert } from "../components";
import Wrapper from "../assets/wrappers/Register";
import logo from "../assets/images/logoIcon.svg";
import useAppContext from "../store/appContext";
import { useNavigate } from "react-router-dom";

//NOTE: This component allows user to register, login and forgot Password

const Register = () => {
  const {
    isRegistered,
    forgotPassword,
    handleIsRegistered,
    handleForgotPassword,
    showAlert,
    name,
    email,
    password,
    handleChange,
    invalidInput,
    register,
    isLoading,
    login,
    user
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);
    }
    // eslint-disable-next-line
  }, [user]);

  //handling register or login
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || (!isRegistered && !name)) {
      invalidInput();
      return;
    }

    const userInfo = { email, password };
    if (!isRegistered) {
      userInfo.name = name;
      await register(userInfo);
    } else {
      await login(userInfo);
    }
  };

  const swapUserStatus = () => {
    handleIsRegistered();
  };

  const forgotPass = () => {
    handleForgotPassword();
  };

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange(name, value);
  };

  //footer text on register/login page
  const userSwap = (
    <p className="footerText">
      {isRegistered ? "Don't have an account? " : "Already a user? "}
      <span className="loginSwapAction" onClick={swapUserStatus}>
        {isRegistered ? "Register" : "Login"}
      </span>
    </p>
  );

  //if client wants to sign up but forgot Password
  if (forgotPassword) {
    return (
      <Wrapper>
        <Navbar navToLanding={true} />
        <ForgotPassword forgotPass={forgotPass} />
      </Wrapper>
    );
  }

  //if client needs to register
  return (
    <Wrapper>
      <Navbar navToLanding={true}/>
      <div className="container">
          <Card footer={userSwap}>
            <div className="header">
              <img src={logo} alt="Logo" />
              <h3 className="headerTitle">
                {isRegistered ? "Login" : "Register"}
              </h3>
            </div>
            {showAlert && <Alert />}
            <div className="form-content">

            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
              {!isRegistered && (
                <FormElem
                  type="name"
                  name={"name"}
                  value={name}
                  onChange={(e) => handleFormChange(e)}
                />
              )}
              <FormElem
                type="email"
                name={"email"}
                value={email}
                onChange={(e) => handleFormChange(e)}
              />
              <FormElem
                type="password"
                name={"password"}
                value={password}
                onChange={(e) => handleFormChange(e)}
              />
              <button type="submit" className="btn" disabled={isLoading}>
                Submit
              </button>
            </form>
            {isRegistered && (
              <p className="forgotPassword">
                Forgot your password?{" "}
                <span className="forgotPasswordClick" onClick={forgotPass}>
                  click here
                </span>
              </p>
            )}
          </Card>
        
      </div>
    </Wrapper>
  );
};

export default Register;
