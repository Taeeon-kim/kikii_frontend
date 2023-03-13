import React, { useEffect } from 'react';
// import { apiKey } from "./firebase";
// import {Grid, Text, Button} from "../elements";
import { history } from './redux/configStore';
import { useNavigate } from 'react-router-dom';
const Permit = (props) => {
  const navigate = useNavigate();
  console.log(history.location.pathname);
  const is_login = sessionStorage.getItem('token');
  useEffect(() => {
    if (!is_login) {
        alert('로그인후 이용가능')
      navigate('/signin');
    }
  }, []);

  return is_login && <React.Fragment>{props.children}</React.Fragment>;
};

export default Permit;
