import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

interface BarGraphProps {
  horizontal?: boolean;
  data1: Array<number>;
  data2: Array<number>;
  title1: string;
  title2: string;
  bgColor1: string;
  bgColor2: string;
  labels?: string[]; // Array<string> and string[] are the same and Array<number> and number[] are the same and valid
}

const BarGraph: React.FC<BarGraphProps> = ({
  horizontal = false, //by default vertical bar graph so horizontal is false
  data1,
  data2,
  title1,
  title2,
  bgColor1,
  bgColor2,
  labels = months, // by default labels are months
}) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: true,  // this is color box on top of graph indicating which color is for which data
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor: bgColor1,
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage:0.4
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bgColor2,
        barThickness:"flex",
        barPercentage:1,
        categoryPercentage:0.4
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarGraph;
