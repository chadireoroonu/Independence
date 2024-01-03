import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ForSearch from '../components/ForSearch';
import styled from 'styled-components';

function SearchResult() {
  const location = useLocation();
  const results = location.state?.results || [];
  const keyword = location.state?.keyword || '';
  const [sortType, setSortType] = useState('asc');

  // 결과 정렬
  const sortedResults = [...results].sort((a, b) => {
    const dateA = new Date(a.year, a.month - 1, a.day);
    const dateB = new Date(b.year, b.month - 1, b.day);

    return sortType === 'asc' ? dateA - dateB : dateB - dateA;
  });

  const toggleSortType = () => {
    setSortType(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <SearchResultContainer>
      <ForSearch />
      <CountContainer>
        <h3>{`${keyword}에 대한 검색 결과는 ${results.length} 건 입니다.`}</h3>
        <button onClick={toggleSortType}>
          {sortType === 'asc' ? '날짜 내림차순 정렬' : '날짜 오름차순 정렬'}
        </button>
      </CountContainer>
      {sortedResults.map((result, index) => (
        <EachResult key={index}>
          <InfoContainer>
            <h4>{result.year}년 {result.month}월 {result.day}일</h4>
            <p>{result.event.event}</p>
          </InfoContainer>
          <SearchLinkContainer>
            <SearchLink href={`https://search.naver.com/search.naver?query=${encodeURIComponent(result.event.tag || result.event.event)}`} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logoImgs/naver.png`} alt="네이버 로고"/>
            </SearchLink>
            <SearchLink href={`https://www.google.com/search?q=${encodeURIComponent(result.event.tag || result.event.event)}`} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logoImgs/google.png`} alt="구글 로고" />
            </SearchLink>
            <SearchLink href={`https://search.daum.net/search?q=${encodeURIComponent(result.event.tag || result.event.event)}`} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logoImgs/daum.png`} alt="다음 로고" />
            </SearchLink>
            <SearchLink href={`https://www.bing.com/search?q=${encodeURIComponent(result.event.tag || result.event.event)}`} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logoImgs/bing.png`} alt="빙 로고" />
            </SearchLink>
          </SearchLinkContainer>
        </EachResult>
      ))}
    </SearchResultContainer>
  );
}

const SearchResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  padding: 1%
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1em;
`;

const EachResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InfoContainer = styled.div`
  margin: 1em 0;
`;

const SearchLinkContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 30%;
  margin: 1em 0;
`;

const SearchLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 3em;
  margin: 0.5em;
  color: #221E1E;
	border: 0.1em solid #A59D9D;
  border-radius: 50%;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }

  img {
    width: 75%;
    padding: 0.5em;
  }

  span {
    text-align: center;
    margin: 0.5em;
  }

`;


export default SearchResult;