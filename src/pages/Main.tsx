import Header from "../layouts/Header";
import SidebarMenu from "../layouts/SidebarMenu";

export default function Main({ children }: any) {
  return (
    <div className="w-full h-full flex flex-col overflow-x-hidden">
      <Header />
      <div className="w-full flex bg-neutral-100 pt-24">
        <SidebarMenu />
        <div className="w-full h-screen flex flex-col rounded-tl-3xl rounded-bl-3xl pl-28">{children}</div>
      </div>
    </div>
  );
}
