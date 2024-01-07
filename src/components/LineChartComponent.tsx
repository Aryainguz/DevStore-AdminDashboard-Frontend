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
  PointElement,
  LineElement,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler
);

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

interface LineChartComponentProps {
  data: Array<number>;
  label: string;
  bgColor: string;
  borderColor : string;
  labels?: string[];  // Array<string> and string[] are the same and Array<number> and number[] are the same and valid 
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({
    data,
    label,
    bgColor,
    borderColor,
  labels = months, // by default labels are months
}) => {
  const options: ChartOptions<"line"> = {
    responsive: true,
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

  const LineChartdata: ChartData<"line", number[], string> = {
    labels,
    datasets: [
      {
        fill:true,
        label,
        data,
        backgroundColor:bgColor,
        borderColor
      },
    ],
  };

  return <Line options={options} data={LineChartdata} />;
};

export default LineChartComponent;
