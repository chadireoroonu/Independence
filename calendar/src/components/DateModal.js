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
      <HeaderContainer>
      <CloseButton onClick={closeModal}>X</CloseButton>
      <ArrowButton onClick={moveToPrevDay}>←</ArrowButton>
      <DateText>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DateText>
      <ArrowButton onClick={moveToNextDay}>→</ArrowButton>
      </HeaderContainer>
      <ContentsContainer>
        <CountContainer>
          <h4>오늘의 사건은 {events.length}건 입니다.</h4>
        </CountContainer>
        {
          events.length > 0 ? 
          events.map((event, index) => (
            <EachEvent key={index}>
              <p>{event.year}</p>
              <p>{event.event}</p>
              <SearchLinkContainer>
                <SearchLink href={`https://search.naver.com/search.naver?query=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
                  <img src="/path/to/naver-logo.png" alt="Naver logo" />
                  <span>네이버로 알아보기</span>
                </SearchLink>
                <SearchLink href={`https://www.google.com/search?q=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
                  <img src="/path/to/google-logo.png" alt="Google logo" />
                  <span>구글로 알아보기</span>
                </SearchLink>
                <SearchLink href={`https://search.daum.net/search?q=${encodeURIComponent(event.tag)}`} target="_blank" rel="noopener noreferrer">
                  <img src="/path/to/daum-logo.png" alt="Daum logo" />
                  <span>다음으로 알아보기</span>
                </SearchLink>
              </SearchLinkContainer>
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

const CountContainer = styled.div`
  display: flex;
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
  width: 95%;
  padding: 0 1em;
  // border: 1px solid #ddd;
  // border-radius: 10px;
`;

const SearchLinkContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const SearchLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;
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
