import { Doughnut } from "react-chartjs-2";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface DoughnutChartProps {
  labels: string[];
  data: number[];
  bgColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  labels,
  data,
  bgColor,
  cutout,
  legends = true,
  offset,
}) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: bgColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const doughnutOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };

  return <Doughnut data={doughnutData} options={doughnutOptions} />;
};

export default DoughnutChart;
