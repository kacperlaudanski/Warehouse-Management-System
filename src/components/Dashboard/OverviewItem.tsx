import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import Button from "../Button";

interface OverviewItem {
  overviewInfo: string;
  overviewLabel: string;
  icon: ReactNode;
  iconBg: string; 
  iconColor: string; 
  redirect: () => void;
}

export default function OverviewItem({
  overviewInfo,
  overviewLabel,
  icon,
  iconBg, 
  redirect,
}: OverviewItem) {

  return (
    <div className="h-full flex bg-neutral-100 rounded-2xl p-4">
      <div className="w-4/5 h-full flex flex-col justify-between">
        <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center opacity-70 justify-center text-2xl mb-4`}>
          {icon}
        </div>
        <span className="font-medium text-3xl text-neutral-800">
          {overviewInfo}
        </span>
        <h2 className="text-md tracking-wider text-neutral-400">
          {overviewLabel}
        </h2>
      </div>
      <div className="flex items-start">
        <Button variant="ghost" icon="dashboardIcon" onClick={redirect}>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
