import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EachSiteCard from '../components/EachSiteCard';

function Info() {
  const [option, setOption] = useState("all");
  const [sites, setSites] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PUBLIC_URL}/info.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setSites(data);})
    .catch(error => console.log(error));
  }, []);

  return (
    <InfoContainer>
      {/* 향후 사진 교체 */}
      <img src={`${process.env.REACT_APP_PUBLIC_URL}/aboutImgs/title.png`} alt="메인 사진" />
      <ContentsContainer>
        <GuideContainer>
          <h2>분류</h2>
          <OptionContainer onClick={() => setOption("all")} selected={option === "all"}>
            <h4>전체</h4>
          </OptionContainer>
          <OptionContainer onClick={() => setOption("public")} selected={option === "public"}>
            <h4>공공</h4>
          </OptionContainer>
          <OptionContainer onClick={() => setOption("private")} selected={option === "private"}>
            <h4>민간</h4>
          </OptionContainer>
        </GuideContainer>
        <CardContainer>
          <h2>관련 사이트</h2>
          {sites && sites.filter(site => option === 'all' || site.type === option).map((site, index) => (
            <EachSiteCard key={index} site={site} />
          ))}
        </CardContainer>
      </ContentsContainer>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  width: 98%;
  min-height: 100vh;
  margin: 0 1%;
  align-items: center;
  flex-direction: column;
  
  img {
    width: 100%;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin: 2em 0;
`;

const GuideContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 20%;
  padding: 0 1.5em;
`;

const OptionContainer = styled.div`
  width: 100%;
  background-color: ${props => props.selected ? '#F4EEEE' : '#ffffff'};

  h4 {
    padding: 0 1em;
    display: inline-block;
    // transition: transform 0.3s ease-in-out;
  }

  &:hover {
    background-color: #F4EEEE;
    
    h4 {
      transform: scale(1.1);
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 80%;
  padding: 0 1em;
`;

export default Info;
