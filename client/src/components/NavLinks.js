import React from "react";
import links from "../utils/dashboardActions";
import { NavLink } from "react-router-dom";
import useAppContext from "../store/appContext";

const NavLinks = () => {
  const { handleShowSideBarMenu } = useAppContext();

  const navItems = links.map((item) => {
    return (
      <div className="menuItem" key={item.id}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive ? "menuItemLink active" : "menuItemLink "
          }
          onClick={handleShowSideBarMenu}
        >
          <span className="menuItemIcon">{item.icon}</span>
          {item.text}
        </NavLink>
      </div>
    );
  });

  return <>{navItems}</>;
};

export default NavLinks;
