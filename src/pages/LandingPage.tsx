import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/LandingPage/Navbar";
import SocialMediaPanel from "../components/LandingPage/SocialMediaPanel";
import Logo from "../images/logo-dark-trans.png";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <main className="w-full h-screen flex bg-white">
      <section className="w-2/4 h-full p-20 flex flex-col justify-between bg-white">
        <header className="w-full h-auto flex justify-between items-center">
          <img src={Logo} alt="logo" className="w-24" />
          <Navbar /> 
        </header>
        <div className="w-3/5 h-full flex flex-col items-start justify-between my-20">
          <h1 className="text-6xl mb-10 leading-10">
            Effortless{" "}
            <span className="mx-5 text-indigo-600">Warehouse Management</span>{" "}
            at Your <span className="mx-5 text-red-400">Fingertips</span>
          </h1>
          <p className="my-10 text-neutral-500">
            Simplify warehouse management with WarehouseWiz. Effortlessly
            optimize your inventory. Your warehouse, simplified.
          </p>
          <Button action="getStarted" onClick={() => navigate("/register")}>
            Get Started
          </Button>
        </div>
        <SocialMediaPanel />
      </section>
      <section className="w-2/4 h-full flex flex-col items-end border-8 border-solid border-white rounded-l-3xl bg-warehouse-pattern bg-no-repeat bg-center">
        <div className="w-48 h-28 flex items-center justify-center bg-white rounded-l-full relative before:content-['*'] before:w-20 before:h-20 before:bg-white before:absolute before:left-0 before:bottom-2/4">
          <Button action="landingLogin" onClick={() => navigate('/login')}>Login</Button>
        </div> 
      </section>
    </main>
  );
}
