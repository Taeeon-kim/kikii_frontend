import React, { useEffect, useRef, useState } from 'react';
import { apis } from '../utils/api/apis';
import Header from '../components/header/Header';
import BasicTable from '../components/table/BasicTable';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDispatchInfoAPI,
  patchDispatchInfo,
} from '../utils/redux/modules/dispatchInfo';
import SelectDate from '../components/table/SelectDate';
import styled from 'styled-components';
import EditContainer from '../components/table/EditContainer';

const DispatchManaingPage = () => {
  const dispatch = useDispatch();
  const [dispatchDateObj, setDispatchDateObj] = useState(
    new Date('2023', '02', '20')
  );
  const changedHour = useRef('');
  const changedMinute = useRef('');
  const [isOpenChangeContainer, setIsOpenChangeContainer] = useState(false);
  const [selectedInfomation, setSelectedInfomation] = useState({});
  const [distpatchDate, setDispatchDate] = useState('2023-02-20');
  const [dispatchDateString, setDispatchDateString] =
    useState('2023년 02월 20일 (금)');
  useEffect(() => {
    dispatch(getDispatchInfoAPI({ routeId: '70', date: distpatchDate }));
  }, [distpatchDate]);
  const handlerChangedInfoSubmit = async (hour, minute, id) => {
    if (hour.length === 2 && minute.length === 2) {
      const time = `${hour}:${minute}`;
      const response = await dispatch(
        patchDispatchInfo({ dispatchId: id, time: time })
      );
      if (response.status === 200) {
        dispatch(getDispatchInfoAPI({ routeId: '70', date: distpatchDate }));
        setIsOpenChangeContainer(false);
      }
    } else {
      alert('hh,mm 형식에 맞게 모두 입력해주세요');
    }
  };

  const handleChangeCancel = () => {
    setIsOpenChangeContainer(false);
  };

  return (
    <StyeldContainer>
      <Header />
      <StyledWrapper>
        <StyledDateAndTableWrapper>
          <SelectDate
            setDispatchDate={setDispatchDate}
            distpatchDate={distpatchDate}
            setDispatchDateObj={setDispatchDateObj}
            dispatchDateObj={dispatchDateObj}
            dispatchDateString={dispatchDateString}
            setDispatchDateString={setDispatchDateString}
          />
          <BasicTable
            setIsOpenChangeContainer={setIsOpenChangeContainer}
            setSelectedInfomation={setSelectedInfomation}
            changedHour={changedHour}
            changedMinute={changedMinute}
          />
        </StyledDateAndTableWrapper>
        {isOpenChangeContainer ? (
          <EditContainer
            selectedInfomation={selectedInfomation}
            handlerChangedInfoSubmit={handlerChangedInfoSubmit}
            handleChangeCancel={handleChangeCancel}
            changedHour={changedHour}
            changedMinute={changedMinute}
          />
        ) : null}
      </StyledWrapper>
    </StyeldContainer>
  );
};

const StyeldContainer = styled.div`
  /* position: relative; */
  margin-top: 70px;
`;
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledDateAndTableWrapper = styled.div`
  width: 100%;
`;

export default DispatchManaingPage;
