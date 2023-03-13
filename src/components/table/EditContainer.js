import React from 'react';
import {
  StyledDivHourAndMin,
  StyledInputTime,
  StyledContainer,
  Styledwrap,
  StyledTitle,
  StyledChangeWrapper,
  StyledButtonWrapper,
  StyledButton,
  StyledDivDispatchChange_B,
  StyledDivDispatchChange_A,
  StyeldInputDetailInfo,
} from './StyledEditContainer';
import { useSelector } from 'react-redux';

const EditContainer = (props) => {
  return (
    <StyledContainer>
      <Styledwrap>
        <StyledTitle>
          <h2>시간 수정</h2>
        </StyledTitle>
        <StyledChangeWrapper className="dispatch-change-wrapper">
          <StyledDivDispatchChange_A>
            <h3>A. 변경할 시간</h3>
            <p>변경할 시간을 선택(클릭)해주세요.</p>
            <StyeldInputDetailInfo
              type="text"
              readOnly
              value={
                `${props.selectedInfomation.driverName} - ${
                  props.selectedInfomation.busRound + 1
                } 회차 / ${props.selectedInfomation.startTime}` || ''
              }
            ></StyeldInputDetailInfo>
          </StyledDivDispatchChange_A>
          <StyledDivDispatchChange_B>
            <h3>B. 수정 시간 입력</h3>
            <p>수정할 시간을 입력해주세요.</p>
            <StyledDivHourAndMin>
              <StyledInputTime type="text" />
              <span> : </span>
              <StyledInputTime type="text" />
            </StyledDivHourAndMin>
          </StyledDivDispatchChange_B>
          <StyledButtonWrapper>
            <StyledButton type="button">취소</StyledButton>
            <StyledButton type="button">변경</StyledButton>
          </StyledButtonWrapper>
        </StyledChangeWrapper>
      </Styledwrap>
    </StyledContainer>
  );
};

export default EditContainer;
