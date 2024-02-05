import React from "react";
import { BiMaleFemale } from "react-icons/bi";
import { FaMoneyBill } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { IoMdPeople, IoMdReorder } from "react-icons/io";
import BarGraph from "./BarGraph";
import DashboardTable from "./DashboardTable";
import DoughnutChart from "./DougnutChart";
import Inventory from "./Inventory";
import { data } from './dummyTransaction';


interface statCardProps {
  title: string;
  icon: React.ReactNode;
  value: number;
  color: string;
  bgcolor: string;
  amount: boolean;
  percentage: number;
}

const cardArray: Array<statCardProps> = [
  {
    title: "Customers",
    icon: <IoMdPeople />,
    value: 123,
    color: "bg-blue-500 text-blue-500",
    amount: false,
    percentage: 78,
    bgcolor: "#3B82F6",
  },
  {
    title: "Orders",
    icon: <IoMdReorder />,
    value: 105,
    color: "bg-purple-500 text-purple-500",
    amount: false,
    percentage: -15,
    bgcolor: "#7C3AED",
  },
  {
    title: "Revenue",
    icon: <FaMoneyBill />,
    value: 20000,
    color: "bg-yellow-500 text-yellow-500",
    amount: true,
    percentage: 67,
    bgcolor: "#f59e0b",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="container px-6 py-8 mx-auto">
        <h3 className="text-3xl font-medium text-gray-700 p-6 pt-16 sm:pt-6 border-b-2 border-violet-500 w-fit leading-3">
          Dashboard
        </h3>
        <div className="mt-4">
          <div className="flex flex-wrap -mx-6 pt-6">
            {cardArray.map((card, index) => (
              <div className="w-full pb-2 px-6 sm:w-1/2 xl:w-1/3" key={index}>
                <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                  <div
                    className={`p-3 rounded-full bg-opacity-75 text-white`}
                    style={{ backgroundColor: `${card.bgcolor}` }}
                  >
                    {card.icon}
                  </div>
                  <div className="mx-5">
                    <h4 className="text-2xl font-semibold text-gray-700">
                      {card.amount ? `$${card.value}` : card.value}
                    </h4>
                    <div className="text-gray-500">{card.title}</div>
                    {card.percentage > 0 ? (
                      <span className="text-green-500">
                        <HiTrendingUp /> +{card.percentage}%
                      </span>
                    ) : (
                      <span className="text-red-500">
                        <HiTrendingDown />
                        {card.percentage}%
                      </span>
                    )}
                  </div>
                  <div
                    className={`mx-2 w-[70px] h-[70px] rounded-full flex justify-center items-center ${card.color}`}
                    style=// total value is 360 so formula is percent/100*360
                    {{
                      background: `conic-gradient(
                       ${card.bgcolor} ${
                        (Math.abs(card.percentage) / 100) * 360
                      }deg,  
                         rgba(255, 255, 255) 0
                       )`,
                    }}
                  >
                    <div className="flex justify-center items-center w-[55px] h-[55px] rounded-full bg-white">
                      {card.percentage}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <div className="px-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="block sm:flex min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">

              <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow">
                  <h5 className="leading-none text-xl text-gray-500 ">
                    REVENUE AND TRANSACTIONS
                  </h5>
                <BarGraph data1={[300,144,443,655,237,755]} data2={[200,44,343,555,137,655]} title1="Revenue" title2="Transaction" bgColor1="rgb(0,115,255" bgColor2="rgb(53,162,235,0.8)" />
              </div>

              <Inventory />
            </div>
          </div>
        </div>
      </div>
      <div className="block sm:flex min-w-full p-6 overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">

      <div className="w-[330px] p-4 text-center bg-white border border-gray-200 rounded-lg shadow">
                  <h5 className="leading-none text-xl text-gray-500 pb-4">
                    Gender Ratio
                  </h5>
                  <DoughnutChart labels={["Female","Male"]} data={[12,19]} bgColor={["hsl(3400,82%,56%","rgba(53,162,235,0.8"]}  />
            </div>

            {/* //font size increases size of icon not width or height  */}
            <div className="relative bottom-52 right-[-157px] text-2xl font-extralight">
              <BiMaleFemale /></div>
            
            <div className="w-[330px] sm:w-[410px] lg:w-[500px] xl:w-full h-full">
            <DashboardTable data={data} />
            </div>
      </div>
    </>
  );
};

export default Dashboard;
