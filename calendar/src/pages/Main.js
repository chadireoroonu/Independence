import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

function Main() {
	const [date, setDate] = useState(new Date());
	
  return (
		<MainContainer>
      <h2>메인페이지</h2>
      <CalendarContainer>
        <Calendar
          setDate={setDate}
          date={date}
					/>
      </CalendarContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
	width: 98%;
	min-height: 90vh;
	margin: 0 1%;
`;

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 80%;

	.react-calendar {
		width: 100%;
		min-height: 58vh;
		border: 1px solid #eeeeee;
	}

	.react-calendar__tile {
		/* each cell css */
		line-height: 7vh;
	}
`;


export default Main;
