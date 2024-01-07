import { ChangeEvent, FormEvent,useState } from "react";
import { useParams } from "react-router-dom";

const ProductManage = () => {

  const {params} = useParams()

  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [category, setCategory] = useState<string>("tshirt");
  const [details, setDetails] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [coupan, setCoupan] = useState<string>("");

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
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
    };
    console.log(data);
  };

  const handleImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
    }
  };

  return (
    <>
      <div className="p-6 flex justify-center items-center 2xl:mx-auto 2xl:container">
        <div className="flex flex-col justify-start items-start w-full space-y-9">
          <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 py-7 sm:py-0 xl:py-10 px-10 xl:w-full">
              <div className="flex flex-col justify-start items-start w-full space-y-4">
                <p className="text-xl md:text-2xl leading-normal text-gray-800 ">
                  Logitech K251 ID - {params}
                </p>
                <p className="text-base font-semibold leading-none text-gray-600">
                  $520.00
                </p>
                <p className="text-base font-semibold leading-none text-green-600 ">
                  10 Available
                </p>
              </div>
              <div className="mt-6 sm:mt-0 xl:my-10 xl:px-20 w-52 sm:w-96 xl:w-auto">
                <img
                  src="https://i.ibb.co/0GFzTP4/Rectangle-131.png"
                  alt="headphones"
                />
              </div>
            </div>
            
            <div className="p-8 bg-gray-100  flex flex-col lg:w-full xl:w-3/5">
            <form action="" onSubmit={handleSubmit}>
              <label
                className="mt-8 text-base leading-4 text-gray-800"
                htmlFor="productName"
              >
                Product Name
              </label>
              <div className="mt-2 flex-col">
                <input
                  className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                  type="text"
                  placeholder="Product Name"
                  id="productName"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <label
                className="mt-8 text-base leading-4 text-gray-800"
                htmlFor="stock"
              >
                Stock
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="number"
                    placeholder="stock"
                    id="stock"
                    onChange={(e) => setStock(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <label
                className="mt-8 text-base leading-4 text-gray-800"
                htmlFor="price"
              >
                Price
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="tel"
                    placeholder="Price"
                    id="price"
                    onChange={(e) => setPrice(parseInt(e.target.value))}
                  />
                </div>
              </div>
              <label
                className="mt-8 text-base leading-4 text-gray-800"
                htmlFor="size"
              >
                Size
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Size"
                    id="size"
                    onChange={(e) => setSize((e.target.value))}
                  />
                </div>
              </div>
              <label
                className="mt-8 text-base leading-4 text-gray-800"
                htmlFor="color"
              >
                Color
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="color"
                    id="color"
                    onChange={(e) => setColor((e.target.value))}
                  />
                </div>
              </div>
              <label
                className="mt-8 text-base leading-4 text-gray-800"
                htmlFor="coupan"
              >
                Coupan Code
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    type="text"
                    placeholder="Coupan Code"
                    id="coupan"
                    onChange={(e) => setCoupan((e.target.value))}
                  />
                </div>
              </div>
              <label
                className="mt-8 text-base leading-4 text-gray-800"
                id="category"
              >
                Category
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <select
                    className="block w-full p-4 mt-2 text-gray-700 bg-white border border-gray-300 focus:border-blue-500  focus:outline-none focus:ring"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="tshirt">T Shirt</option>
                    <option value="hoodie">Hoodies</option>
                    <option value="posters&stickers">Posters & Stickers</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
              </div>
              <label className="mt-8 text-base leading-4 text-gray-800 ">
                Product Image
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {image ? (
                        <img src={image} alt="" />
                      ) : (
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
                      )}

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
              <label
                className="mt-8 text-base leading-4 text-gray-800"
                htmlFor="details"
              >
                Details
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <textarea
                    className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600"
                    placeholder="details"
                    id="details"
                    onChange={(e) => setDetails((e.target.value))}
                  />
                </div>
              </div>

              <button className="mt-8 border border-transparent  bg-blue-500 text-white hover:text-blue-900 flex justify-center items-center py-4 rounded w-full" type="submit">
                <div>
                  <p className="text-base leading-4">Update</p>
                </div>
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductManage;
