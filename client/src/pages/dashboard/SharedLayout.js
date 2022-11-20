import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import useAppContext from "../../store/appContext";
import Wrapper from "../../assets/wrappers/SharedLayout";
import BigSideBar from "../../components/BigSideBar";
import SmallSideBar from "../../components/SmallSideBar";
import { Navigate } from "react-router-dom";

const SharedLayout = () => {
  const { showSideBarMenu, handleShowSideBarMenu, user } = useAppContext();

  useEffect(() => {
    if (!user) {
      return <Navigate to="/landing" />;
    }
  }, [user]);

  return (
    <Wrapper>
      {showSideBarMenu && <SmallSideBar />}
      <Navbar showMenu={true} handleShowMenuItems={handleShowSideBarMenu} />
      <div className="asideContent">
        <BigSideBar />
      </div>
      <div className="mainContent">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default SharedLayout;
