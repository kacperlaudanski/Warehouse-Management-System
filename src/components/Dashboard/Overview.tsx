import OverviewItem from "./OverviewItem";
import { useNavigate } from "react-router-dom";
import { dashboardOverviewData } from "../../data/dashboard-overview-data";

export default function Overview() {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:max-h-40 sm:h-full h-1/3 grid lg:grid-rows-1 lg:grid-cols-3 grid-flow-col sm:grid-rows-3 sm:grid-cols-1 gap-2 mb-2">
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
