import React from 'react'
import { IoMdPeople } from 'react-icons/io'

interface statCardProps {
  title: string,
  icon: React.ReactNode,
  value: number,
  color: string
}

const cardArray:Array<statCardProps> = [
  {
    title: "Customers",
    icon: <IoMdPeople />,
    value: 99,
    color: "bg-purple-500",
  }
];

const Dashboard = () => {
  return (
   <>
      <div className="container px-6 py-8 mx-auto">
          <h3 className="text-3xl font-medium text-gray-700 p-6">Dashboard</h3>
          <div className="mt-4">
            <div className="flex flex-wrap -mx-6">


              {
                cardArray.map((card, index) => (
                  <div className="w-full px-6 sm:w-1/2 xl:w-1/3" key={index}>
                    <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                      <div className={`p-3 rounded-full ${card.color} bg-opacity-75 text-white`}>
                        {card.icon}
                      </div>
                      <div className="mx-5">
                        <h4 className="text-2xl font-semibold text-gray-700">{card.value}</h4>
                        <div className="text-gray-500">{card.title}</div>
                      </div>
                    </div>
                  </div>
                ))
              }
              </div>
          </div>
          <div className="mt-8">
          </div>
          <div className="flex flex-col mt-8">
            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                {/* table  */}
              </div>
            </div>
          </div>
        </div>
   </>
  )
}



export default Dashboard