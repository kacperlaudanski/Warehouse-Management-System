import Main from "./Main";
import Clock from "../components/Clock";
import Button from "../components/Button";
import { CircularProgress } from "@nextui-org/react";
import PieChart from "../components/PieChart";
import Overview from "../components/Dashboard/Overview"

export default function Dashboard() {
  return (
    <Main>
      <div className="w-full h-full bg-white rounded-tl-3xl rounded-bl-3xl p-8 overflow-hidden">
        <div className="w-full h-14 border-b-2 border-solid border-neutral-300">
          <h1 className="text-2xl tracking-wider">Dashboard</h1>
        </div>
        <div className="w-full h-full flex justify-around items-center">
          <div className="w-3/5 h-4/5 flex flex-col justify-between items-center">
            <Overview /> 
            <div className="w-full h-2/3 flex items-center rounded-2xl bg-neutral-100 mt-2 p-8">
              <div className="h-full flex flex-col justify-around items-start">
                <h2 className="text-2xl tracking-wider">
                  Warehouse Space Allocation by Category
                </h2>
                <Button variant='stockLevel'>Stock Level</Button>
              </div>
              <PieChart />
            </div>
          </div>
          <div className="w-2/6 h-4/5 flex flex-col justify-between items-center">
            <Clock /> 
            <div className="w-full h-2/3 mt-2 bg-blue-200 rounded-2xl bg-gradient-to-r from-blue-400 to-rose-300 flex flex-col items-center justify-around p-4">
              <h2 className="text-2xl tracking-wider text-white">
                Warehouse Fill
              </h2>
              <CircularProgress
                classNames={{ svg: "w-48 h-48", value: "text-2xl text-white" }}
                value={64}
                color="success"
                showValueLabel={true}
              />
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
