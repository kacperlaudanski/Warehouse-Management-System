import { NavLink } from "react-router-dom";

type NavbarChild = {
    name: string;
}

export default function NavbarChild({name}: NavbarChild){
   return (
    <li className="hover:text-neutral-700 transition-color duration-300"><NavLink to={'javascript:void(0);'}>{name}</NavLink></li>
   )
}