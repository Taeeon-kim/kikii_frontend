import axios from 'axios';
import { createAction } from 'redux-actions';

const SIGN_IN = 'SIGN_IN';

const getUserInfo = createAction(SIGN_IN, (userInfo) => ({
  userInfo,
}));

const signInAPI = ({ loginId, password }) => {
  console.log(loginId, password);
  return async function (dispatch) {};
};

const initialState = {
  dispatchInfo: [],
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SIGN_IN: {
      return { ...state, dispatchInfo: action.payload.userInfo };
    }
    default:
      return state;
  }
}

export { signInAPI };
