import React, { useRef } from 'react';
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
import useInputChange from '../../hooks/useChangeInput';
const EditContainer = (props) => {
  const hourInput = useInputChange('hour');
  const minuteInput = useInputChange('minute');
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
              <StyledInputTime
                type="text"
                ref={props.changedHour}
                pattern="/([01]?[0-9]|2[0-3])/g"
                onChange={hourInput.onChange}
                maxLength={2}
              />
              <span> : </span>
              <StyledInputTime
                type="text"
                ref={props.changedMinute}
                onChange={minuteInput.onChange}
                maxLength={2}
              />
            </StyledDivHourAndMin>
          </StyledDivDispatchChange_B>
          <StyledButtonWrapper>
            <StyledButton
              type="button"
              onClick={() => {
                props.handleChangeCancel();
              }}
            >
              취소
            </StyledButton>
            <StyledButton
              type="button"
              onClick={() =>
                props.handlerChangedInfoSubmit(
                  props.changedHour.current.value,
                  props.changedMinute.current.value,
                  props.selectedInfomation.id
                )
              }
            >
              변경
            </StyledButton>
          </StyledButtonWrapper>
        </StyledChangeWrapper>
      </Styledwrap>
    </StyledContainer>
  );
};

export default EditContainer;
