import OverviewItem from "./OverviewItem";
import { useNavigate } from "react-router-dom";
import { dashboardOverviewData } from "../../data/dashboard-overview-data";

export default function Overview() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-1/3 grid grid-rows-1 grid-cols-3 grid-flow-col gap-2 mb-2">
      {" "}
      {dashboardOverviewData.map((item, index) => {
        return (
            <OverviewItem 
              key={index}
              overviewLabel={item.label}
              overviewInfo={item.info}
              redirect={() => navigate(item.link)}
              icon = {<item.icon />}
              iconColor={item.iconColor}
              iconBg={item.iconBg}
            />
        )
      })}
    </div>
  );
}
