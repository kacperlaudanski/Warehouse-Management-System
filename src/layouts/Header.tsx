import Button from "../components/Button";
import { AuthContext } from "../context/auth-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, BellRing} from "lucide-react";
import { SidebarContext } from "../context/sidebar-context";

interface Header {
    sidebarHandler: () => void; 
}

export default function Header() {
  const { dispatch } = useContext(AuthContext);
  const {setSidebarVisibility} = useContext(SidebarContext)
  const navigate = useNavigate();

  function notificationsModalHandler(){
    return null; 
  }
  return (
    <header className="w-screen h-20 bg-blue-400 px-8 flex fixed items-center justify-between z-10">
      <div className="w-24 flex items-center justify-between">
      <Button icon='iconButton' variant='ghost' onClick={() => setSidebarVisibility(prev => !prev)}>
        <Menu/>
      </Button>
      <h1>LOGO</h1>
      </div>
      <div className="w-40 flex items-center justify-between">
      <Button icon='iconButton' variant='ghost' onClick={notificationsModalHandler}>
        <BellRing />
      </Button>
      <Button
        action="logout"
        onClick={() => {
          dispatch({ type: "LOGOUT" });
          navigate("/login");
        }}
      >
        Logout
      </Button>
      </div>

    </header>
  );
}
