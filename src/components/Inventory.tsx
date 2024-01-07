import React from "react";

const InventoryData =  [
        {
            "id": 1,
            "name": "Laptop",
            "quantity": "40"
        },
        {
            "id": 2,
            "name": "Mobile",
            "quantity": "50"
        },
        {
            "id": 3,
            "name": "Tablet",
            "quantity": "60"
        }
    ]


const Inventory = () => {
  return (
    <>
      <div className="w-full sm:w-[210px] lg:w-[20vw] mt-6 sm:mt-0 ml-auto sm:ml-20 max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 ">
           Inventory
          </h5>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 "
          >

            {
                InventoryData.map((item, index) => (
                    <li className="py-3 sm:py-4" key={index}>
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                
                            </div>
                            <div className="flex-1 min-w-0 ms-4">
                                <p className="text-sm font-medium text-gray-900 truncate ">
                                    {item.name}
                                </p>
                                <div className="bg-gray-300 w-[140px] rounded-lg h-2">
                                <p className="text-sm mt-2 text-gray-500 rounded-lg h-2 bg-green-500 truncate" style={{width:`${item.quantity}%`}}>
                                   
                                   </p>
                                </div>
                               
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                {item.quantity}
                            </div>
                        </div>
                    </li>
                ))
            }


           


          </ul>
        </div>
      </div>
    </>
  );
};

export default Inventory;
