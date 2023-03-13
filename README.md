## 사용 라이브러리

- react@18.2.0
- react-table@7.8.0
- redux@4.2.1
- styled-components@5.3.8
- axios@1.3.4
- react-redux@8.0.5
- react-router-dom@6.9.0
- redux-actions@3.0.0
- redux-thunk@2.4.2

## 구현

# 로그인 페이지

- 로그인 기능 구현
- 실패시 alert 창 출력

# 배차관리 페이지

- react-table을 이용하여 배차 정보 테이블 기능 구현
- Date 객체사용 배차 일정별 이동 및 API 연결, 수정 구현
- 배차시간 선택후 수정페이지에 해당 정보 출력 및 원하는 시간대로 변경 구현
- 변경후 해당 날짜 페이지에 대한 API 새로 요청후 상태변경으로 리랜더링 구현
- 로그인 없이는 dispatch 접근차단 alert로 로그인 필요 출력

# etc

- 해더 네비게이션 hover, 해당페이지에서의 color css 효과 추가
- 해더 로그인시 해당 프로필 정보 출력 및 로그인 로그아웃 기능 구현
- 시간 수정시 변경 버튼일때도 체크할뿐만 아니라 수정 input 중에도 시, 분 유효성 검사를 하여 불일치시 ''로 변경
- 수정 페이지에서 다른 시간 선택시 변경중인 input 창 value 초기화
- customer hook 을 생성하여 중복사용 되는 로직과 길어지는 코드의 가독성 증가 및 관심사 분리
