import React from 'react';
import { StyledInputHourAndMin, StyledInputTime, StyledWrapper } from './StyledEditContainer';

const EditContainer = (props) => {
  return (
    <StyledWrapper>
      <p>시간수정</p>
      <div className="dispatch-change-wrapper">
        <div className="dispatch-change-a">
          <p>A. 변경할 시간</p>
          <p>변경할 시간을 선택(클릭)해주세요.</p>
          <input type="text" readOnly></input>
        </div>
        <div className="dispatch-change-b">
          <p>B. 수정 시간 입력</p>
          <p>수정할 시간을 입력해주세요.</p>
          <StyledInputHourAndMin>
            <StyledInputTime type="text" />
            <span> : </span>
            <StyledInputTime type="text" />
          </StyledInputHourAndMin>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default EditContainer;
