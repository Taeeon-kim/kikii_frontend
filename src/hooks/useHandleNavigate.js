import { useNavigate } from "react-router-dom";

const useHandleNavigate = ()=>{
    const navigate = useNavigate();
    const isLogin = sessionStorage.getItem('token');
    const handleNavigate = (page) => {
        switch (page) {
          case 'home':
            navigate('/');
            break;
          case 'dispatch':
            if (isLogin) {
              navigate('/dispatch');
            } else {
              alert('로그인후 이용가능');
            }
            break;
          case 'signin':
            navigate('/signin');
            break;
          case 'signout':
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('name');
            navigate('/signin');
          default:
            break;
        }
      };
    return handleNavigate;
}

export default useHandleNavigate;