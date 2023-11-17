import { Pie } from "react-chartjs-2";
import { pieChartData } from "../data/pie-chart-data";
import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

export default function PieChart() {
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
  return (
    <div className="flex justify-around">
      <Pie
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              boxWidth: 15, 
              boxHeight: 15, 
              titleMarginBottom: 12,
              padding: 20,
              borderColor: '#000',
              callbacks: {
                label: (context) => {
                  const label = context.label || "";
                  if (label) {
                    return label + ": " + context.parsed.toFixed(1) + "%";
                  }
                  return "";
                },
              },
            },
          },
        }}
      />
    </div>
  );
}
