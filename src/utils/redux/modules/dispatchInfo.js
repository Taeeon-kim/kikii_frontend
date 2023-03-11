import axios from 'axios';
import { createAction } from 'redux-actions';

const GET_DISPATCH_INFO = 'GET_DISPATCH_INFO';

const getDispatchInfo = createAction(GET_DISPATCH_INFO, (dispatchInfo) => ({
  dispatchInfo,
}));

const getDispatchInfoAPI = () => {
  return async function (dispatch) {};
};

const initialState = {
  dispatchInfo: [],
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_DISPATCH_INFO: {
      return { ...state, dispatchInfo: action.payload.dispatchInfo };
    }
    default:
      return state;
  }
}
