import React from 'react';
import styled from 'styled-components';

function Info() {
  return (
    <InfoContainer>
      <h2>소개페이지</h2>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  width: 98%;
  min-height: 100vh;
  margin: 0 1%;
`;

export default Info;
