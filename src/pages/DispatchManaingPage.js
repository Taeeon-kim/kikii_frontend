import React, { useEffect, useState } from 'react';
import { apis } from '../utils/api/apis';
import Header from '../components/header/Header';
import BasicTable from '../components/table/BasicTable';
import { useDispatch, useSelector } from 'react-redux';
import { getDispatchInfoAPI } from '../utils/redux/modules/dispatchInfo';
import SelectDate from '../components/table/SelectDate';
import styled from 'styled-components';
import EditContainer from '../components/table/EditContainer';

const DispatchManaingPage = () => {
  const dispatch = useDispatch();
  const [dispatchDateObj, setDispatchDateObj] = useState(
    new Date('2023', '02', '20')
  );

  const [distpatchDate, setDispatchDate] = useState('2023-02-20');
  const [dispatchDateString, setDispatchDateString] =
    useState('2023년 02월 20일 (금)');
  useEffect(() => {
    dispatch(getDispatchInfoAPI({ routeId: '70', date: distpatchDate }));
  }, [distpatchDate]);

  return (
    <StyeldWrapper>
      <Header />
      <div>
        <SelectDate
          setDispatchDate={setDispatchDate}
          distpatchDate={distpatchDate}
          setDispatchDateObj={setDispatchDateObj}
          dispatchDateObj={dispatchDateObj}
          dispatchDateString={dispatchDateString}
          setDispatchDateString={setDispatchDateString}
        />
        <BasicTable />
        <EditContainer />
      </div>
    </StyeldWrapper>
  );
};

const StyeldWrapper = styled.div`
position: relative;
margin-top: 70px;
`

export default DispatchManaingPage;
