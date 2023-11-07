import Header from "../layouts/Header";
import SidebarMenu from "../layouts/SidebarMenu";

export default function Main() {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <SidebarMenu />
    </div>
  );
}
