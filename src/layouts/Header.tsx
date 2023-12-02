import Button from "../components/Button";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, BellRing } from "lucide-react";
import { SidebarContext } from "../context/sidebar-context";
import Logo from "../images/logo-trans.png";
import Navbar from "../components/LandingPage/Navbar";

export default function Header() {
  const { currentUser, dispatch } = useContext(AuthContext);
  const { setSidebarVisibility } = useContext(SidebarContext);
  const navigate = useNavigate();

  return (
    <header className="w-screen h-24 bg-blue-400 px-8 flex items-center fixed justify-between z-50">
      <div className="w-24 flex items-center justify-between">
        <Button
          icon="iconButton"
          screen="mobile"
          variant="ghost"
          onClick={() => setSidebarVisibility((prev) => !prev)}
        >
          <Menu />
        </Button>
        <img src={Logo} alt="logo" className="mx-4"/>
      </div>
      {currentUser ? (
        <div className="w-40 flex items-center justify-between">
          <Button icon="iconButton" variant="ghost" onClick={() => null}>
            <BellRing />
          </Button>
          <Button
            action="logout"
            onClick={() => {
              dispatch({ type: "LOGOUT" });
              navigate("/");
            }}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Navbar />
      )}
    </header>
  );
}
