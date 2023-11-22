import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import Button from "../components/Button";
import DropdownButton from "../components/DropdownButton";
import { SidebarContext } from "../context/sidebar-context";
import { sections } from "../data/sections-data";

export default function SidebarMenu() {
  const {isSidebarShown, setSidebarVisibility} = useContext(SidebarContext);
  return (
    <aside
      className={`${
        isSidebarShown ? `w-56` : `w-24`
      } transition-all duration-300 ease-in-out pt-10 px-2 flex items-center flex-col h-screen bg-neutral-100 fixed z-30`}
      onMouseEnter={() => setSidebarVisibility(true)}
      onMouseLeave={() => setSidebarVisibility(false)}
    >
      {sections.map((section, index) => {
        return section.isButtonExpandable ? (
          <DropdownButton
            isSidebarShown={isSidebarShown}
            menuItems={section.expandedOptions}
          >
            <span className="flex justify-center items-center">
              <section.icon className={isSidebarShown ? "mr-4" : ""} />
              {isSidebarShown && <h3>{section.name}</h3>}
            </span>
            {isSidebarShown && <ChevronDown />}
          </DropdownButton>
        ) : (
          <Button
            key={index}
            variant={
              window.location.pathname === `/${section.name.toLowerCase()}`
                ? "active"
                : null
            }
            sidebar={isSidebarShown ? "extended" : "rolled"}
            onClick={() => {
              window.location.pathname = section.name.toLowerCase();
            }}
          >
            <span className="flex justify-center items-center">
              <section.icon className={isSidebarShown ? "mr-4" : ""} />
              {isSidebarShown && <h3>{section.name}</h3>}
            </span>
          </Button>
        );
      })}
    </aside>
  );
}
