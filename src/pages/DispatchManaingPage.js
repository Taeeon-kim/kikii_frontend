import React, { useEffect } from 'react'
import { apis } from '../utils/api/apis';

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
    <div>DispatchManaingPage</div>
  )
}

export default DispatchManaingPage