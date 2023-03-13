import React, { useMemo } from 'react';
import { useTable } from 'react-table';
// import { createColumnHelper } from '@tanstack/react-table';

import { COLUMNS } from './columns';

import { useSelector } from 'react-redux';
import {
  StyledTable,
  StyledTableWrapper,
  StyledTd,
  StyledTh,
  StyledTr,
} from './\bStyledBasicTable';
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
    <StyledTableWrapper>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <StyledTr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTh {...column.getHeaderProps}>
                  {column.render('Header')}
                </StyledTh>
              ))}
            </StyledTr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <StyledTr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <StyledTd
                      {...cell.getCellProps()}
                      onClick={() => console.log(cell.row.original)}
                    >
                      {cell.render('Cell')}
                    </StyledTd>
                  );
                })}
              </StyledTr>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default BasicTable;
