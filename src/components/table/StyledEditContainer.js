import styled from 'styled-components';

export const StyledContainer = styled.div`
  /* position: fixed; */
  /* display: flex; */
  width: 400px;
  height: 100vh;
  right: 0;
  top: 70px;
  background-color: #e2e5ed;
  border: 1px solid gray;
  /* text-align: center; */
`;

export const Styledwrap = styled.div`
  width: 80%;
  margin: 50px auto;
`;

export const StyledChangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 80px 0;
`;

export const StyledDivHourAndMin = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledInputTime = styled.input`
  width: 80px;
  height: 30px;
  border: none;
`;

export const StyeldInputDetailInfo = styled.input`
  border: none;
  width: 200px;
  height: 30px;
`;
export const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledButton = styled.button`
  width: 100px;
  padding: 5px;
  border: none;
  border-radius: 15px;
  background-color: #4545af;
  color: white;
`;

export const StyledTitle = styled.div`
  text-align: center;
`;

export const StyledDivDispatchChange_A = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & h3 {
    color: #40539b;
  }
`;
export const StyledDivDispatchChange_B = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & h3 {
    color: #40539b;
  }
`;
