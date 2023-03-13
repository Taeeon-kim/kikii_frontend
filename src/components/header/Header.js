import React, { useState } from 'react';

import {
  StyledHeaderContainer,
  StyledMenuListWrapper,
  StyledList,
  StyledProfileContainer,
  StyledProfileWrapper,
  StyledProfileImage,
  StyledLogoutWrapper,
} from './StyledHeader';
import useHandleNavigate from '../../hooks/useHandleNavigate';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const userName = sessionStorage.getItem('name');
  const isLogin = sessionStorage.getItem('token');
  const handleNavigate = useHandleNavigate();
  const locate = useLocation();
  return (
    <StyledHeaderContainer>
      <StyledMenuListWrapper>
        <StyledList
          onClick={() => handleNavigate('home')}
          locatePath={locate.pathname}
          ownPath="/"
        >
          홈
        </StyledList>
        <StyledList
          onClick={() => handleNavigate('dispatch')}
          locatePath={locate.pathname}
          ownPath="/dispatch"
        >
          근무 관리
        </StyledList>
        <StyledList ownPath="/dispatch_manage">배차 관리</StyledList>
        <StyledList ownPath="/resource_manage">자원 관리</StyledList>
      </StyledMenuListWrapper>
      <StyledProfileContainer>
        {isLogin ? (
          <>
            <StyledProfileWrapper>
              <StyledProfileImage></StyledProfileImage>
            </StyledProfileWrapper>
            <p>{userName} 님</p>
          </>
        ) : null}
        {isLogin ? (
          <StyledLogoutWrapper onClick={() => handleNavigate('signout')}>
            로그아웃
          </StyledLogoutWrapper>
        ) : (
          <StyledLogoutWrapper onClick={() => handleNavigate('signin')}>
            로그인
          </StyledLogoutWrapper>
        )}
      </StyledProfileContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
