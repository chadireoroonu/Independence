import React from 'react';
import styled from 'styled-components';

function Info() {
  return (
    <InfoContainer id='funding'>
      <h2>정보 페이지</h2>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  width: 98%;
  min-height: 100vh;
  margin: 0 1%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Info;
