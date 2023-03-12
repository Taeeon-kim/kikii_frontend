import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { createColumnHelper } from '@tanstack/react-table';
import MOCK_DATA2 from './MOCK_DATA2.json';
import { COLUMNS } from './columns';
import './table.css';
const BasicTable = () => {
  const date = [
    {
        id:123,
      driverName: '최X기1',
      busNumber: '8000',
      busRound: 0,
      startTime: '05:30',
      garbage: ["zz","ss"]
    },
    {
        id:124,
      driverName: '최X기1',
      busNumber: '8000',
      busRound: 1,
      startTime: '06:30',
    },
  ];
  const arr = [1,2,4,1,5,0,3,2]
  const foundMax = Math.max(...arr);
  console.log(foundMax)

  const testCols = [{Header: "1", accessor: 'startTime' }]
  //   const test = (data) => {
//   let cols = date.map((value,index) => ({
//     Header: `${index+1}`,
//     // accessor: (row)=> row[]
//     Cell: (row)=> console.log(row),
//   }));
//   //   };
//   console.log(cols);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA2, []);
  const TextColumn = createColumnHelper('text', { Header: 'ss', Cell: 0 });
  console.log(TextColumn);
  const tableInstance = useTable({
    columns: columns,
    data: date,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
    console.log(rows)
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          console.log(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                console.log(cell.getCellProps())
                return <td {...cell.getCellProps()} onClick={()=> console.log(cell)}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasicTable;
