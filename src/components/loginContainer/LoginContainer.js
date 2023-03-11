import React, { useRef } from 'react';

import { useDispatch } from 'react-redux';
import {
  P,
  StyledHeadLine,
  StyledInputContainer,
  StyledLoginButton,
  StyledLoginContainer,
  StyledLoginWapper,
  StyledInput,
} from './styledLoginContainer';
import { signInAPI } from '../../utils/redux/modules/user';

const LoginContainer = (props) => {
  const dispatch = useDispatch();
  const idRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    console.log(idRef.current.value, passwordRef.current.value);
    const userInfo = {
      loginId : idRef.current.value,
      password: passwordRef.current.value
    }
    dispatch(signInAPI(userInfo))
  };

  return (
    <StyledLoginContainer>
      <StyledLoginWapper>
        <StyledHeadLine>로그인</StyledHeadLine>
        <StyledInputContainer>
          <StyledInput placeholder={'사원번호'} ref={idRef}></StyledInput>

          <StyledInput placeholder={'비밀번호'} ref={passwordRef}></StyledInput>
        </StyledInputContainer>
        <StyledLoginButton onClick={handleLogin}>로그인 하기</StyledLoginButton>
      </StyledLoginWapper>
    </StyledLoginContainer>
  );
};

export default LoginContainer;
