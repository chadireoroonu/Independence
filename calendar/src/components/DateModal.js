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
      <HeaderContainer>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <ArrowButton onClick={moveToPrevDay}>←</ArrowButton>
      <DateText>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DateText>
      <ArrowButton onClick={moveToNextDay}>→</ArrowButton>
      </HeaderContainer>
      <ContentsContainer>
        {
          events.length > 0 ? 
          events.map((event, index) => (
            <EachEvent key={index}>
              <p>{event.year}</p>
              <p>{event.event}</p>
            </EachEvent>
          )) :
          <p>오늘의 사건 정보가 없습니다.</p>
        }
      </ContentsContainer>
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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid #ddd;
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

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em;
`;

const EachEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  padding: 1em;
`;

export default DateModal;
