import { ReactNode, useState } from "react";
import Button from "./Button";

interface DropdownButton {
  isSidebarShown: boolean;
  children: any;
}

export default function DropdownButton({
  isSidebarShown,
  children,
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
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      )}
    </>
  );
}
