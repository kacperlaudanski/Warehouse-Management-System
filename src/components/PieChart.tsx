import { Pie } from "react-chartjs-2";
interface ChartData {
  chartData: any;
}

export default function PieChart({ chartData }: ChartData) {
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
