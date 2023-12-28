import React from 'react';
import styled from 'styled-components';
import EachEvent from './EachEvent';

function AllEvents({ events }) {
  console.log(events);
    return (
      <EachEventContainer>
        {
          events && events.length > 0 ? 
          events.map((event, index) => <EachEvent key={index} event={event} />) :
          <p>오늘의 사건 정보가 없습니다.</p>
        }
      </EachEventContainer>
    );
  }
  
const EachEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 95%;
  // padding: 0 1em;
  // margin: 1em;
  // border: 1px solid #ddd;
  // border-radius: 10px;
`;

export default AllEvents;