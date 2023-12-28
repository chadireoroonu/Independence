import React from 'react';
import styled from 'styled-components';

function EachEvent({ event }) {
  console.log(event)
    return (
      event &&
      <EachEventContainer>
        <EventTitle>
          <h3>{event.year}</h3>
          <h5>{event.place}</h5>
        </EventTitle>
        <p>{event.event}</p>
        <SearchLinkContainer>
          <SearchLink href={`https://search.naver.com/search.naver?query=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
            <img src="/path/to/naver-logo.png" alt="Naver logo" />
            <span>네이버에서 자세히보기</span>
          </SearchLink>
          <SearchLink href={`https://www.google.com/search?q=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
            <img src="/path/to/google-logo.png" alt="Google logo" />
            <span>구글에서 자세히보기</span>
          </SearchLink>
          <SearchLink href={`https://search.daum.net/search?q=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
            <img src="/path/to/daum-logo.png" alt="Daum logo" />
            <span>다음에서 자세히보기</span>
          </SearchLink>
        </SearchLinkContainer>
      </EachEventContainer>
    );
  }

const EachEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  width: em;
  height: 10em;
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
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  span {
    text-align: center;
  }
`;
  
export default EachEvent;