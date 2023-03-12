import styled from 'styled-components';
import basic_profile from '../../assets/images/basic_profile.png';
export const StyledHeaderContainer = styled.div`
  display: flex;
  position: fixed;
  height: 70px;
  background-color: #e2e5ed;
  justify-content: space-around;
  width: 100%;
`;

export const StyledMenuListWrapper = styled.ul`
  display: flex;
  width: 50%;

  justify-content: space-around;
  text-align: center;
  margin: auto 0;
  margin-left: 100px;
`;

export const StyledList = styled.li`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  cursor: pointer;
`;

export const StyledProfileContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: auto 0;
`;

export const StyledProfileWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
export const StyledProfileImage = styled.div`
  background-image: url(${basic_profile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 30px;
`;

export const StyledLogoutWrapper = styled.div`
  /* margin: auto 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  background-color: #4545af;
  color: white;
  border-radius: 15px;
  padding: 5px 10px;
  cursor: pointer;
`;
