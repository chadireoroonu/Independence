import { useLocation } from 'react-router-dom';
import ForSearch from '../components/ForSearch';
import styled from 'styled-components';

function SearchResult() {
  const location = useLocation();
  const results = location.state?.results || [];
  const keyword = location.state?.keyword || '';

  console.log(results)

  return (
    <SearchResultContainer>
      <ForSearch />
      <CountContainer>
        <h3>{`${keyword}에 대한 검색 결과는 ${results.length} 건 입니다.`}</h3>
      </CountContainer>
      {results.map((result, index) => (
        <EachResult key={index}>
          <InfoContainer>
            <h4>{result.year}년 {result.month}월 {result.day}일</h4>
            <p>{result.event.event}</p>
          </InfoContainer>
          <SearchLinkContainer>
            <SearchLink href={`https://search.naver.com/search.naver?query=${encodeURIComponent(result.event.tag)}`} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logoImgs/naver.png`} />
            </SearchLink>
            <SearchLink href={`https://www.google.com/search?q=${encodeURIComponent(result.event.tag)}`} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/logoImgs/google.png`} />
            </SearchLink>
            <SearchLink href={`https://search.daum.net/search?q=${encodeURIComponent(result.event.tag)}`} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.REACT_APP_PUBLIC_URL}/logoImgs/daum.png`} />
            </SearchLink>
            <SearchLink href={`https://www.bing.com/search?q=${encodeURIComponent(result.event.tag)}`} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.REACT_APP_PUBLIC_URL}/logoImgs/bing.png`} />
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
  align-items: center;
`;

const InfoContainer = styled.div`
  margin: 1em 0;
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
  width: 3em;
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

export default SearchResult;