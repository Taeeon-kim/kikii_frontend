import styled from 'styled-components';
export const StyledLoginContainer = styled.div`
  border: 2px solid #707070;
  border-radius: 10px;
  height: 500px;
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;
`;

export const StyledLoginWapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px 20px;
  width: 50%;
  gap: 100px;
`;
export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledLoginButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  border-radius: 20px;
  height: 30px;
`;
export const StyledHeadLine = styled.h1`
  letter-spacing: 3px;
  color: #19289a;
`;

export const StyledInput = styled.input`
  placeholder: ${(props) => (props.placeholder ? props.placeholder : '')};
  border: none;
  padding: 2px 5px;
  border-bottom: 1px solid black;
`;
