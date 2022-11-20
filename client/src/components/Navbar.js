import Logo from "./Logo";
import Wrapper from "../assets/wrappers/Navbar";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import useAppContext from "../store/appContext";

const Navbar = ({ showMenu, handleShowMenuItems, navToLanding }) => {
  const { user, isRegistered, handleIsRegistered } = useAppContext();

  const navigate = useNavigate();

  const handleNavToLanding = () => {
    if (!navToLanding) {
      return;
    }
    navigate("/landing", { replace: true });
  };

  const handleSignInButton = () => {
    if (!isRegistered) {
      handleIsRegistered();
    }
    navigate("/register", { replace: true });
  };

  const handleRegisterButton = () => {
    if (isRegistered) {
      handleIsRegistered();
      return;
    }
    navigate("/register", { replace: true });
  };

  return (
    <Wrapper>
      <div className="navContainer">
        <div className="logoImg" onClick={handleNavToLanding}>
          <Logo />
        </div>
        <div className="navItems">
          {!user && (
            <>
              <p className="register" onClick={handleRegisterButton}>
                Register
              </p>
              <p className="sign_in" onClick={handleSignInButton}>
                Sign In
              </p>
            </>
          )}
          {showMenu && (
            <HiMenu className="menuBar" onClick={handleShowMenuItems} />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
