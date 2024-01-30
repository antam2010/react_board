-------------------------------- 설정 -------------------------------
# node version
node -v  20.10.0

# npm intalled
npm install install react-router-dom 
npm install axios

-------------------------------- 실행 -------------------------------
# api ( 글로벌로 설치 해서 간단하게 API 서버 구축) 사용자가 설치 할 것
npm install -g json-server
# 다른 터미널 창 열고
json-server --watch db.json --port 4000

# 시작
npm run start

