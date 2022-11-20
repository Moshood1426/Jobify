import React, { useEffect, useState } from "react";
import Wrapper from "../../assets/wrappers/Profile";
import { DashboardContainer } from "../../components";
import { FormElem } from "../../components";
import useAppContext from "../../store/appContext";
import { Alert } from "../../components";
import { UpdateProfilePics, UpdatePassword } from "../../components";

const initialState = {
  name: "",
  email: "",
  lastName: "",
  location: "",
};

const Profile = () => {
  const [values, setValues] = useState(initialState);
  const { user, showAlert, invalidInput, editProfile } = useAppContext();

  useEffect(() => {
    if (user) {
      setValues({ ...user });
    }
    // eslint-disable-next-line
  }, [user]);

  const handleFormChange = (event) => {
    const name = event.target.name;
    setValues({ ...values, [name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!values.name || !values.lastName || !values.email || !values.location) {
      invalidInput();
      return;
    }
    editProfile(values);
  };

  return (
    <Wrapper>
      <div className="mainContainer">
        <header className="mainTitle">
          <h1>Profile</h1>
          <p>Edit your profile information below.</p>
        </header>
        {showAlert && <Alert />}
        <DashboardContainer>
          <form onSubmit={handleFormSubmit}>
            <h3 className="formTitle">
              All changes made will be effected on user's profile
            </h3>
            <div className="formItems">
              <FormElem
                type="text"
                name={"name"}
                value={values.name}
                onChange={handleFormChange}
              />
              <FormElem
                type="text"
                name={"lastName"}
                value={values.lastName}
                onChange={handleFormChange}
              />
              <FormElem
                type="text"
                name={"location"}
                value={values.location}
                onChange={handleFormChange}
              />
              <FormElem
                type="email"
                name={"email"}
                value={values.email}
                onChange={handleFormChange}
              />
              <div className="buttonDiv">
                <button type="submit" className="btn submitBtn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </DashboardContainer>
        <div className="updateDiv">
          <div>
            <UpdatePassword />
          </div>
          <UpdateProfilePics />
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
