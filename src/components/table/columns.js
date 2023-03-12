export const COLUMNS = [
  {
    Header: '순번',
    accessor: (row, index) => index+1
  },
  {
    Header: '차량번호',
    accessor: 'busNumber',
  },
  {
    Header: '성명',
    accessor: 'driverName',
  },
  {
    Header: '1',
    accessor: 'startTime',
  },
  {
    Header: '2',
    accessor: (row,index)=> console.log(row),
    id:"zz"
  },
  {
    Header: '3',
    accessor: 'country',
  },
  {
    Header: '4',
    accessor: 'phone',
  },
];
