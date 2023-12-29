import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AllEvents from './AllEvents';

function DateModal({ date, setDate, closeModal }) {
  const [events, setEvents] = useState([]);

  // 전일, 익일 이동
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
    fetch(`${process.env.REACT_APP_PUBLIC_URL}/data.json`)
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
      <UpperModal>
        <UpperRed/>
        <UpperBlue/>
      </UpperModal>
      <ModalContentContainer>
        <CloseButtonContainer>
          <CloseButton onClick={closeModal}>X</CloseButton>
        </CloseButtonContainer>
        <HeaderContainer>
          <ArrowButton onClick={moveToPrevDay}>{"<"}</ArrowButton>
          <DateText>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DateText>
          <ArrowButton onClick={moveToNextDay}>{">"}</ArrowButton>
        </HeaderContainer>
        <CountContainer>
          <h4>오늘의 사건은 {events.length}건 입니다.</h4>
        </CountContainer>
        <AllEventsContainer>
          <AllEvents events={events} />
        </AllEventsContainer>
      </ModalContentContainer>
      <LowerModal>
        <LowerRed/>
        <LowerBlue/>
      </LowerModal>
    </ModalContent>
  );
}

const ModalContent = styled.div`
  min-height: 31em;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  // background-color: red;
  margin: -1em;
  justify-content: space-between;
`;


const UpperModal = styled.div`
width: 100%;
  height: 0.7em;
  display: flex;
  flex-direction: row;
  background-color: black;
  `;
  
  const UpperRed = styled.div`
  flex: 3;
  height: 100%;
  background-color: #E8415B;
  `;
  
  const UpperBlue = styled.div`
  flex: 2;
  height: 100%;
  background-color: #1C4A9F;
  `;
  
  const LowerModal = styled.div`
  width: 100%;
  height: 0.7em;
	display: flex;
	flex-direction: row;
  background-color: black;
  `;
  
  const LowerRed = styled.div`
	flex: 2;
	height: 100%;
	background-color: #E8415B;
  `;
  
  const LowerBlue = styled.div`
	flex: 3;
	height: 100%;
	background-color: #1C4A9F;
  `;

  const ModalContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 30em;
  `;
  
  const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 1em;
  border-bottom: 1px solid #ddd;
  background-color:
  `;
  
  const CloseButtonContainer = styled.div`
    min-height: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  background-color: transparent;
  border: none;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const DateText = styled.h3`
  text-align: center;
`;

const ArrowButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  margin: 0 5em;
  transition: transform 0.3s ease-in-out;
  background-color: transparent;
  border: none;

  &:hover {
    background-color: #e6e6e6;
  }
`;

const AllEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // padding: 1em;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em 0 0 0;
`;

export default DateModal;
