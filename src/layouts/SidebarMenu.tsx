import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import { sections } from "../data/sections-data";

interface Sidebar {
  isSidebarShown: boolean;
}
export default function SidebarMenu({ isSidebarShown }: Sidebar) {


  const [isDropdownVisible, setDropdownVisible] = useState(false); 
  return (
    <aside
      className={`${
        isSidebarShown ? `w-56` : `w-24`
      } transition-all duration-300 ease-in-out pt-24 px-2 flex items-center flex-col h-screen relative t-20 z-0 shadow-[7px_1px_9px_0px_#00000024]`}
    >
      {sections.map((section, index) => {
        return (
          <Button
            key={index}
            variant={
              window.location.pathname === `/${section.name.toLowerCase()}`
                ? "active"
                : null
            }
            sidebar={isSidebarShown ? "extended" : "rolled"}
            onClick={() => {
              {section.isButtonExpandable ? setDropdownVisible(prev => !prev) : window.location.pathname = section.name.toLowerCase()}
              
            }}
          >
            <span className="flex justify-center items-center">
              <section.icon className={isSidebarShown ? "mr-4" : ''} />
              {isSidebarShown && <h3>{section.name}</h3>}
            </span>
            {isSidebarShown && section.isButtonExpandable ? (
              <ChevronDown />
            ) : (
              ""
            )}
          </Button>
        );
      })}
    </aside>
  );
}
