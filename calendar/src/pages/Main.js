import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

function Main() {
	const [date, setDate] = useState(new Date());
	
  return (
		<MainContainer>
      <h2>메인페이지</h2>
      <CalendarBox>
        <Calendar
          setDate={setDate}
          date={date}
					/>
      </CalendarBox>
    </MainContainer>
  );
}

export const CalendarNavigation = styled.div`
	background: ${({ theme }) => theme.color.pink};
	border-bottom: 4px solid ${({ theme }) => theme.color.brown};
	height: 90px;
`;

const MainContainer = styled.div`
	width: 98%;
	min-height: 90vh;
	margin: 0 1%;
`;

const CalendarBox = styled.div`
	display: flex;
	justify-content: center;
`;

export default Main;
