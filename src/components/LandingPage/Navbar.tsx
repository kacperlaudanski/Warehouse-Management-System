import NavbarChild from "./NavbarChild";

export default function Navbar(){
    return (
        <nav className="w-3/5 h-full flex justify-between items-center mx-8">
          <ul className="w-full h-full flex justify-between items-center text-neutral-500 child">
            <NavbarChild name="About Us"/>
            <NavbarChild name="Products"/>
            <NavbarChild name="Contact" /> 
          </ul>
        </nav>
    )
}