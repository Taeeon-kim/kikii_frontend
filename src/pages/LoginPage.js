import React, { useEffect } from 'react';
import LoginContainer from '../components/loginContainer/LoginContainer';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const is_login = localStorage.getItem('token');
  useEffect(() => {
    if (is_login) {
      navigate('/');
    }
  }, []);
  return (
    <div>
      <LoginContainer />
    </div>
  );
};

export default LoginPage;
