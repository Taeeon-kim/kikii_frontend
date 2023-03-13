import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import dispatchInfo from './modules/dispatchInfo';
import userInfo from './modules/user';

// export const history = createBrowserHistory();
const rootReducer = combineReducers({
  dispatchInfo,
  userInfo,
}); // 리듀서 삽입
const middlewares = [thunk.withExtraArgument()]; // thunk 및 history 를 미들웨어로 넘겨줘서 사용
const store = configureStore({
  reducer: rootReducer,
  middleware: [...middlewares],
});

export default store;
