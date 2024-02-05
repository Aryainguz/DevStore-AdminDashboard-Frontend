import DoughnutChart from '../components/DougnutChart'
import PieChartComponent from '../components/PieChartComponent'
import Sidebar from '../components/Sidebar'

const categories = [
    {
        heading:'T Shirts',
        value: 30,
        color:'#001B79'
    },
    {
        heading:'Hoodies',
        value: 20,
        color:'#1640D6'
    },
    {
        heading:'Accesories',
        value: 50,
        color:'#ED5AB3'
    },
    {
        heading:'Stickers & Posters',
        value: 50,
        color:'#FF90C2'
    },
    ]

const PieChart = () => {
  return (
    <Sidebar>
        <div className="bg-white h-[170vh]">
        <div className="container px-6 pt-8 mx-auto bg-white h-[100vh] sm:h-auto">
        <div className="chart p-12">
          <h2 className="bg-white mb-6 text-start font-bold text-2xl border-b-2 border-purple-500 max-w-fit">
            Pie Charts
          </h2>
          <div className="my-4 bg-white text-center rounded-lg ">
            <div className="piechart w-[250px]  mx-auto">
            <PieChartComponent labels={['Processing',"Shipped","Delivered"]} data={[10,11,13]} bgColor={[`hsl(110,80%,,80%)`,`hsl(110,80%,,50%)`,`hsl(110,40%,,50%)`]} offset={[0,0,0,50]} />
            </div>
            <h2 className='
              text-xl
              mt-4
                text-center
                font-normal
                text-gray-500
           '>
            ORDER FULLFILLMENT RATIO
           </h2>
          </div>

          <div className="mt-12 bg-white text-center rounded-lg">
            <div className="piechart w-[310px]  mx-auto bg-white">
           <DoughnutChart labels={categories.map(i=>i.heading)}  data={categories.map(i=>i.value)} 
           bgColor={categories.map(i=>i.color)} legends={false} offset={[0,0,0,80]}/>
           
            </div>
            <h2 className='
              text-xl
                text-center
                font-normal
                text-gray-500
                mt-4
                bg-white
           '>
         PRODUCT CATEGORIES RATIO
           </h2>
          </div>
          <div className="mt-12 bg-white text-center rounded-lg">
            <div className="piechart w-[310px]  mx-auto bg-white">
        <DoughnutChart labels={["IN STOCK","OUT OF STOCK"]}  data={[40,10]} 
           bgColor={["#F8E559",'#3B3486']} legends={false} offset={[0,80]}/>
           
            </div>
            <h2 className='
              text-xl
                text-center
                font-normal
                text-gray-500
                mt-4
                bg-white
           '>
            STOCK AVAILABILITY
           </h2>
          </div>
        </div>
      </div>
        </div>
       
    </Sidebar>
  )
}

export default PieChart