import React, { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/SmallSideBar";
import Logo from "./Logo";
import { FaTimes } from "react-icons/fa";
import useAppContext from "../store/appContext";
import NavLinks from "./NavLinks";

const SmallSideBar = () => {
  const { handleShowSideBarMenu, user, logoutUser } = useAppContext();

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
      <div className="content">
        <FaTimes onClick={handleShowSideBarMenu} className="cancelIcon" />
        <div className="menuImg">
          <Logo />
        </div>
        <div className="menuItems">
          <NavLinks />
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
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
