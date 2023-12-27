import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function DateModal({ date, setDate, closeModal }) {
  const [events, setEvents] = useState([]);

  const moveToPrevDay = () => {
    let prevDay = new Date(date);
    prevDay.setDate(prevDay.getDate() - 1);
    setDate(prevDay);
  };

  const moveToNextDay = () => {
    let nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    setDate(nextDay);
  };

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const monthData = data.find(item => item.month === String(date.getMonth() + 1));
        if (monthData) {
          const dayData = monthData.days[String(date.getDate())];
          if (dayData) {
            setEvents(dayData);
          }
        }
      });
  }, [date]);

  return (
    <ModalContent>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <ArrowButton onClick={moveToPrevDay}>←</ArrowButton>
      <DateText>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DateText>
      <ArrowButton onClick={moveToNextDay}>→</ArrowButton>
      {events.map((event, index) => <p key={index}>{`${event.year}: ${event.event}`}</p>)}
    </ModalContent>
  );
}

const ModalContent = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const DateText = styled.h3`
  text-align: center;
`;

const ArrowButton = styled.button`
  /* 여기에 원하는 스타일을 적용하세요 */
`;

export default DateModal;
