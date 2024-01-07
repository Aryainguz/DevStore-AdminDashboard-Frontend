import React from "react";
import { RiDashboardFill, RiShoppingBagFill } from "react-icons/ri";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdBarcode, IoMdPeople } from "react-icons/io";
import { FaChartBar, FaChartPie, FaChartLine,FaMoneyBill } from "react-icons/fa";
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
  {
    title: "Transactions",
    icon: <FaMoneyBill />,
    link: "/devstore/admin/transactions",
  },
  {
    title: "Coupons",
    icon: <IoMdBarcode />,
    link: "/devstore/admin/coupans",
  },
];

const chartArray: Array<dashboardArrayProps> = [
  {
    title: "Bar",
    icon: <FaChartBar />,
    link: "/devstore/admin/charts/bar",
  },
  {
    title: "Pie",
    icon: <FaChartPie />,
    link: "/devstore/admin/charts/pie",
  },
  {
    title: "Line",
    icon: <FaChartLine />,
    link: "/devstore/admin/charts/line",
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
                <Link to={'/devstore/admin'}>
                <span className="text-2xl font-semibold text-white">
                  Admin.
                </span>
                </Link>
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

          <div className="flex flex-col flex-1 overflow-hidden">
  <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-indigo-600">
    <div className="flex items-center">
     
      <div className="relative mx-4 lg:mx-0">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none">
            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            </path>
          </svg>
        </span>
        <input className="w-full m-auto h-10 border-2 pl-10 pr-4 rounded-md form-input sm:w-64 focus:border-violet-600" type="text" placeholder="Search" />
      </div>
    </div>
  </header>




       
           <RiMenu2Fill
                className="fixed z-30 block w-6 h-6 text-gray-900 cursor-pointer lg:hidden mr-4 top-5 right-4"
                onClick={toggleSidebar}
              />

            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              {children}
            </main>
          </div>
          </div>
    </>
  );
};

export default Sidebar;
