import { Pie } from "react-chartjs-2";
interface ChartData {
  chartData: any;
}

export default function PieChart({ chartData }: ChartData) {
  return (
    <div className="w-full h-full flex justify-around">
      <Pie
        data={chartData}
        options={{
          plugins: {
          },
        }}
      />
    </div>
  );
}
