import React from 'react';
import styled from 'styled-components';

function Funding() {
  return (
    <FundingContainer id='funding'>
      <h2>준비중입니다</h2>
      <p>크라우드 펀딩 이후 펀딩 수익금에 대한 사용내역이 공개될 예정입니다.</p>
    </FundingContainer>
  );
}

const FundingContainer = styled.div`
  display: flex;
  width: 98%;
  min-height: 100vh;
  margin: 0 1%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Funding;
