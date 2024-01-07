import TableHOC from './TableHOC'
import { Column } from 'react-table'

interface DataType{
    id:number,
    quantity:number,
    discount:number,
    amount:number,
    status:string,
}

const columns:Column<DataType>[]= [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Quantity",
      accessor: "quantity",
    },
    {
      Header: "Discount",
      accessor: "discount",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Status",
      accessor: "status",
    },
]


const DashboardTable= ({data=[]}:{data:DataType[]}) => {
  return TableHOC<DataType>(columns,data,"Top Transactions")()
}

export default DashboardTable