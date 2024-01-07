import React, { FormEvent, useState } from "react";

const NewProduct = () => {

    const [productName, setProductName] = useState<string>('');
    const [price, setPrice] = useState<number>();
    const [stock, setStock] = useState<number>();
    const [category, setCategory] = useState<string>('tshirt');
    const [details, setDetails] = useState<string>('');
    const [image, setImage] = useState<string>('');
    const [size, setSize] = useState<string>('');
    const [color, setColor] = useState<string>('');
    const [coupan, setCoupan] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       const data = {
              productName,
              price,
              stock,
              category,
              details,
              image,
                size,
                color,
                coupan
         }
            console.log(data)   
    }

    const handleImg = (e: React.ChangeEvent<HTMLInputElement>) => { 
        if (e.target.files) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
              setImage(reader.result as string);
            };
          }
    }
  return (
    <>
      <div className="pb-12 px-6">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md mt-20">
          <h1 className="text-xl font-bold text-black capitalize">
            Add New Product
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-black"
                  htmlFor="productName"
                >
                    Product Name
                </label>
                <input
                  id="productName"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  className="text-black"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  id="price"
                  type="tel"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"
                  onChange={(e) => setPrice(parseInt(e.target.value))}
                    required
                />
              </div>
              <div>
                <label
                  className="text-black"
                  htmlFor="size"
                >
                  Size
                </label>
                <input
                  id="size"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"
                  onChange={(e) => setSize((e.target.value))}
                    required
                />
              </div>
              <div>
                <label
                  className="text-black"
                  htmlFor="color"
                >
                  Color
                </label>
                <input
                  id="color"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"
                  onChange={(e) => setColor((e.target.value))}
                    required
                />
              </div>
              <div>
                <label
                  className="text-black"
                  htmlFor="stock"
                >
                  Stock
                </label>
                <input
                  id="stock"
                  type="number"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"
                    onChange={(e) => setStock(parseInt(e.target.value))}
                    required
                />
              </div>
             
              <div>
                <label
                  className="text-black"
                  htmlFor="category"
                >
                  Category
                </label>
                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"
                onChange={(e) => setCategory(e.target.value)}
                required
                >
                  <option value="tshirt">T Shirt</option>
                  <option value="hoodie">Hoodies</option>
                  <option value="posters&stickers">Posters & Stickers</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>
            
              <div>
                <label
                  className="text-black"
                  htmlFor="coupan"
                >
                  Coupan Code
                </label>
                <input
                  id="coupan"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"
                    onChange={(e) => setCoupan(e.target.value)}
                    required
                />
              </div>
              <div>
                <label
                  className="text-black"
                  htmlFor="details"
                >
                 Details
                </label>
                <textarea
                  id="details"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500  focus:outline-none focus:ring"
                  defaultValue={""}
                    onChange={(e) => setDetails(e.target.value)}
                    required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black">
                  Product Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {
                        image ? <img src={image} alt=""/> :
                         <svg
                         className="mx-auto h-12 w-12 text-black"
                         stroke="currentColor"
                         fill="none"
                         viewBox="0 0 48 48"
                         aria-hidden="true"
                       >
                         <path
                           d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                           strokeWidth={2}
                           strokeLinecap="round"
                           strokeLinejoin="round"
                         />
                       </svg>
                    }
                                          <div className="flex text-sm text-gray-600">
                         <label
                           htmlFor="file-upload"
                           className="relative cursor-pointer bg-white rounded-md font-medium text-black-600 hover:text-black-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-white-500"
                         >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                            onChange={handleImg}
                            required
                        />
                      </label>
                      <p className="pl-1 text-black">or drag and drop</p>
                    </div>
                    <p className="text-xs text-black">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-gray-600">
                Add
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default NewProduct;
