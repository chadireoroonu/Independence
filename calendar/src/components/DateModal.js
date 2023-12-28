import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
      <UpperModal>
        <UpperRed/>
        <UpperBlue/>
      </UpperModal>
      <CloseButtonContainer>
        <CloseButton onClick={closeModal}>X</CloseButton>
      </CloseButtonContainer>
      <HeaderContainer>
      <ArrowButton onClick={moveToPrevDay}>{"<"}</ArrowButton>
      <DateText>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DateText>
      <ArrowButton onClick={moveToNextDay}>{">"}</ArrowButton>
      </HeaderContainer>
      <ContentsContainer>
        <CountContainer>
          <h4>오늘의 사건은 {events.length}건 입니다.</h4>
        </CountContainer>
        {
          events.length > 0 ? 
          events.map((event, index) => (
            <EachEvent key={index}>
              <EventTitle>
                <h3>{event.year}</h3>
                <h5>{event.place}</h5>
              </EventTitle>
              <p>{event.event}</p>
              <SearchLinkContainer>
                <SearchLink href={`https://search.naver.com/search.naver?query=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
                  <img src="/path/to/naver-logo.png" alt="Naver logo" />
                  <span>네이버에서 자세히보기</span>
                </SearchLink>
                <SearchLink href={`https://www.google.com/search?q=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
                  <img src="/path/to/google-logo.png" alt="Google logo" />
                  <span>구글에서 자세히보기</span>
                </SearchLink>
                <SearchLink href={`https://search.daum.net/search?q=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
                  <img src="/path/to/daum-logo.png" alt="Daum logo" />
                  <span>다음에서 자세히보기</span>
                </SearchLink>
              </SearchLinkContainer>
            </EachEvent>

          )) :
          <p>오늘의 사건 정보가 없습니다.</p>
        }
      </ContentsContainer>
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
  justify-content: center;
  position: relative;
  // background-color: red;
  margin: -1em;
  justify-content: space-between;
`;

const CloseButtonContainer = styled.div`
  min-height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1em;
`;

const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 0 1em 0;
`;

const EachEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 95%;
  // padding: 0 1em;
  margin: 1em;
  // border: 1px solid #ddd;
  // border-radius: 10px;
`;

const EventTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: -1em;

  h3 {
    margin-right: 1em;
  }
`;

const SearchLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0
`;

const SearchLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20em;
  height: 10em;
  color: #221E1E;
	border: 2px solid #A59D9D;
	border-radius: 10px;
  // box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  span {
    text-align: center;
  }
`;


export default DateModal;
