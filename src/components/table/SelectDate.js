import React from 'react';
import styled from 'styled-components';
import {
  changeMinusOneDate,
  changePlusOneDate,
  changeTOStringForAPI,
  changeToStringDate,
} from '../../utils/common';

const SelectDate = (props) => {
  const handleMinusDate = () => {
    // console.log(props.dispatchDateObj)
    const newDateObj = changeMinusOneDate(props.dispatchDateObj);
    props.setDispatchDate(changeTOStringForAPI(newDateObj));
    props.setDispatchDateString(changeToStringDate(newDateObj));
    props.setDispatchDateObj(newDateObj);
  };

  const handlePlusDate = () => {
    // console.log(props.dispatchDateObj)
    const newDateObj = changePlusOneDate(props.dispatchDateObj);
    props.setDispatchDate(changeTOStringForAPI(newDateObj));
    props.setDispatchDateString(changeToStringDate(newDateObj));
    props.setDispatchDateObj(newDateObj);
  };

  return (
    <StyledSelectDateWrapper>
      <StyledArrow onClick={handleMinusDate}>{'<'}</StyledArrow>{' '}
      {props.dispatchDateString}
      <StyledArrow onClick={handlePlusDate}>{'>'}</StyledArrow>
    </StyledSelectDateWrapper>
  );
};

const StyledSelectDateWrapper = styled.div`
  display: flex;
  width: 400px;
  margin: 0 auto;
  padding: 20px 0 0;
  font-size: 20px;
  font-weight: bold;
  justify-content: space-around;
`;

const StyledArrow = styled.div`
  cursor: pointer;
`;

export default SelectDate;
