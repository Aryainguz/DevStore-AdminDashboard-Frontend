import React from "react";
import { RiDashboardFill, RiShoppingBagFill } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdPeople } from "react-icons/io";
import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

interface dashboardArrayProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}

const DashboardArray: Array<dashboardArrayProps> = [
  {
    title: "Dashboard",
    icon: <RiDashboardFill />,
    link: "/devstore/admin",
  },
  {
    title: "Products",
    icon: <RiShoppingBagFill />,
    link: "/devstore/admin/products",
  },
  {
    title: "customers",
    icon: <IoMdPeople />,
    link: "/devstore/admin/customers",
  },
];

const chartArray: Array<dashboardArrayProps> = [
  {
    title: "Bar",
    icon: <FaChartBar />,
    link: "/admin/barchart",
  },
  {
    title: "Pie",
    icon: <FaChartPie />,
    link: "/admin/piechart",
  },
  {
    title: "Line",
    icon: <FaChartLine />,
    link: "/admin/linechart",
  },
];

const Sidebar: React.FC<Props> = ({ children }) => {
  const location = useLocation().pathname;

  const toggleSidebar = () => {
    const element = document.getElementById("sidebar");
    element?.classList.toggle("hidden");
  };

  return (
    <>
        <div className="flex h-screen bg-gray-200">

          <div
            className="fixed hidden lg:block inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-gray-900 lg:translate-x-0 lg:static lg:inset-0"
            id="sidebar"
          >
            <div className="flex items-center mt-8 justify-normal p-6">
              <div className="flex">
                <span className="text-2xl font-semibold text-white">
                  DevStore
                </span>
              </div>
            </div>
            <nav className="mt-10">
              <h3 className="flex items-center px-4 py-2 text-xs font-semibold text-gray-600 uppercase">
                Dashboard
              </h3>

              {DashboardArray.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.link}
                    className={`flex items-center px-6 py-2 mt-4 text-gray-100 ${
                      location == item.link && "bg-gray-700 bg-opacity-25"
                    }`}
                    onClick={toggleSidebar}
                  >
                    {item.icon}
                    <span className="mx-3">{item.title}</span>
                  </Link>
                );
              })}
            </nav>

            <nav className="mt-10">
              <h3 className="flex items-center px-4 py-2 text-xs font-semibold text-gray-600 uppercase">
                CHARTS
              </h3>
              {chartArray.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.link}
                    className={`flex items-center px-6 py-2 mt-4 text-gray-100 ${
                      location == item.link && "bg-gray-700 bg-opacity-25"
                    }`}
                    onClick={toggleSidebar}
                  >
                    {item.icon}
                    <span className="mx-3">{item.title}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

           
           
           <RiMenu2Fill
                className="fixed z-30 block w-6 h-6 text-gray-900 cursor-pointer lg:hidden mr-4 top-5 right-4"
                onClick={toggleSidebar}
              />



            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              {children}
            </main>
          </div>
    </>
  );
};

export default Sidebar;
