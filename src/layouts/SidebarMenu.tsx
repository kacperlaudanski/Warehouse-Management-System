import { Gauge } from "lucide-react";
import Button from "../components/Button";


interface Sidebar {
  isSidebarShown: boolean;
}
export default function SidebarMenu({ isSidebarShown }: Sidebar) {
  return (
    <aside
      className={`${
        isSidebarShown ? `w-52` : `w-28`
      } transition-all duration-300 ease-in-out pt-24 px-5 h-screen bg-neutral-300 relative t-20 z-0`}
    >
      <Button sidebar={isSidebarShown ? 'extended' : 'rolled'}>
        <Gauge />
        {isSidebarShown && <h3>Dashboard</h3>}
      </Button>
    </aside>
  );
}
