import { useState } from "react";
import Header from "../layouts/Header";
import SidebarMenu from "../layouts/SidebarMenu";

export default function Main() {
  const [isSidebarShown, setSidebarVisibility] = useState(false);
  return (
    <div className="w-full h-full flex flex-column">
      <Header
        sidebarHandler={() => setSidebarVisibility((prev) => !prev)}
      />
      <SidebarMenu isSidebarShown={isSidebarShown}/>
    </div>
  );
}
