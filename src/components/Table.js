import React, { useState } from "react";
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
import GlobalFilterThird from "./GlobalFilterThird";
import { ColumnFilter } from "./ColumnFilter";

export const Table = ({ columns, data }) => {
  const tableInstance = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    state,
  } = tableInstance;

  // const [filterInput, setFilterInput] = useState("");

  // const handleFilterChange = (e) => {
  //   const value = e.target.value || undefined;
  //   setFilterInput(value);
  // };

  const { globalFilter } = state;
  return (
    <>
      {/* <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search name"}
      /> */}
      <GlobalFilterThird filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>

                  {/* <div>{column.canFilter ? column.render("Filter") : null}</div> */}

                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
