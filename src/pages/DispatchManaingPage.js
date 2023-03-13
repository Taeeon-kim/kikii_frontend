import React, { useEffect, useState } from 'react';
import { apis } from '../utils/api/apis';
import Header from '../components/header/Header';
import BasicTable from '../components/table/BasicTable';
import { useDispatch, useSelector } from 'react-redux';
import { getDispatchInfoAPI } from '../utils/redux/modules/dispatchInfo';
import SelectDate from '../components/table/SelectDate';

const DispatchManaingPage = () => {
  const dispatch = useDispatch();
  const [dispatchDateObj, setDispatchDateObj] = useState(
    new Date('2023', '02', '20')
  );

  const [distpatchDate, setDispatchDate] = useState('2023-02-20');
  const [dispatchDateString, setDispatchDateString] = useState('2023년 02월 20일 (금)')
  useEffect(() => {
    dispatch(getDispatchInfoAPI({ routeId: '70', date: distpatchDate }));
  }, [distpatchDate]);

  return (
    <div>
      <Header />
      <SelectDate
        setDispatchDate={setDispatchDate}
        distpatchDate={distpatchDate}
        setDispatchDateObj={setDispatchDateObj}
        dispatchDateObj={dispatchDateObj}
        dispatchDateString={dispatchDateString}
        setDispatchDateString={setDispatchDateString}
      />
      <BasicTable />
    </div>
  );
};

export default DispatchManaingPage;
