export const COLUMNS = [
  {
    Header: '순번',
    accessor: (row, index) => index + 1,
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
    Header: '배차 시간',
    accessor: 'startTime',
  },
  // {
  //   Header: '2',
  //   accessor: (row, index) => {},
  // },
  // {
  //   Header: '3',
  //   accessor: (row, index) => {},
  // },
  // {
  //   Header: '4',
  //   accessor: (row, index) => {},
  // },
];

// export const COLUMNS = [
//   { Header: 'Name', accessor: 'name' },
//   {
//     Header: 'Hobbies',
//     accessor: 'hobbies',
//     Cell: ( value ) => value.join(', '),
//   },
// ];
