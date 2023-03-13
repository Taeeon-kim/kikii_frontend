import React from 'react';

import {
  StyledHeaderContainer,
  StyledMenuListWrapper,
  StyledList,
  StyledProfileContainer,
  StyledProfileWrapper,
  StyledProfileImage,
  StyledLogoutWrapper,
} from './StyledHeader';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const userName = sessionStorage.getItem('name');
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    navigate('/signin');
  };
  return (
    <StyledHeaderContainer>
      <StyledMenuListWrapper>
        <StyledList>홈</StyledList>
        <StyledList>근무 관리</StyledList>
        <StyledList>배차 관리</StyledList>
        <StyledList>자원 관리</StyledList>
      </StyledMenuListWrapper>
      <StyledProfileContainer>
        <StyledProfileWrapper>
          <StyledProfileImage></StyledProfileImage>
        </StyledProfileWrapper>
        <p>{userName} 님</p>
        <StyledLogoutWrapper onClick={handleLogout}>
          로그아웃
        </StyledLogoutWrapper>
      </StyledProfileContainer>
    </StyledHeaderContainer>
  );
};

export default Header;
