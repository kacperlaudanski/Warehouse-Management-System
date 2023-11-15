import Main from "./Main";
import { ArrowRight, List, Truck, Undo2 } from "lucide-react";
import Button from "../components/Button";
import { CircularProgress } from "@nextui-org/react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import PieChart from "../components/PieChart";
import { pieChartData } from "../data/pie-chart-data";
import { useState } from "react";

Chart.register(CategoryScale);

export default function Dashboard() {
  const [chartData, setChartData] = useState({
    labels: pieChartData.map((data) => data.category),
    datasets: [
      {
        data: pieChartData.map((data) => data.userGain),
        backgroundColor: [
          "#abb2fc",
          "#abdafc",
          "#d0f0c0",
          "#effeee",
          "#367588",
        ],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  });

  const [date, setDate] = useState(new Date()); 
  setInterval(() => {
    setDate(new Date())
  }, 1000); 
  
  function currentDate(){
    return date.toLocaleDateString('en-US', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}); 
  }

  function currentTime(){
    return date.toLocaleTimeString('en-US')
  }

  return (
    <Main>
      <div className="w-full h-full bg-neutral-100 rounded-tl-3xl rounded-bl-3xl p-8 overflow-hidden">
        <div className="w-full h-14 border-b-2 border-solid border-neutral-300">
          <h1 className="text-2xl tracking-wider">Dashboard</h1>
        </div>
        <div className="w-full h-full flex justify-around items-center">
          <div className="w-3/5 h-4/5 flex flex-col justify-between items-center">
            <div className="w-full h-2/4 grid grid-rows-1 grid-cols-3 grid-flow-col gap-2 mb-2">
              <div className="h-full flex bg-white rounded-2xl p-4">
                <div className="w-4/5 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-emerald-200 flex items-center opacity-70 justify-center text-2xl mb-4">
                    <List className="text-green-900" />
                  </div>
                  <span className="font-medium text-3xl text-neutral-800">
                    25
                  </span>
                  <h2 className="text-md tracking-wider text-neutral-400">
                    Recent orders
                  </h2>
                </div>
                <div className="flex items-start">
                  <Button variant="ghost" icon="dashboardIcon">
                    <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="h-full flex bg-white rounded-2xl p-4">
                <div className="w-4/5 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-red-200 flex items-center opacity-70 justify-center text-2xl mb-4">
                    <Undo2 className="text-red-900" />
                  </div>
                  <span className="font-medium text-3xl text-neutral-800">
                    10
                  </span>
                  <h2 className="text-md tracking-wider text-neutral-400">
                    Returns
                  </h2>
                </div>
                <div className="flex items-start">
                  <Button variant="ghost" icon="dashboardIcon">
                    <ArrowRight />
                  </Button>
                </div>
              </div>
              <div className="h-full flex bg-white rounded-2xl p-4">
                <div className="w-4/5 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center opacity-70 justify-center text-2xl mb-4">
                    <Truck className="text-blue-900" />
                  </div>
                  <span className="font-medium text-2xl text-neutral-800">
                    15.11.2023
                  </span>
                  <h2 className="text-md tracking-wider text-neutral-400">
                    Next delivery
                  </h2>
                </div>
                <div className="flex items-start">
                  <Button variant="ghost" icon="dashboardIcon">
                    <ArrowRight />
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex items-center justify-around rounded-2xl bg-neutral-700 mt-2 p-8">
              <div className="h-full flex flex-col justify-around items-center">
                <h2 className="text-2xl text-neutral-200 tracking-wider">
                  Warehouse Space Allocation by Category
                </h2>
                <Button variant='stockLevel'>Stock Level</Button>
              </div>
              <PieChart chartData={chartData} />
            </div>
          </div>
          <div className="w-2/6 h-4/5 flex flex-col justify-between items-center">
            <div className="w-full h-2/6 mb-2 bg-white rounded-2xl flex flex-col items-end justify-center text-right p-2">
              <div className="w-full h-1/5 text-lg m-2 text-neutral-400">{currentDate()}</div>
              <div className="w-full h-1/5 text-6xl m-2">{currentTime()}</div>
            </div>
            <div className="w-full h-4/6 mt-2 bg-blue-200 rounded-2xl bg-gradient-to-r from-blue-400 to-rose-300 flex flex-col items-center justify-around p-4">
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
