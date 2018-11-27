# Javascript Frameworks: Past, Present and Future (자바스크리븥 프레임워크의 과거 현재 그리고 미래)

## What are Frameworks?

위키피티아 복사해오심 그거 참고하시면 될듯
https://en.wikipedia.org/wiki/Software_framework

정확히 이걸 붙여놓으심!!
요약하자면 여러가지 기능들을 추상화시고 표준화시킨 하나의 플랫폼

## Why Frameworks?

- Reduce Transaction Costs

  - 자체적으로 구현된 기능들이 많으므로 일반적인 문제들은 기본적으로 쉽게 해결가능
  - 자체적으로 여러가지 기능들이 존재하므로 추가적인 비용 절감
  - 일관적으로 동작
  - boilerplate 제공

- Javascript (1995) Netscape (여기서 웹의 역사를..?!) 자바스크립트 시작

- The Birth of Frameworks
  - Ajax(구글에서 구글 메일에 최초로 도입함으로써 발전의 서막을 염) - page not refresh (비동기 통신)
  - prototype, dojo, jquery(라이브러리, 가장 성공적인 프로젝트, 모든 브라우저에서 통일된 방식으로 사용가능)...

document.querySelector와 같은 표준화 기능이 등장함으로써 jQuery(DOM access에 강점을 지녔기에)의 인기가 내리막길을 걷게됨

## Frameworks Evolve (새로운 변화의 시작점을 연 프레임워크들)

- Angularjs (two-way data binding)
- Ember (템플릿엔진 핸들바 사용)
- Enyo (hp에서 디자인한 프레임워크) html - js 파일을 한 파일에 작성 but browser optimization에 문제점을 가지고 있음 (누구세요?)

## React (2013)

application 개발에 다른 방식을 제안
양방향 데이터 바인딩 (x) -> 단방향 데이터 바인딩 도입 (o)

- 특징
  - Virtual DOM (Virtual-DOM에서 변경된 데이터가 감지된 DOM 부분만 Real DOM에 반영)
  - Flux Pattern

## Vue.js (2014)

- angular의 장점을 가져옴 (애방뉴는 앵귤러 팀이었다고 한다)

## Different Approaches

- cycle.js? - Functional Framework (이벤트 스트림 방식)
- polymer.js

## enactjs? (님은 또 누구세요..?)

이거 홍보하러 오셨어요?

## 브라우저

브라우저 별로 최적화를 진행하려는 움직임을 보이고 있음

## 결론

?

프론트엔드 개발은 현재 빠른 변화를 맞이하고 있다. enact써봐라

# Emerging Web

- 오프라인 친화적인 웹
  - PWA - Progressive Web Application
  - Service worker

PWA는 오프라인이 가능한게 핵심이 아님
순수 웹 기술만으로 앱을 개발할 수 있도록 웹의 향후 방향에 큰 의미가 있음

빠른 그래픽 갱신과 연산을 위한 WebXR, WASM, OFFscreen Canvas
(WebXR은 WebVR이 이름이 바뀜)

- Payment Request API (표준화된 결제 API)

  - 신용카드 회사들을 포함해서 활발하게 개선중 (실제로 삼페에서 동작함)
  - ActiveX나 결제용 앱을 없앨 수 있는 희망..!

- NFC, Sensors

  - Chromium에서는 flag 뒤에 있지만 구현 완료된 기술
  - Gecko는 일정 부분 구현됨

- Clipboard API v2

  - 텍스트만 가능했던 과거 API
  - 복잡한 데이터 구조에 대한 지원 강화
  - 웹 그래픽 에디터, 캐드 등에서 활용 가능할 것으로 전망

- AbortController

  - 취소할 수 없었던 fetch()를 취소할 수 있게
  - 다른 Promise에도 이론상으로 사용가능

- Cookie Store

  - Data race 방지를 위한 비동기 접근과 서비스 워커에서의 접근 (순서 보장 API)

- Streams

  - 대량 데이터 처리시 파이프라인으로 구성하여 쉽게 이해 가능
  - 메모리 효율 향상 및 불필요한 복제를 최소화
  - 표준화된 인터페이스
  - Stream식 데이터를 가진 기존 표준들도 개선중

- Worklets
  - Worker의 경우 초기 비용이 큰 문제를 해결
  - "작은 태스크"이나 메인스레드 실행이 불필요한 경우에 사용 (Web Audio, Houdini 등에서 사용)

## 웹의 가능성

- WebUSB

  - USB 장치를 웹에서 하드웨어를 직접 접근

- 펌웨어 업데이트

보안/프라이버시 관련 이슈들 해결중 (가장 큰 이슈)

- WebHID (Human Interface Device(HID))
  - 입력 장치로 분류되는 하드웨어

왜 중요하냐
OS에서 제대로 지원하지 않는 컨트롤러를 앱이 제대로 지원하는 것이 가능
OS별로 HID 해석 결과가 달라 매핑으로 우회하는 것을 방지
메인 스레드 밖에서 입력 처리가 가능함(현재 입력은 메인스레드에서 발생)

Web Serial도 존재
거의 비슷한 개념, UART 읽을 수 있는 API

Shape Detection API
얼굴, 바코드

현재는 forward-pass만 지원할 가능성 높음
학습을 지원하려면 부가 표준화 작업이 많다

custom layer 지원 미지수
학습과 같은 이슈
GPU 커널을 JS로 표현하는 것도 접근하는 것도 신경망 API에서 지원할 영역이 아닌 이슈

Web High Level Shader Language
WebGPU Community Group에 제안
Shader Language들의 공통분모와 undefined behavior를 정리하고 안전성 강화 (개발 초기 단계)

브라우저 (DOM) 의존성이 없는 신규 API는 최초 설계시 headless 실행도 고려
W3C-TC39간 협력 강화 중
이상저긍로는 같은 API를 브라우저와 node.js에서 사용할 수 있도록 표준화하려는 장기적인 목표

BigInt 표준화
숫자 표현이 자바스크립트는 내부적으로 IEEE754 double이 기본으로, 표현 가능한 정수 영역에 제한이 있는 문제를 해결하기 위한 표준

# AWS S3, SPA 그리고 Vue.js

## HBSmith는 어떻게 Frontend를 Serverless로 운영ㅇ하는가

**_ Web 클라이언트 운영에 필요한 서버, 인프라 관리 비용을 최소화 _**

## 왜 Serverless인가?

운영에 필요한 공수가 필요없는 방식 (맨파워, 적은 사람으로 효율적으로 운영하고 싶다)

## 기술 스택

- SPA (vue)
- S3
- CloudFront
- AWS Codebuild
- AWS Certificate Manager
- AWS Route53

spa -> s3 -> cloudFront 깔끔한 배포! (여기서부터 약간 쎄했는데..)

(사실 제가 프론트엔드에 관련된 지식은 많이 부족해요(백엔드 개발자지만 이런 효율적인 방식이 있다는 것을 알리고 싶어서 왔슴다)) 이렇게 말하심

vue

- 요약에 선택한 이유를 첨언 (하이라이트라 마지막에 넣어놓음ㅎㅎㅎ)

S3

- Cloud object storage
- 무제한 공간
- 저장된 파일 개수, 용량, 그리고 동시에 접속자 수에 상관없이 늘 동일한 performance(파일 검색, download 시간) 보장
- High availability (기본값 3 replicas)
- Static website
  (S3에 대해서 알고 싶어서 온게 아니라구!)

codeBuild
언급 없었다 (자세한 설명 없음)

AWS Certificate Manager
인증 받고~ (자세한 설명 없음)

AWS Route53
도메인 연결하고~ (자세한 설명 없음)

CloudFront
CDN 캐싱하고~ (자세한 설명 없음)

## Troubleshooting

S3는 HA를 위해 데이터를 분산 복제 (기본값 3replicas)
이전에 존재한 file overwrite할 경우 file의 모든 replica가 동기화 되기 전엔 이전 file을 읽어올 수 있음

- S3에 새로 추가된 file은 분산 복제가 끝나기 전에 읽어올 수 없음 (Read after Write Consistency 속성)
- SPA에 file 이름 끝에 timestamp 또는 hash 값을 붙여서 S3 입장에서 계속 새로 추가된 file처럼 인식하게 한다
- index.html의 경우는 CDN에서 cache purge/invalidation해서 캐시삭제
- 'vue-router' version2부터 hashbang을 지원하지 않는다
- hashbang을 이용한 SPA routing

### 트러블슈팅 요약

S3에 배포하면 동기화 전에 계속 이전 파일을 불러옴 (파일 이름에 타임스탬프를 붙여서 s3가 새로운 파일이라고 인식하게끔 해서 해결)
vue-router에 해시뱅 ex) /#/user과 같은 부분을 해결하기 위해 저런 해시뱅 url로 접근할 때 redirect 시킴 (?)

## 질문

- 왜 뷰를 선택하게 되었습니까?
  - 9xd에서 20 ~ 30대 개발자들에게 물어봤을 때 vue가 핫하더라 그래서 vue를 도입하게 되었다. (뭐야?)

# Progressive Web Apps - 미래가 아닌 현재

## PWA란

- 모바일 앱과 같은 경험을 주는 최신 웹앱
- 앱 Icon, 앱 설치 banner, 모바일 Push, Offline 경험 제공
- 웹 기술 HTML, JS, CSS로 모바일 앱과 같은 웹 앱을 구현

## 등장 배경

- 모바일 시장의 폭발적인 성장
- 모바일 웹보다는 모바일 앱..
- 웹 기술로 모바일 앱 영역을 커버하기 위한 시도
  -> Hybrid App, React Native
- 낙후된 인프라 환경에서 Offline Web의 필요성

## PWA 적용 사례

- 스타벅스, 인스타, 트위터, 알리익스프레스 등등..

스타벅스 적용사례를 동영상으로 보여줌 (사용자 경험 증대에 효과적인 방법임을 보여주기 위해( 비행기모드로 접근해도 스타벅스 pwa web에서 메뉴를 확인하고 고를 수 있다 ))

## PWA 특징

- Web App manifest + Service worker

- Service worker - cache - webserver

manifest json파일 스샷떠서 보여주고 여기에는 아이콘과 타이틀을 넣을 수 있습니다~ 정도 보여줌

Service worker - 캐싱처리와 푸시 등 여러가지 기능을 설정할 수 있습니다~ 정도 설명
보안 - pwa는 https 방식에서만 구동됨 (사이트와 유저 사이에 보안 강화)

## 한줄요약

진짜 별로였다. (구글링하면 바로 나올 정도의 기본 정보만 소개해주고 끝남)
서비스워커 동작 방식, 등록, 라이프사이클, 업데이트 처리 등 여러 방식들은 1도 언급 없음
말그대로 그냥 소개

https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=ko
구글 공문이 훨씬 유익할듯

# React Native

## 장점

초중반부에 들어와서 못봄

리액트 네이티브는 정확히 네이티브냐 하이브리드냐
정확히는 네이티브도 하이브리드도 아니다.
리액트 네이티브 앱은 실제 모바일 앱이다 (? 말장난)

## 한계

네이버 맵 연동이 필요하다면?

- 웹브라우저의 window와 document를 참조하는 네이버 맵은 리액트 네이티브 뷰에 적용 불가

## 적용사례

"T" 동영상 커뮤니티 서비스

하이브리드 방식의 기존 애플리케이션이 있음
Restful API 구축되어 사용중

구축 계획

리액트 네이티브로 앱 전면 재구축
동영상 플레이어는 네이티브 플레이어 그대로 유지
리액트 네이티브와 비디오 플레이어의 모듈 통신 구축

네이티브로 개발 시 예상
기간 - 12주
투입인원 안드로이드 2인, 아이폰 2인, 총괄 1인 예상 리소스 15MM

리액트 네이티브로 개발 결과
기간 - UI 10주 + 플레이어 연동 4주
투입인원 3인 + 플레이어 연동을 위해 각 플랫폼 개발자 추가 투입
실제 리소스 10 ~ 11MM

## 결과

두 플랫폼을 개발하는데 들어가는 리소스가 200이라고 할 때 리액트 네이티브가 절반의 리소스만으로 개발이 가능하진 않다
하지만 150정도로 리소스를 줄일 수 있었음
네이티브 연동의 숙련도에 따라 더 줄일 수 있을 것으로 기대

추가적으로 유지보수 진행시 UI 업데이트가 편해짐

## 총평

퍼포먼스를 높이면서도 개발 생산성을 겸비할 수 있는 "가성비"의 선택

## 한줄요약

리액트 네이티브로 개발을 하더라도 네이티브 지식 또한 가지고 있어야한다. (네이티브 지식을 1도 모르는 상태에서는 완성된 산출물을 낼 수 없다)

# Creating React Component with BEM & styled-component

CSS방법론을 사용해보자

- OOCSS
- SMACSS
- Atomic CSS (속성별)
- MCSS
- AMCSS
- BEM
  스타일 충돌 최소화할 방법을 찾아보자 (자신의 프로젝트에 맞는 본인은 BEM을 선택)

  1.기존 BEM과 비슷한 컨셉으로 가지만, 요소가 블록에 의한 제약은 안 받을 수 있다.
  2.Atomic Web Design에서 주장했던 바와 같이, 다소 추상적인 것들도 요소에 넣도록 한다.

## 관심사의 분리

초기에는 HTML, CSS, JS 확장자별로 분리

컴포넌트는?
기능별로 분리 (modal, accordion, ...)

## styled-components의 사용 이유?

문서화가 잘되어 있고, 스타가 많은 거..ㅎ(단점에 대한 설명은 없었다. 장점은 스타일 scope화)

## 장단점

### 장점

- 자바스크립트 내부에 스타일을 정의하다보니 dynamic styling이 쉬워짐
- 클래스네이밍이 동적으로 해싱된 값이 붙음으로써 네이밍 충돌 방지

### 단점

안말해줌
(개인적으로)

- 기존 스타일 적용 방식과 다르므로 생각의 전환이 필요
- 디버깅..? 해당 해싱된 클래스네이밍을 추적하기 어려움(공부를 덜해서 그럴수도 있음)

## 스토리북으로 관리

스토리북과 사용하는 컴포넌트들의 구조를 동일하게 구성해서 관리

## 느낀점

프로젝트 초반은 Element 컴포넌트 위주로 만든다.
(디자이너에게 색상값이나 여러 기본 요소들을 받아서 그 기준으로 컴포넌트 작업)

- 이때 미리 디자인 가이드가 Element 컴포넌트 위주로 나와 있으면 작업하기 매우 좋다!
- 미리 만들어두면 좋은 것들
  - 버튼
  - 인풋요소: 텍스트, 라디오, 셀렉트박스 등등

Block을 미리 만들지 말고, 큰 변화 없이 재사용해도 된다 싶으면 그때 Block으로 분리하기
그 전에는 Container 하위 디렉토리에 배치한다. (컨테이너가 뭔지 말 안해줬잖아!)

## Testing

처음에는 storyshot으로 시작

- 그러나 시간이 너무 오래 걸린다
- 내 잘못? storyshot의 제약사항?
  테스팅에 대한 지식 부족
- 테스팅 공부하자
- https://frontendmasters.com/courses/testing-react/
  (테스팅은 제대로 못했다~)

## Maintenance

처음 보는 사람?

- 기존 컴포넌트 사이에서 헤매지 않을까
- 큰 그림 먼저: 대분류 기준만 일단 알려준다
- 기존 것을 쓰라고 강요하면 역효과

새로운 컴포넌트 생성

- 원하는 것이 "UI" or "기능" 구별짓기
- 재사용에 대한 압박 너무 받지 말기

## 한줄요약

BEM x styled-components 도입 후 스타일 충돌에 대한 불안감이 사라졌고, 컴포넌트 단위로 코드를 구성할 수 있게됨.
(BEM 방법론을 어떻게 styled-components에 잘 녹여냈는지는 설명 안해줌)
