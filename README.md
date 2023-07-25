## 투두리스트

- [x] 기본 리액트로 만들어보기
- [x] 리덕스를 사용하여 만들어보기
  1. 리덕스는 패키지라서 설치를 해주어야 한다. 띄어쓰기로 연결해서 써주면 두개 한꺼번에 설치됨(npm i redux react-redux)
  2. 폴더구조 확인
     /src/redux/config/configStore.js
     /src/redux/moudles
     - redux : 리덕스 관련 코드를 모두 몰아넣음
     - config : 리덕스 설정 관련 파일 전부 
     - configStore : 중앙 state 관리소 -> 설정 코드(.js)
     - modules : state의 그룹! (ex-Todolist를 만들려면 todos.js에 모아둔다?)

