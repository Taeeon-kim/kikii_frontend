import { createAction } from 'redux-actions';
import { apis } from '../../api/apis';
const SIGN_IN = 'SIGN_IN';

const getUserInfo = createAction(SIGN_IN, (userInfo) => ({
  userInfo,
}));

const signInAPI = (loginInfo) => {
  // console.log(loginId, password);
  return async function (dispatch) {
    try {
      const response = await apis.signIn(loginInfo);
      sessionStorage.setItem('token', response.object.token)
      sessionStorage.setItem('name', response.object.name)

      dispatch(getUserInfo(response.object));
      return response;
    
    } catch (err) {
      console.log(err);
      alert("아이디와 비밀번호를 다시 확인해주세요.")
      return err.response.status
    }
  };
};

const initialState = {
  dispatchInfo: {},
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SIGN_IN: {
      console.log("reducer")
      return { ...state, dispatchInfo: action.payload.userInfo };
    }
    default:
      return state;
  }
}

export { signInAPI };
