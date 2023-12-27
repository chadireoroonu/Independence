import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

function Main() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <MainContainer>
      <CalendarContainer>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={handleDateClick}
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
  margin: 1% auto;
  width: 80%;

  .react-calendar {
    width: 100%;
    min-height: 58vh;
    border: 1px solid #eeeeee;
  }

  .react-calendar__tile {
    /* each cell css */
    line-height: 7vh;
    padding: 0 0 20px 0;
  }
`;

export default Main;
