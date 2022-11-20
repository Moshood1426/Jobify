import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/BigSideBar";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import useAppContext from "../store/appContext";

const BigSideBar = () => {
  const { user, logoutUser } = useAppContext();
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [imageLink, setImageLink] = useState(user.image);

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setImageLink(user.image);
  }, [user.name, user.email, user.image]);

  return (
    <Wrapper>
      <div className="mainLists">
        <div className="menuImg">
          <Logo />
        </div>
        <div className="menuItems">
          <NavLinks />
        </div>
      </div>
      <div className="userInfo">
        <div className="userPics">
          <img src={imageLink} alt="user" className="userImg" />
        </div>
        <p className="userName">{name}</p>
        <p className="userEmail">{email}</p>
        <button className="userLogout" onClick={logoutUser}>
          SIGN OUT
        </button>
      </div>
    </Wrapper>
  );
};

export default BigSideBar;
