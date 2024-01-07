import { ReactElement, useCallback, useMemo, useState } from "react";
import TableHOC from "./TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";

interface DataType {
    user:string;
  amount: number;
  discount: number;
  quantity: number;
    status: ReactElement;
    action : ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "User",
        accessor: "user",
      },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const dummyData: DataType[] = [
    {
        user:"john",
        amount: 100,
        discount: 10,
        quantity: 1,
        status: <span className="text-red-500">Processing</span>,
        action: <Link to={'/devstore/admin/transaction/657564'} className="btn text-blue-500 rounded-lg font-semibold">Manage</Link>,
    },
    {
        user:"john",
        amount: 100,
        discount: 10,
        quantity: 1,
        status: <span className="text-purple-500">Shipped</span>,
        action: <Link to={'/devstore/admin/transaction/657564'} className="btn text-blue-500 rounded-lg font-semibold">Manage</Link>,
    },
    {
        user:"john",
        amount: 100,
        discount: 10,
        quantity: 1,
        status: <span className="text-purple-500">Shipped</span>,
        action: <Link to={'/devstore/admin/transaction/657564'} className="btn text-blue-500 rounded-lg font-semibold">Manage</Link>,
    },
    {
        user:"john",
        amount: 100,
        discount: 10,
        quantity: 1,
        status: <span className="text-purple-500">Shipped</span>,
        action: <Link to={'/devstore/admin/transaction/657564'} className="btn text-blue-500  rounded-lg font-semibold">Manage</Link>,
    },
    {
        user:"john",
        amount: 100,
        discount: 10,
        quantity: 1,
        status: <span className="text-blue-500">Delivered</span>,
        action: <Link to={'/devstore/admin/transaction/657564'} className="btn text-blue-500 rounded-lg font-semibold">Manage</Link>,
    },
    {
        user:"john",
        amount: 100,
        discount: 10,
        quantity: 1,
        status: <span className="text-blue-500">Delivered</span>,
        action: <Link to={'/devstore/admin/transaction/657564'} className="btn text-blue-500 rounded-lg font-semibold">Manage</Link>,
    },
    {
        user:"john",
        amount: 100,
        discount: 10,
        quantity: 1,
        status: <span className="text-purple-500">Shipped</span>,
        action: <Link to={'/devstore/admin/transaction/657564'} className="btn text-blue-500 rounded-lg font-semibold">Manage</Link>,
    },
    {
        user:"john",
        amount: 100,
        discount: 10,
        quantity: 1,
        status: <span className="text-blue-500">Delivered</span>,
        action: <Link to={'/devstore/admin/transaction/657564'} className="btn  text-blue-500 rounded-lg font-semibold">Manage</Link>,
    },
];

const TransactionTable = () => {
  const [Productdata, setProductData] = useState<DataType[]>([]);
  useMemo(() => {
    setProductData(dummyData);
  }, [dummyData]);

  const Table = useCallback(() => {
    return TableHOC<DataType>(columns, Productdata, "All Transactions")();
  }, [Productdata]);

  // useCallback is used to prevent unnecessary re-rendering of component and return a memoized version of the function that only changes if one of the dependencies has changed
  // useMemo is used to prevent unnecessary re-rendering of component and return a memoized value that only changes when one of the dependencies has changed
  // useMemo is used when we want to return a value and useCallback is used when we want to return a function
  //use () after TableHOC to return a component since TableHOC is HOC component and returns a component itself so call it by () to return table

  return <div className="main p-6">{Table()}</div>;
};

export default TransactionTable;
