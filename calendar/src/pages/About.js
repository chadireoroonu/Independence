import React from 'react';
import styled from 'styled-components';

function About() {
  return (
    <AboutContainer>
      <TitleImgContainer>
        <img src={`${process.env.REACT_APP_PUBLIC_URL}/aboutImgs/title.png`} alt="소개페이지 메인 사진" />
      </TitleImgContainer>

      <AboutImgContainer>
        <img src={`${process.env.REACT_APP_PUBLIC_URL}/aboutImgs/1.png`} alt="소개1" />
        <img src={`${process.env.REACT_APP_PUBLIC_URL}/aboutImgs/2.png`} alt="소개2" />
        <img src={`${process.env.REACT_APP_PUBLIC_URL}/aboutImgs/3.png`} alt="소개3" />
        <img src={`${process.env.REACT_APP_PUBLIC_URL}/aboutImgs/4.png`} alt="소개4" />
      </AboutImgContainer>

      <LinkContainer>
        <a href="https://www.cses.re.kr/" target="_blank" rel="noreferrer">CSES 홈페이지 바로가기</a>
        <a href="https://www.cses.re.kr/business/research.do" target="_blank" rel="noreferrer">CSES Fellowship 바로가기</a>
      </LinkContainer>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  width: 98%;
  min-height: 100vh;
  margin: 0 1%;

  align-items: center;
`;

const TitleImgContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;

const AboutImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 5em;

  img {
    width: 100%;
    margin-top: -1%;
    padding: 1;
  }
`

const LinkContainer = styled.div`
  width: 80%;
  margin: -2em auto 3em auto;
  display: flex;
  justify-content: space-between;

  a {
    width: 25em;
    color: #ffffff;
    background-color: #221E1E;
    text-decoration: none;
    text-align: center;
    padding: 1.3em;
    border-radius: 0.5em;

    // &:hover {
    //   background-color: #1a1919;
    // }

    // 버튼 눌리는 효과
    &:active {
      background-color: #0d0c0c;
      box-shadow: 0 0.1em 0.1em -0.05em #000;
      transform: translateY(0.1em);
    }
  }
`;

export default About;
