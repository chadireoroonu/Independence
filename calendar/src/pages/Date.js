import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Date(props) {
  const { month, day } = useParams();

  return (
    <DateContainer>
      <h2>{month}월 {day}일</h2>
    </DateContainer>
  );
}

const DateContainer = styled.div`
  width: 98%;
  min-height: 100vh;
  margin: 0 1%;
`;

export default Date;
