import LineChartComponent from '../components/LineChartComponent';
import Sidebar from '../components/Sidebar';

const LineChart = () => {
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
            Line Charts
          </h2>

          <div className="w-full my-4 text-center bg-white border border-gray-200 rounded-lg shadow">
            <LineChartComponent
              data={[300, 144, 443, 655, 237, 755, 144, 443, 655, 237, 343, 212]}
              label="Users"
              bgColor={`hsl(180,40%,50%)`}
              borderColor={`hsl(180,40%,50%)`}
              labels={months}
            />
          </div>
          <h2 className='
              text-xl
                text-center
                font-normal
                text-gray-500
                mt-4
                bg-white
           '>
            ACTIVE USERS
           </h2>
           <br />
           <div className="w-full my-4 text-center bg-white border border-gray-200 rounded-lg shadow">
            <LineChartComponent
              data={[300, 144, 443, 655, 237, 755, 144, 443, 655, 237, 343, 212]}
              label="Products"
              bgColor={`hsl(120,40%,50%)`}
              borderColor={`hsl(130,40%,50%)`}
              labels={months}
            />
          </div>
          <h2 className='
              text-xl
                text-center
                font-normal
                text-gray-500
                mt-4
                bg-white
           '>
            Total Products (SKUs)
           </h2>
           <br />
           <div className="w-full my-4 text-center bg-white border border-gray-200 rounded-lg shadow">
            <LineChartComponent
              data={[300, 144, 443, 655, 237, 755, 144, 443, 655, 237, 343, 212]}
              label="Products"
              bgColor={`hsl(90,40%,50%)`}
              borderColor={`hsl(100,40%,50%)`}
              labels={months}
            />
          </div>
          <h2 className='
              text-xl
                text-center
                font-normal
                text-gray-500
                mt-4
                bg-white
           '>
            Total Revenue 
           </h2>
        </div>
      </div>
    </Sidebar>
  )
}

export default LineChart