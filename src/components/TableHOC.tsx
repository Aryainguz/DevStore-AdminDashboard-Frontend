import { Column, useTable,useSortBy,usePagination, TableOptions} from "react-table";

// here we are using generic type T which extends Object because we want to use any type of data in our table
// generic type T are used when we don't know type of data being passed in our props
// we are extending T as Object because TableHOC must be Object type

const TableHOC = <T extends Object>(columns:Column<T>[],data:T[],heading:string) => {

  return function HOC(){

    const options:TableOptions<T> = {
      columns,
      data,
      initialState: { pageSize: 7 },  // you can set default page size here
    }

    const Table = useTable(options,useSortBy,usePagination);
  
    // use page instead of rows for pagination to work by default max length of page is 10
    const { headerGroups, page, prepareRow, getTableBodyProps,nextPage,previousPage,canNextPage,canPreviousPage,gotoPage,state:{pageIndex},pageCount } =Table;
     
    return (
      <>
        <div className="w-full text-center bg-white border border-gray-200 rounded-lg shadow">
      <h2 className="py-2 bg-white text-gray-500 text-center font-sans text-xl">{heading}</h2>

        <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <button
                     className = {`text-white  text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${canPreviousPage ? 'bg-blue-500' : 'bg-gray-300 '}`} 
                    type="button"
                    disabled={pageIndex <= 0}
                    onClick={()=>gotoPage(0)}
                  >
                    FirstPage
                  </button>
                    <button
                    className = {`text-white  text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${canPreviousPage ? 'bg-blue-500' : 'bg-gray-300 '}`} 
                    type="button"                   
                    disabled={!canPreviousPage} 
                    onClick={previousPage}
                  >
                    Previous
                  </button>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-center">
                <span className="
                  text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-500 last:mr-0 mr-1">

                  {pageIndex + 1} of {pageCount}
                </span>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className = {`text-white  text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${canNextPage ? 'bg-blue-500' : 'bg-gray-300 '}`} 
                    type="button"
                    disabled={!canNextPage}
                    onClick={nextPage}
                  >
                    Next
                  </button>
                  <button
                     className = {`text-white  text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ${canNextPage ? 'bg-blue-500' : 'bg-gray-300 '}`} 
                    type="button"
                    disabled={pageIndex >= pageCount-1}
                    onClick={()=>gotoPage(pageCount-1)}
                  >
                    LastPage
                  </button>
                  
                </div>
              </div>
            </div>
            <div className="block w-full overflow-auto">
              <table
                className="items-center bg-transparent w-full border-collapse"
                {...getTableBodyProps()}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((header) => (
                        <th
                          {...header.getHeaderProps(header.getSortByToggleProps())}
                          className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left text-gray-500 font-medium"
                        >
                          {header.render("Header")} {header.isSorted ? ( header.isSortedDesc ? "⬇️" : "⬆️" ) : "➡️"}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps}>
                  {page.map((row:any) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} className="hover:bg-gray-200" key={
                        row.getRowProps().key
                      }>
                        {row.cells.map((cell:any) => {
                          return (
                            <td
                          key={cell.getCellProps().key}
                              {...cell.getCellProps()}
                              className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            </div>
      </>
    )
  }
}

export default TableHOC