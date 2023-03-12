import React, { useMemo } from 'react';
import { useTable } from 'react-table';
// import { createColumnHelper } from '@tanstack/react-table';
import MOCKDATA from './MOCKDATA.json';
import { COLUMNS } from './columns';
import './table.css';
import { useSelector } from 'react-redux';
const BasicTable = (props) => {
  const dispatchInfo = useSelector((state) => state.dispatchInfo.dispatchInfo);

  const modifiedData = [
    {
      driverName: '최X기1',
      busNumber: '8000',
      busRound: [0, 1, 2, 3, 4, 5, 6, 7],
      startTime: [
        '05:30',
        '06:30',
        '07:30',
        '08:30',
        '09:30',
        '10:30',
        '11:30',
        '12:30',
      ],
    },
  ];
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => dispatchInfo, [dispatchInfo]);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div className="table-wrapper">
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
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      onClick={() => console.log(cell.row.original)}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;
