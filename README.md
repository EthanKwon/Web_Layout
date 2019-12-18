# Web_Layout
 


### Layout 구성 연습하기 (19. 12. 13)

1. **기초 Layout** 구성하기 
    - **width**와 **height**로 크기 구성하기(layout01.html)
    - **float**의 사용법을 알고, block 배치 하기 (layout01.html)
    - **line-height**를 이용해 text 정 가운데 배치하기 (layout01.html)
    - **clear**를 이용하여 float 요소의 성질 차단하기 (layout02.html)
    - 각 파트별(header, nav 등등) wrap과 contain 요소를 두어 사용자 화면에 맞는 layout을 구성 (layout05.html)
    - width :100%는 기본값 이므로 생략 가능 (layout05.html)
    - 부모 element는 자식 element의 height를 따라 가기 때문에 생략 가능 (layout05.html)
    - 자식 element의 height는 **inherit**을 이용해 부모 element의 높이를 가져올 수 있다. (layout06.html)
    - HTML, CSS 작성시 주석으로 작업 공간 표시하기 (layout07.html);

### 웹 표준 예제 사이트 만들기 (19. 12. 13 ~ )

1.**Layout** 구성하기

2. **Skip Menu** 구성하기
    - skip menu container는 맨 위에 위치 시킨다.
    - **absolute**속성을 이용하여 **top**을 - 값으로 설정하여 평소에는 보이지 않게 숨긴다.
    - **active**와 **focus**를 사용하여 Tab키로 선택이 되었을 때, 해당 menu의 top을 + 값을 지정하여 보이도록 한다.
  
3. **header 영역** 구성하기
    - **inline-block**을 통해 header의 menu, title 구성하기
    - **img sprite** 기법을 이용하여 작은 아이콘 이미지들을 하나의 이미지 파일로 만들어 사용하기
    - 웹 표준을 지키기 위해 **span** 태그를 통해 아이콘의 설명을 나타내는 문자를 뒤에 숨겨 놓기
  
4. **전체 매뉴 영역** 구성하기
    - **float : left**로 인한 영역 깨짐 방지를 위해 부모 container에 **overflow: hidden** 속성 지정하기
    - 전체메뉴 문구는 **skip menu**에만 필요하므로 가려놓기
  
5. **전체 타이틀 영역** 구성하기
    - **이미지 스프라이트** 기법 사용하여 버튼 만들기 (복습)
  
6. **전체 배너** 구성하기
    - **이미지 스프라이트** 기법 사용하여 이전, 다음 버튼 만들기 (복습)
    - IE 구버전 적용을 위해 class 지정을 통한 text-align 사용
  
7. **컨텐츠 레이아웃** 구성하기
    - **이미지 스프라이트** 기법 사용하여 이전, 다음 버튼 만들기 (복습)
    - **absolute** 속성을 이용하여 이미지의 위치 지정하기 (복습)
    - 배경을 살리기 위해서는 margin이 아닌 **padding**을 사용할 것
  
8. **게시판 내용** 구성하기
    - **이미지 스프라이트** 기법 사용하여 이전, 다음 버튼 만들기 (복습)
    - **absolute** 속성을 이용하여 이미지의 위치 지정하기 (복습)
    - li의 점은 이미지를 통해 설정하기
    - 이미지의 경우, **absolute** 처리를 통해서 공간을 차지하지 않도록 하는 편이 더 편할 수 있다.
    - 글씨를 강조 하고 싶은 경우 **em** 태그를 이용한다.
    - 글씨의 중요성을 강조하고 싶다면 **strong**태그를 이용한다.
  
9.  **이미지 오버 효과** 부여하기
    - **visibility**를 이용해 hover를 했을 때, hidden-> visible이 되도록 설정한다.
    - **em** 태그를 이용하여 hover시 나타나는 문자를 적어준다.
    - 자주 사용하는 margin이나 padding 등 여러가지 요소를 class로 미리 만들어 두면 나중에 시간 절약이 된다.

10. **탭 메뉴** 구성하기
    - **margin**을 -1px하는 경우는 간혹 border의 선을 겹쳐야 한는 경우에 사용한다. 

11. **갤러리** 구성하기
    - **이미지 스프라이트** 기법 사용하여 이전, 다음 버튼 만들기 (복습)
    - **absolute** 속성을 이용하여 이미지의 위치 지정하기 (복습)

12. **로그인창** 구성하기
    - **input-checkbox** 사용시, label로 해당 이름과 input box 연결 꼭 하기
    - 웹 표준을 준수하기 위해 로그인의 기능 이름들을 명시하되, 숨겨놓는다.
    - 