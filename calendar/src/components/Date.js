import React from 'react';
import styled from 'styled-components';

function Date({ selectedDate = new Date() }) {
  return (
    <DateContainer>
      <h2>{selectedDate.getMonth() + 1}월 {selectedDate.getDate()}일</h2>
    </DateContainer>
  );
}

const DateContainer = styled.div`
  width: 98%;
  min-height: 100vh;
  margin: 0 1%;
`;

export default Date;
