import { ReactElement, useCallback, useMemo, useState } from "react";
import TableHOC from "./TableHOC";
import { Column } from "react-table";
import img from '../assets/download (4).jpg'
import { Link } from "react-router-dom";

interface DataType {
  id: number;
  photo: ReactElement;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const dummyData: DataType[] = [
  {
    id: 1,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'} className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 2,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 3,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 4,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 5,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 6,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 7,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 1,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 2,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 3,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 4,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 5,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 6,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  },
  {
    id: 7,
    photo: <img src={img} alt="product" style={{height:"70px"}}/>,
    price: 100,
    stock: 10,
    action: <Link to={'/devstore/admin/product/:id'}  className="btn p-2 h-9 w-20 bg-blue-500 text-white rounded-lg">Manage</Link>,
  }
];

const ProductTable = () => {
  const [Productdata, setProductData] = useState<DataType[]>([]);
  useMemo(() => {
    setProductData(dummyData);
  }, [dummyData]);

  const Table = useCallback(() => {
    return TableHOC<DataType>(columns, Productdata, "All Products")();
  }, [Productdata]);

  // useCallback is used to prevent unnecessary re-rendering of component and return a memoized version of the function that only changes if one of the dependencies has changed
  // useMemo is used to prevent unnecessary re-rendering of component and return a memoized value that only changes when one of the dependencies has changed
  // useMemo is used when we want to return a value and useCallback is used when we want to return a function
  //use () after TableHOC to return a component since TableHOC is HOC component and returns a component itself so call it by () to return table

  return <div className="main p-6">{Table()}</div>;
};

export default ProductTable;
