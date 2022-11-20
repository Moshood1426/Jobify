import React, { useState } from "react";
import Wrapper from "../assets/wrappers/UpdateProfilePics";
import FormElem from "./FormElem";
import useAppContext from "../store/appContext";

const UpdatePassword = () => {
  const { isLoading, updatePassword, invalidInput } = useAppContext();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((!oldPassword, !newPassword, !confirmNewPassword)) {
      invalidInput();
      return;
    }
    if (oldPassword !== confirmNewPassword) {
      invalidInput();
      return;
    }
    updatePassword(oldPassword, newPassword);

    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h3 className="divTitle">Change Password</h3>
        <div className="formItems majContent">
          <FormElem
            labelText="Old Password"
            type="text"
            name={"oldPassword"}
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <FormElem
            labelText="New Password"
            type="text"
            name={"newPassword"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <FormElem
            labelText="Confirm New Password"
            type="text"
            name={"confirmNewPassword"}
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <div className="buttonDiv">
            <button
              type="submit"
              className="btn submitBtn"
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default UpdatePassword;
