# CSES Fellowship 5기

CSES Fellowship 5기 참여 산출물
시민교육 및 독립유공자 생계지원을 위한 '만년형 우리나라 독립 달력'

문의 : chadireoroonu@gmail.com

## 개발환경

- React 

- yarn 1.22.21

## 사용 라이브러리

- react calendar

- victory

## 페이지 소개

- 홈
  
  - 검색 : 키워드를 통해 우리나라 독립사 사건 검색
  
  - 달력 : 달력의 일자를 클릭하여 오늘의 독립사 속 사건 확인

- 소개

  - CSES 및 CSES Fellowship 소개

  - 독립달력 프로젝트 소개

- 정보

  - 공공, 민간 분야의 관련 사이트 소개

- 펀딩

- 검색

  - 키워드를 통해 우리나라 독립사 사건 검색


## 파일구조
```
calendar
├─ README.md
├─ package.json
├─ public
│  ├─ aboutImgs
│  │  ├─ 1.png
│  │  ├─ 2.png
│  │  ├─ 3.png
│  │  ├─ 4.png
│  │  └─ title.png
│  ├─ data.json
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ info.json
│  ├─ logoImgs
│  │  ├─ bing.png
│  │  ├─ daum.png
│  │  ├─ google.png
│  │  └─ naver.png
│  ├─ manifest.json
│  ├─ robots.txt
│  ├─ search.png
│  └─ tagImgs
│     ├─ 1.png
│     ├─ 2.png
│     ├─ 3.png
│     ├─ 4.png
│     ├─ 5.png
│     ├─ 6.png
│     ├─ 7.png
│     ├─ 8.png
│     ├─ 9.png
│     ├─ 10.png
│     ├─ 11.png
│     ├─ 12.png
│     ├─ 13.png
│     ├─ 14.png
│     ├─ 15.png
│     ├─ 16.png
│     ├─ 17.png
│     ├─ 18.png
│     ├─ 19.png
│     ├─ 20.png
│     └─ 21.png
└─ src
   ├─ App.js
   ├─ App.test.js
   ├─ components
   │  ├─ AllEvents.js
   │  ├─ DateModal.js
   │  ├─ EachEvent.js
   │  ├─ EachSiteCard.js
   │  ├─ ForSearch.js
   │  ├─ MonthlyChart.js
   │  └─ YearlyChart.js
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ pages
   │  ├─ About.js
   │  ├─ Funding.js
   │  ├─ Info.js
   │  ├─ Main.js
   │  └─ SearchResult.js
   ├─ reportWebVitals.js
   └─ setupTests.js

```