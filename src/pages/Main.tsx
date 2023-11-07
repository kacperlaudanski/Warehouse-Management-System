import { ReactNode } from "react";
import Header from "../layouts/Header";
import SidebarMenu from "../layouts/SidebarMenu";

export default function Main({children}:any) {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-full h-full flex">
        <SidebarMenu />
        {children}
      </div> 
    </div>
  );
}
