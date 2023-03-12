import React, { useEffect } from 'react';
import { apis } from '../utils/api/apis';
import Header from '../components/header/Header';
import BasicTable from '../components/table/BasicTable';

const DispatchManaingPage = () => {
  useEffect(() => {
    (async function () {
      // const update = await apis.patchDispatchInfo({dispatchId: 31545, time: "05:31"})
      // console.log(update)

      const test = await apis.getDispatch({
        routeId: '70',
        date: '2023-02-20',
      });
      console.log(test.object);
    })();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      DispatchManaingPage
      <BasicTable />
    </div>
  );
};

export default DispatchManaingPage;
