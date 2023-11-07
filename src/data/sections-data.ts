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
    expandedOptions: [
      { name: "Preview", link: "../orders/preview" },
      { name: "History", link: "../orders/history" },
    ],
  },
  {
    name: "Warehouse",
    icon: Warehouse,
    isButtonExpandable: true,
    expandedOptions: [
      { name: "Preview", link: "../warehouse/preview" },
      { name: "Stock Level", link: "../warehouse/stock-level" },
      { name: "Pending Area", link: "../warehouse/pending-area" },
    ],
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
