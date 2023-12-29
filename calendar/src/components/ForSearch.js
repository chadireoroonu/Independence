import React from 'react';
import styled from 'styled-components';

function ForSearch() {
    return (
      <ForSearchContainer>
        <img src={`${process.env.REACT_APP_PUBLIC_URL}/search.png`} />
        <SearchContainer>
          <SearchInput type="text" placeholder="검색 키워드를 입력하세요"/>
          <SearchButton type="submit">검색</SearchButton>
        </SearchContainer>
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
