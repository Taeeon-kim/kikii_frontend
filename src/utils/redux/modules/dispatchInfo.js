import axios from 'axios';
import { createAction } from 'redux-actions';
import { apis } from '../../api/apis';

const GET_DISPATCH_INFO = 'GET_DISPATCH_INFO';

const getDispatchInfo = createAction(GET_DISPATCH_INFO, (dispatchInfo) => ({
  dispatchInfo,
}));

const getDispatchInfoAPI = ({ routeId, date }) => {
  return async function (dispatch) {
    const response = await apis.getDispatch({
      routeId,
      date,
    });
    dispatch(getDispatchInfo(response.object));
  };
};
const patchDispatchInfo = ({ dispatchId, time }) => {
  return async function (dispatch) {
    try {
      const response = await apis.patchDispatchInfo({ dispatchId, time });
      return response;
    } catch (err) {
      console.error(err);
    }
  };
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

export { getDispatchInfo, getDispatchInfoAPI, patchDispatchInfo };
