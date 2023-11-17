import { List, Truck, Undo2 } from "lucide-react";

export const dashboardOverviewData = [
    {
        label: 'Recent orders', 
        info: '25',
        icon: List,
        iconBg: 'bg-emerald-200', 
        iconColor: 'text-green-900', 
        link: '../orders/preview' 
    },
    {
        label: 'Returns', 
        info: '10',
        icon: Undo2,
        iconBg: 'bg-red-200', 
        iconColor: 'text-red-900', 
        link: '../returns' 
    },
    {
        label: 'Next delivery', 
        info: '17.11.2023',
        icon: Truck,
        iconBg: 'bg-blue-200', 
        iconColor: 'text-blue-900', 
        link: '../deliveries' 
    }
]