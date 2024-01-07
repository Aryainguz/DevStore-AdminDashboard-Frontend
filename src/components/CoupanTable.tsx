import { ReactElement, useCallback, useMemo, useState } from "react";
import TableHOC from "./TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

interface DataType {
    product:string;
    discount: number;
    code : string;
    action : ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "Product",
        accessor: "product",
      },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Code",
    accessor: "code",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const dummyData: DataType[] = [
    {
        product:"Iphone 12",
        discount: 10,
        code: "Iphone12",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
    {
        product:"Iphone 12",
        discount: 10,
        code: "Iphone12",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
    {
        product:"Iphone 12",
        discount: 10,
        code: "Iphone12",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
    {
        product:"Iphone 12",
        discount: 10,
        code: "Iphone12",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
    {
        product:"Iphone 12",
        discount: 10,
        code: "Iphone12",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
    {
        product:"Iphone 12",
        discount: 10,
        code: "Iphone12",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
    {
        product:"Iphone 12",
        discount: 10,
        code: "Iphone12",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
    {
        product:"Iphone 12",
        discount: 10,
        code: "Iphone12",
        action: <Link to={'/devstore/admin/adrrst'} className="btn text-red-500 text-xl rounded-lg"><AiFillDelete /></Link>,
    },
];

const CoupanTable = () => {
  const [coupanData, setCoupanData] = useState<DataType[]>([]);
  useMemo(() => {
    setCoupanData(dummyData);
  }, [dummyData]);

  const Table = useCallback(() => {
    return TableHOC<DataType>(columns, coupanData, "All Coupans")();
  }, [coupanData]);

  // useCallback is used to prevent unnecessary re-rendering of component and return a memoized version of the function that only changes if one of the dependencies has changed
  // useMemo is used to prevent unnecessary re-rendering of component and return a memoized value that only changes when one of the dependencies has changed
  // useMemo is used when we want to return a value and useCallback is used when we want to return a function
  //use () after TableHOC to return a component since TableHOC is HOC component and returns a component itself so call it by () to return table

  return <div className="main p-6">{Table()}</div>;
};

export default CoupanTable;
