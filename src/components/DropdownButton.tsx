import { ReactNode, useState } from "react";
import Button from "./Button";

interface DropdownButton {
  isSidebarShown: boolean;
  children: ReactNode;
  menuItems: { link: string; name: string }[] | undefined;
}

export default function DropdownButton({
  isSidebarShown,
  children,
  menuItems,
}: DropdownButton) {
  const [isDropdownShown, setDropdown] = useState(false);
  return (
    <>
      <Button
        sidebar={isSidebarShown ? "extended" : "rolled"}
        onClick={() => setDropdown((prev) => !prev)}
      >
        {children}
      </Button>
      {isDropdownShown && (
        <ul
          className={`w-2/3 h-auto flex flex-col border-l-2 border-solid mt-2 mb-2 ${
            !isSidebarShown && "hidden"
          }`}
        >
          {menuItems?.map((item) => {
            return (
              <li className="ml-2">
                <Button
                  sidebar="extended"
                  variant={
                    `..${window.location.pathname}` === item.link
                      ? "active"
                      : null
                  }
                  onClick={() => (window.location.pathname = item.link)}
                >
                  {item.name}
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
