import React from 'react';
import styled from 'styled-components';
import EachEvent from './EachEvent';

function AllEvents({ events }) {
  console.log(events);
    return (
      <EachEventContainer>
        {
          events.map((event, index) => <EachEvent key={index} event={event} />)
        }
      </EachEventContainer>
    );
  }
  
const EachEventContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
`;

export default AllEvents;