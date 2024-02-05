import {
  ArcElement,
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface PieChartComponentProps {
  labels: string[];
  data: number[];
  bgColor: string[];
  cutout?: number | string;
  offset?: number[];
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({
  labels,
  data,
  bgColor,
    offset
}) => {
  const PieChartComponentData: ChartData<"pie", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: bgColor,
        borderWidth: 0,
        offset
      },
    ],
  };

  const pieOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },
    },
  };

  return <Pie data={PieChartComponentData} options={pieOptions} />;
};

export default PieChartComponent;
