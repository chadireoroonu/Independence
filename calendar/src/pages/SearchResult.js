import { useLocation } from 'react-router-dom';
import ForSearch from '../components/ForSearch';
import styled from 'styled-components';

function SearchResult() {
  const location = useLocation();
  const results = location.state?.results || [];
  const keyword = location.state?.keyword || '';

  return (
    <SearchResultContainer>
      <ForSearch />
      <CountContainer>
        <h3>{`${keyword}에 대한 검색 결과는 ${results.length} 건 입니다.`}</h3>
      </CountContainer>
      {results.map((result, index) => (
        <EachResult key={index}>
          <h4>{result.year}년 {result.month}월 {result.day}일</h4>
          <p>{result.event.event}</p>
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
  margin: 1em 0;
`;

export default SearchResult;