import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function ForSearch() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  console.log(search);
  console.log(results);
  console.log(results.year)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  const findAllInObject = (obj, searchText, year, month, day) => {
    let result = [];
    
    const searchInItem = (item) => {
      if (typeof item === 'string' && item.toLowerCase().includes(searchText.toLowerCase())) {
        result.push({event: obj, year, month, day});
      } else if (Array.isArray(item)) {
        item.forEach(i => searchInItem(i));
      } else if (typeof item === 'object' && item !== null) {
        Object.entries(item).forEach(([key, value]) => {
          if (Number.isInteger(parseInt(key))) {
            day = key;
          }
          searchInItem(value);
        });
      }
    };
  
    searchInItem(obj);
  
    return result;
  };
  
  // handleSearch 함수를 아래와 같이 수정합니다.
  const handleSearch = () => {
    if (search !== '') {
      let filteredData = [];
      data.forEach(({month, days}) => {
        Object.entries(days).forEach(([day, events]) => {
          events.forEach(event => {
            const foundItems = findAllInObject(event, search, event.year, month, day);
            filteredData = [...filteredData, ...foundItems];
          });
        });
      });
      setResults(filteredData);
    } else {
      setResults([]);
    }
  };

  return (
    <ForSearchContainer>
      <img src={`${process.env.REACT_APP_PUBLIC_URL}/search.png`} />
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="검색 키워드를 입력하세요"
          onChange={e => setSearch(e.target.value)}
        />
        <SearchButton type="submit" onClick={handleSearch}>검색</SearchButton>
      </SearchContainer>
      {results.map((result, index) => (
        <div key={index}>
            <p>{result.year}년 {result.month}월 {result.day}일</p>
            <p>{result.event.event}</p>
        </div>
        ))}
    </ForSearchContainer>
  );
}
  
const ForSearchContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  display: flex;
`;

const SearchInput = styled.input`
  width: 85%;
  height: 3em;
  padding: 0 10px;
  border: none;
  border-radius: 10px 0 0 10px;
  outline: none;
  font-size: 16px;
`;

const SearchButton = styled.button`
  width: 15%;
  height: 3em;
  border: none;
  border-radius: 0 10px 10px 0;
  background-color: #221E1E;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
`;

export default ForSearch;
