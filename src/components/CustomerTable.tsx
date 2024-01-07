import { ReactElement, useCallback, useMemo, useState } from "react";
import TableHOC from "./TableHOC";
import { Column } from "react-table";
import img from '../assets/download (4).jpg'
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

interface DataType {
  id: number;
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "ID",
        accessor: "id",
      },
    {
        Header: "Avatar",
        accessor: "avatar",
      },
    {
        Header: "Name",
        accessor: "name"
    }
    ,
    {
        Header: "Email",
        accessor: "email"
    },
    {
        Header:"Gender",
        accessor:"gender"
    },
    {
        Header: "Action",
        accessor: "action",
      },
];

const dummyData: DataType[] = [
    {
        id: 1,
        avatar: <img src={img} alt="product" className="w-11 h-11" style={{borderRadius:"50%"}}/>,
        name: "John Doe",
        email: "jhon@gmail.com",
        gender:"male",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
    {
        id: 2,
        avatar: <img src={img} alt="product" className="w-11 h-11" style={{borderRadius:"50%"}}/>,
        name: "John Doe",
        email: "jhon@gmail.com",
        gender:"male",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },   {
        id: 3,
        avatar: <img src={img} alt="product" className="w-11 h-11" style={{borderRadius:"50%"}}/>,
        name: "John Doe",
        email: "jhon@gmail.com",
        gender:"male",
        action: <Link to={'/devstore/admin/adrrst'} className="btn  text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },   {
        id: 4,
        avatar: <img src={img} alt="product" className="w-11 h-11" style={{borderRadius:"50%"}}/>,
        name: "John Doe",
        email: "jhon@gmail.com",
        gender:"male",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },   {
        id: 5,
        avatar: <img src={img} alt="product" className="w-11 h-11" style={{borderRadius:"50%"}}/>,
        name: "John Doe",
        email: "jhon@gmail.com",
        gender:"male",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },   {
        id: 6,
        avatar: <img src={img} alt="product" className="w-11 h-11" style={{borderRadius:"50%"}}/>,
        name: "John Doe",
        email: "jhon@gmail.com",
        gender:"male",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },   {
        id: 7,
        avatar: <img src={img} alt="product" className="w-11 h-11" style={{borderRadius:"50%"}}/>,
        name: "John Doe",
        email: "jhon@gmail.com",
        gender:"male",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
];

const CustomerTable = () => {
  const [Productdata, setProductData] = useState<DataType[]>([]);
  useMemo(() => {
    setProductData(dummyData);
  }, [dummyData]);

  const Table = useCallback(() => {
    return TableHOC<DataType>(columns, Productdata, "All Customers")();
  }, [Productdata]);

  // useCallback is used to prevent unnecessary re-rendering of component and return a memoized version of the function that only changes if one of the dependencies has changed
  // useMemo is used to prevent unnecessary re-rendering of component and return a memoized value that only changes when one of the dependencies has changed
  // useMemo is used when we want to return a value and useCallback is used when we want to return a function
  //use () after TableHOC to return a component since TableHOC is HOC component and returns a component itself so call it by () to return table

  return <div className="main p-6">{Table()}</div>;
};

export default CustomerTable;
