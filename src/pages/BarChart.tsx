import BarGraph from "../components/BarGraph";
import Sidebar from "../components/Sidebar";

const BarChart = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <Sidebar>
      <div className="container px-6 py-8 mx-auto bg-white h-full sm:h-auto">
        <div className="chart p-12">
          <h2 className="bg-white mb-6 text-start font-bold text-2xl border-b-2 border-purple-500 max-w-fit">
            Bar Charts
          </h2>

          <div className="w-full my-4 text-center bg-white border border-gray-200 rounded-lg shadow">
            <BarGraph
              data1={[300, 144, 443, 655, 237, 755]}
              data2={[200, 44, 343, 555, 137, 655]}
              title1="Products"
              title2="Users"
              bgColor1={`hsl(260,50%,30%)`}
              bgColor2={`hsl(360,90%,90%)`}
            />
          </div>
        </div>

        <div className="chart p-12">
          <h2 className=" bg-white text-start mb-6 font-bold text-2xl border-b-2 border-purple-500 max-w-fit">
            Orders throughout the year{" "}
          </h2>

          <div className="w-full my-4 text-center bg-white border border-gray-200 rounded-lg shadow">
            <BarGraph
              data2={[]}
              title2=""
              bgColor2=""
              data1={[
                300, 144, 443, 655, 237, 755, 144, 443, 655, 237, 343, 212,
              ]}
              title1="Orders"
              bgColor1={`hsl(180,40%,50%)`}
              horizontal={true}
              labels={months}
            />
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default BarChart;
