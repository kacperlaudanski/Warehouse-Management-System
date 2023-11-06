import {
    Gauge,
    List,
    Warehouse,
    Undo2,
    Truck,
    PackageOpen,
  } from "lucide-react";

export const sections = [
    {
      name: "Dashboard",
      icon: Gauge,
      isButtonExpandable: false,
    },
    {
      name: "Orders",
      icon: List,
      isButtonExpandable: true,
      expandedOptions: ['Preview', 'History'], 
    },
    {
      name: "Warehouse",
      icon: Warehouse,
      isButtonExpandable: true,
      expandedOptions: ['Preview', 'Stock Level', 'Pending Area'], 
    },
    {
      name: "Returns",
      icon: Undo2,
      isButtonExpandable: false,
    },
    {
      name: "Deliveries",
      icon: PackageOpen,
      isButtonExpandable: false,
    },
    {
      name: "Suppliers",
      icon: Truck,
      isButtonExpandable: false,
    },
  ];