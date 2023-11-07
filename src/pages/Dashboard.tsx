import { useState } from "react";
import Header from "../layouts/Header";
import SidebarMenu from "../layouts/SidebarMenu";

export default function Dashboard() {
  return (
    
    <>
      <div className="w-full h-full flex flex-column">
        <Header />
        <SidebarMenu />
      </div>
      <h1>Dashboard</h1>
    </>
  );
}
