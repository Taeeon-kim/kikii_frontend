import React, { useEffect } from 'react'
import { apis } from '../utils/api/apis';
import Header from '../components/header/Header';

const DispatchManaingPage = () => {
    useEffect(() => {
        (async function () {
          const test = await apis.getDispatch({
            routeId: '70',
            date: '2023-02-20',
          });
          console.log(test.object);
        })();
      }, []);
  return (
    <div>
      <Header />
      DispatchManaingPage
      </div>
  )
}

export default DispatchManaingPage