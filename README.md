# macOS에서 Oracle Database를 사용하는 방법 (-_-)
 1. * macOS에서 Oracle Database를 사용 하기 위해서는 Docker를 설치해야만 한다. 
  * 즉 macOS에서는 Oracle Database가 지원을 하지 않기 때문에 Docker같은 Container or VM을 이용하여 사용해야 한다
  * 도커는 무상태를 지향한다. 그렇기 때문에 프로그램(Container)을 실행시킨다음 생성된 데이터는 프로그램(Container)을 종료하면 데이터는 저장되지 않고 사라진다. 
  * 그렇기 때문에 oracle을 docker로 사용하려면 데이터를 프로그램(Container)외부에 저장해야 한다. 그래서 -v 옵션으로 외부에 데이터 저장할 것 이다.

 2. 우선 https://hub.docker.com/editions/community/docker-ce-desktop-mac에 접속하여 Docker Desktop for Mac를 Install 한다.

 3. 설치가 끝났다면 터미널을 실행 시킨 후에 "docker pull jaspeen/oracle-xe-11g" 명령어를 실행시킨다

 4. "docker run --name oracle11g-test -d -p 8080:8080 -p 1521:1521 jaspeen/oracle-xe-11g" 명령어 실행시킨다 
  * 해당명령어는 Container 생성과 실행을 해주도록 하는 명령어이다.

 5. "docker ps" 명령어를 실행시킨 후 "jaspeen/oracle-xe-11g"라는 문자가 보인다면 정상적으로 Container가 생성되었고 동작중이다는것을 의미한다.

 6. Docker에서 Oracle Database가 동작중이니 "http://localhost:8080/apex"에 접속 후 로그인 하면 끝이다


# Oracle Application Express Default Sign
 - workspace: INTERNAL
 
 - Username: ADMIN

 - Password: 0Racle$