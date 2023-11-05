import { useEffect, useState } from "react";
import {
  Gauge,
  List,
  Warehouse,
  Undo2,
  Truck,
  PackageOpen,
  LucideIcon,
} from "lucide-react";
import Button from "../components/Button";

interface Sidebar {
  isSidebarShown: boolean;
}
export default function SidebarMenu({ isSidebarShown }: Sidebar) {
  const [isDashboardActive, setDashboardActive] = useState(false);
  const [isOrdersActive, setOrdersActive] = useState(false);
  const [isWarehouseActive, setWarehouseActive] = useState(false);
  const [isReturnsActive, setReturnsActive] = useState(false);
  const [isDeliveryActive, setDeliveryActive] = useState(false);
  const [isSuppliersActive, setSuppliersActive] = useState(false);
  const sections = [
    {
      name: "Dashboard",
      icon: Gauge,
      state: isDashboardActive,
      setState: setDashboardActive,
    },
    {
      name: "Orders",
      icon: List,
      state: isOrdersActive,
      setState: setOrdersActive,
    },
    {
      name: "Warehouse",
      icon: Warehouse,
      state: isWarehouseActive,
      setState: setWarehouseActive,
    },
    {
      name: "Returns",
      icon: Undo2,
      state: isReturnsActive,
      setState: setReturnsActive,
    },
    {
      name: "Deliveries",
      icon: PackageOpen,
      state: isDeliveryActive,
      setState: setDeliveryActive,
    },
    {
      name: "Suppliers",
      icon: Truck,
      state: isSuppliersActive,
      setState: setSuppliersActive,
    },
  ];

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
            variant={window.location.pathname === `/${section.name.toLowerCase()}` ? "active" : null}
            sidebar={isSidebarShown ? "extended" : "rolled"}
            onClick={() => {
              window.location.pathname = section.name.toLowerCase();
            }}
          >
            <section.icon />
            {isSidebarShown && <h3>{section.name}</h3>}
          </Button>
        );
      })}
    </aside>
  );
}
