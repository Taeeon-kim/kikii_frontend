import React, { useEffect } from 'react';
import { apis } from '../utils/api/apis';
import Header from '../components/header/Header';
import BasicTable from '../components/table/BasicTable';
import { useDispatch, useSelector } from 'react-redux';
import { getDispatchInfoAPI } from '../utils/redux/modules/dispatchInfo';

const DispatchManaingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDispatchInfoAPI({ routeId: '70', date: '2023-02-20' }));
  }, []);

  return (
    <div>
      <Header />
      DispatchManaingPage
      <BasicTable />
    </div>
  );
};

export default DispatchManaingPage;
