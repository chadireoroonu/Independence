import React from 'react';
import styled from 'styled-components';

function EachEvent({ event }) {
  const randomNum1 = Math.floor(Math.random() * 21) + 1;
  const randomNum2 = Math.floor(Math.random() * 21) + 1;
  const randomNum3 = Math.floor(Math.random() * 21) + 1;
  const randomNum4 = Math.floor(Math.random() * 21) + 1;

    return (
      event &&
      <EachEventContainer>
        <EventTitle>
          <h3>{event.year}년</h3>
          <h5>{event.place}</h5>
        </EventTitle>
        <p>{event.event}</p>
        <SearchLinkContainer>
          <SearchLink href={`https://search.naver.com/search.naver?query=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/tagImgs/${randomNum1}.png`} />
            <span>네이버에서 자세히보기</span>
          </SearchLink>
          <SearchLink href={`https://www.google.com/search?q=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}randomNum2}.png`} />
            <span>구글에서 자세히보기</span>
          </SearchLink>
          <SearchLink href={`https://search.daum.net/search?q=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
            <img ssrc={`${process.env.REACT_APP_PUBLIC_URL}/tagImgs/${randomNum3}.png`} />
            <span>다음에서 자세히보기</span>
          </SearchLink>
          <SearchLink href={`https://www.bing.com/search?q=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.REACT_APP_PUBLIC_URL}/tagImgs/${randomNum4}.png`} />
            <span>빙에서 자세히보기</span>
          </SearchLink>
        </SearchLinkContainer>
      </EachEventContainer>
    );
  }

const EachEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 1em 0;
`;

const EventTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: -1em;

  h3 {
    margin-right: 1em;
  }
`;

const SearchLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0
`;

const SearchLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15em;
  color: #221E1E;
	border: 2px solid #A59D9D;
	border-radius: 10px;
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 95%;
    margin: 0.5em 0;
  }

  span {
    text-align: center;
    margin: 0.5em;
  }

`;
  
export default EachEvent;