import Main from "./Main";
import Clock from "../components/Clock";
import Button from "../components/Button";
import { CircularProgress } from "@nextui-org/react";
import PieChart from "../components/PieChart";
import Overview from "../components/Dashboard/Overview"

export default function Dashboard() {
  return (
    <Main>
      <div className="w-full min-h-screen bg-white rounded-tl-3xl rounded-bl-3xl p-8 overflow-hidden flex flex-col items-center justify-center">
        <div className="max-w-screen-2xl w-full h-14 border-b-2 border-solid border-neutral-300">
          <h1 className="text-2xl tracking-wider">Dashboard</h1>
        </div>
        <div className="max-w-screen-2xl w-full h-full flex lg:flex-row sm:flex-col-reverse justify-around items-center">
          <div className="sm:w-full lg:w-3/5 sm:mt-8 lg:mt-0 h-4/5 flex flex-col justify-center items-center">
            <Overview /> 
            <div className="w-full max-h-96 lg:h-4/5 flex items-center rounded-2xl bg-neutral-100 mt-2 p-8">
              <div className="h-full flex flex-col justify-around items-start">
                <h2 className="text-2xl tracking-wider">
                  Warehouse Space Allocation by Category
                </h2>
                <Button variant='stockLevel'>Stock Level</Button>
              </div>
              <PieChart />
            </div>
          </div>
          <div className="sm:w-full lg:w-2/6 h-4/5 flex flex-col justify-center items-center">
            <Clock /> 
            <div className="w-full max-h-96 h-4/5 mt-2 bg-blue-200 rounded-2xl bg-gradient-to-r from-blue-400 to-rose-300 flex flex-col items-center justify-around p-4">
              <h2 className="text-2xl tracking-wider text-white">
                Warehouse Fill
              </h2>
              <CircularProgress
                classNames={{ svg: "w-48 h-auto", value: "text-2xl text-white" }}
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
