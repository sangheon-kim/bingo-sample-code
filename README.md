# Bingo 게임

## 게임 대기 전

#### Server

```md
- [ ] PoC 인벤토리
- [ ] 네이트온 접근 확인 후 Redirection
- [ ] 네이트온팀 메시지 발송 (10분전 알림 발송)
- [ ] 개인정보이용 동의 보관
```

#### Server 지원

```

```

#### Client

```md
- [ ] 랜딩 페이지 개발 (안내 및 설치 페이지 이동 링크)
- [ ] 개인정보 이용동의 레이어 개발
```

## 게임 대기

#### Server

```md
# [ 대기중 ]

\* 게임 시작 15분 전

- [ ] 게임 시간 카운트 (시간 동기화)
- [ ] 접속자수 카운트 변경있을 때마다 클라이언트로 내려줌
- [ ] 실시간으로 넘어오는 프리존 checked 값에 따라 BingoBoard 재생성
- [ ] Socket Event 정의 하여 해당 신호 클라와 협의 후 게임 자동입장 될 수 있게 설계
- [ ] 게임 시작 여부에 따라 관전과 입장 이벤트 Emit

# [ 게임 안내 ]

\* 게임 종료 5분 후, 게임 시작 15분 이상 남은 경우

- [ ] 서버에서 다음 게임 시간 받을 수 있는 API 개발

# [ 내정보 ]

\* 게임 안내와 대기중 상관없이 조회 가능 페이지

- [ ] ID, 프리존 정보, 빙고 참여횟수, 빙구 당첨 횟수, 참여일시 DB 보관 및 클라에서 요청할 수 있는 API 개발
```

#### Server 지원

```md
```

#### Client

```md
# [ 대기중 ]

\* 게임 시작 15분 전

- [ ] 친구에게 공유하기
- [ ] 게임 시간 카운트 동기화 받은 시간 카운트
- [ ] 디자인에 맞추어 시각/청각 요소 마크업 및 BGM
- [ ] 카운트 확인하여 인터랙션 적용하여 반영
- [ ] 스페셜 데이 카운트 스크립트 및 마크업
- [ ] 프리존 횟수 API 받아다가 출력
- [ ] 프리존 횟수가 0인경우 체크박스 선택 차단
- [ ] 프리존 체크박스 선택 / 해제 마다 해당 checked 값 서버로 사용자 정보와 전송
- [ ] 프리존 안내 페이지 마크업 작업
- [ ] 서버로부터 게임 시작 이벤트 받으면 게임시작 페이지 렌더링

# [ 게임 안내 ]

\* 게임 종료 5분 후, 게임 시작 15분 이상 남은 경우

- [ ] 게임 안내 페이지 마크업 개발
- [ ] 빙고 게임 시간 안내 타이머
- [ ] 빙고 게임 간단 소개 페이지 마크업
- [ ] 프리존 안내 페이지 마크업

# [ 내정보 ]

\* 게임 안내와 대기중 상관없이 조회 가능 페이지

- [ ] 내정보 페이지 마크업
- [ ] API 호출 후 결과값 보여주기(ID, 프리존 정보, 빙고 참여횟수, 빙구 당첨 횟수, 참여일시)
```

## 게임 시작

#### Server

```md
# [입장완료]

- [ ] 대기 상태에서 받은 Freezone 유무에 따른 랜덤하게 생성한 보드판 클라로 전송
- [ ] 유저정보와 라이브 유무 정보 클라에 전송
- [ ] 참여자수(실시간) 관전자수(실시간) 클라로 전송
- [ ] 1줄 빙고자 나올경우마다 무결성 체크 후 랭킹 반영 (Redis)
- [ ] 랭킹 반영 후 클라이언트로 브로드캐스트
- [ ] 빙고 랜덤하게 클라로 전송
- [ ] 빙고 3줄 완성자 일정 인원 도달시 빙고 종료 시그널 전송

# [관전]

- [ ] 프리존 없는 랜덤한 빙고판 뿌려주기
- [ ] 유저 정보 전달
- [ ] 현재까지 진행된 시간 보유
```

#### 서버지원

```md
```

#### Client

```md
# [입장완료]

- [ ] 빙고판 표시
- [ ] 라이브 표시
- [ ] 계정 표시
- [ ] 게임 진행 시간 표시(Tick Tock)
- [ ] 참여자수(실시간) 관전자수(실시간) 표시
- [ ] 마크업 및 BGM 작업
- [ ] 내 빙고현황 표시 및 채점
- [ ] 1줄 빙고시마다 서버로 해당 유저 정보와 빙고판 전송
- [ ] 브로드캐스트된 랭킹 전체 빙고현황에 표시
- [ ] 서버로부터 전달받은 빙고번호 화면 표시
- [ ] 서버로부터 전달받은 빙고번호에 맞는 빙고판에 표시
- [ ] 빙고 종료 시그널 받는 경우 게임종료 페이지 렌더링

# [관전]

- [ ] 관전중 표시
- [ ] 유저 정보 보여줌
- [ ] 현재 게임 진행 시간 표시(TickTock)
- [ ] 참여자수(실시간) 관전자수(실시간) 표시
- [ ] 동적 비쥬얼, BGM 등 마크업
- [ ] 내 빙고현황 표시 및 채점
- [ ] 전체 빙고현황 표시 막기
- [ ] 서버로부터 전달받은 빙고번호 화면 표시
- [ ] 서버로부터 전달받은 빙고번호에 맞는 빙고판에 표시
- [ ] 빙고판 렌더링
- [ ] 빙고 제출 버튼 막기
- [ ] 빙고 종료 시그널 받는 경우 게임종료 페이지 렌더링
```

## 게임 종료

#### Server

```md
# [게임종료_빙고성공]

- [ ] 빙고 성공 유무 전송
- [ ] 마무리 시간 카운트 후 마무리 시그널 클라에 브로드캐스트

# [게임종료_빙고실패]

- [ ] 빙고 성공 유무 전송
- [ ] 마무리 시간 카운트 후 마무리 시그널 클라에 브로드캐스트
```

#### Server 지원

```

```

#### Client

```md
# [게임종료_빙고성공]

- [ ] 당첨 축하 페이지 마크업
- [ ] 경품(or 상금)지급 안내 마크업
- [ ] 다음 빙고게임 시간 안내 마크업
- [ ] 마무리 시간 카운트
- [ ] 마무리 시그널 받는 경우 게임 안내페이지 렌더

# [게임종료_빙고실패]

- [ ] 빙고 성공 계정 수
- [ ] 실패 페이지 마크업
- [ ] 마무리 시간 카운트
- [ ] 마무리 시그널 받는 경우 게임 안내페이지 렌더
```

#### Client

- [ ] 화면 닫기 시 Confirm Alert 후 종료
