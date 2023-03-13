import React, { useMemo } from 'react';
import { useTable } from 'react-table';

import { COLUMNS } from './columns';

import { useSelector } from 'react-redux';
import {
  StyledTable,
  StyledTableWrapper,
  StyledTd,
  StyledTh,
  StyledTr,
} from './StyledBasicTable';
const BasicTable = (props) => {
  const dispatchInfo = useSelector((state) => state.dispatchInfo.dispatchInfo);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => dispatchInfo, [dispatchInfo]);

  const tableInstance = useTable({
    columns: columns,
    data: data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const handleTdClick = (cell) => {
    if (cell.column.id === 'startTime') {
      props.setIsOpenChangeContainer(true);
      props.setSelectedInfomation(cell.row.original);
      props.changedHour.current.value = '';
      props.changedMinute.current.value = '';
    } else alert('배차 시간만 수정가능');
  };
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
                      onClick={() => handleTdClick(cell)}
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
