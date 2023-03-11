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
import { useNavigate } from 'react-router-dom';

const LoginContainer = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async () => {
    const userInfo = {
      loginId: idRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await dispatch(signInAPI(userInfo));
    if (response >= 200 && response < 400) {
      navigate('/dispatch');
      console.log('여기서 네비게이트');
    }
  };

  return (
    <StyledLoginContainer>
      <StyledLoginWapper>
        <StyledHeadLine>로그인</StyledHeadLine>
        <StyledInputContainer>
          <StyledInput placeholder={'사원번호'} ref={idRef}></StyledInput>

          <StyledInput
            placeholder={'비밀번호'}
            ref={passwordRef}
            type="password"
          ></StyledInput>
        </StyledInputContainer>
        <StyledLoginButton onClick={handleLogin}>로그인 하기</StyledLoginButton>
      </StyledLoginWapper>
    </StyledLoginContainer>
  );
};

export default LoginContainer;
