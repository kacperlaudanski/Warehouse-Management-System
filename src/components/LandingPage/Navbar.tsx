import { useNavigate, NavLink } from "react-router-dom";
import Button from "../Button";

export default function Navbar(){
    const navigate = useNavigate(); 
    return (
        <nav className="w-2/5 h-full flex justify-between items-center mx-8">
          <ul className="w-full h-full flex justify-between items-center text-white">
            <li><NavLink to={'javascript:void(0);'}>About Us</NavLink></li>
            <li><NavLink to={'javascript:void(0);'}>Products</NavLink></li>
            <li><NavLink to={'javascript:void(0);'}>Contact</NavLink></li>
            <Button variant='navbarLogin' onClick={() => navigate('./login')}>Login</Button>
          </ul>
        </nav>
    )
}