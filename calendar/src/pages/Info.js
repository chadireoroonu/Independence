import React from 'react';
import styled from 'styled-components';

function Info() {
  return (
    <InfoContainer>
      <TitleImgContainer>
        <img src={`${process.env.PUBLIC_URL}/infoImgs/title.png`} alt="소개페이지 메인 사진" />
      </TitleImgContainer>

      <InfoImgContainer>
        <img src={`${process.env.PUBLIC_URL}/infoImgs/1.png`} alt="소개1" />
        <img src={`${process.env.PUBLIC_URL}/infoImgs/2.png`} alt="소개2" />
        <img src={`${process.env.PUBLIC_URL}/infoImgs/3.png`} alt="소개3" />
        <img src={`${process.env.PUBLIC_URL}/infoImgs/4.png`} alt="소개4" />
      </InfoImgContainer>

      <LinkContainer>
        <a href="https://www.cses.re.kr/" target="_blank" rel="noreferrer">CSES 홈페이지 바로가기</a>
        <a href="https://www.cses.re.kr/business/research.do" target="_blank" rel="noreferrer">CSES Fellowship 바로가기</a>
      </LinkContainer>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
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

const InfoImgContainer = styled.div`
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
    color: #221E1E;
    border: 2px solid #A59D9D;
    color: #000;
    text-decoration: none;
    text-align: center;
    padding: 1em;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default Info;
