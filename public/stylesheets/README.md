Node.js의 기초
====

## 1. Install

#### Nodejs
* ['Nodejs.org'](http://www.nodejs.org "Nodejs") 접속 후 Install
* Install 후 **node -v** 으로 버전 확인

#### NPM
* **npm init**
  * **npm -v** 으로 버전 확인
  * Node 프로그램을 시작하는 명령어
  * Package.json을 생성

### express
* **npm install express --save**
  * --save 옵션을 사용하여 package.json에 등록
  * module을 dependency로서 설치(C의 Include와 유사)

### forever
* **[sudo] npm install forever -g**
* **forever start app.js** 서버open
* **forever stop app.js** 서버 off
* 인스턴스관리 및 서버 관리
* MAC,Windows 둘 다 사용 가능

### nodemon
* **npm install nodemon -g**  
  * -g: 커맨드라인에서 명령어 사용가능
* **nodemon app.js localhost 3000** 서버open(포트 3000)
* **nodemon --delay 10 app.js** Delay 10초 후 Restart
* MAC 사용불가

### Atom
* 텍스트 에디터
* ['atom.io'](http://atom.io) 접속 후 install 및 재부팅
* Package 설치
  * File>Setting
    * atom-runner
    * linter-jshint
    * highlight-selected

## 2. 기본 명령어

#### require(express)
* express 모듈을 불러오는 명령어

#### Http Verbs
