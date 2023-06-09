import instance from './instance';

export const apis = {
  // 로그인
  signIn: ({ loginId, password }) =>
    instance.post(`auth/login`, { loginId, password }),

  // 배차일보 조회
  getDispatch: ({ routeId, date }) =>
    instance.get(`/dispatch/${routeId}/${date}`),
  // 배차정보 수정
  patchDispatchInfo: ({ dispatchId, time }) =>
    instance.patch(`dispatch/update/${dispatchId}/${time}`),
};
