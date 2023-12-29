import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import DateModal from '../components/DateModal';
import ForSearch from '../components/ForSearch';
import MonthlyChart from '../components/MonthlyChart';
import YearlyChart from '../components/YearlyChart';

Modal.setAppElement('#root');

function Main() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [data, setData] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
		setModalOpen(true);
  };

	const closeModal = () => {
		setModalOpen(false);
	}

	useEffect(() => {
    fetch(`${process.env.REACT_APP_PUBLIC_URL}/data.json`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
		if (data) {
			console.log((date.getMonth() + 1).toString());
			const currentMonthData = data.find(item => item.month === (date.getMonth() + 1).toString());
			console.log(currentMonthData);
		}
	}, [date, data]);

	// 각 일자에 몇 개의 사건이 있는지 확인
	const dateClassName = (date) => {
		if (data) {
			const currentMonthData = data.find(item => item.month === (date.getMonth() + 1).toString());
			if (currentMonthData) {
				const currentDayData = currentMonthData.days[date.getDate().toString()];
				if (currentDayData) {
					return `highlight - ${currentDayData.length} events`;
				}
			}
		}
	};

	const dateTileContent = ({ date, view }) => {
		if (view === 'month' && data) {
			const currentMonthData = data.find(item => item.month === (date.getMonth() + 1).toString());
			if (currentMonthData) {
				const currentDayData = currentMonthData.days[date.getDate().toString()];
				if (currentDayData && currentDayData.length > 0) {
					return (
						<div 
							style={{ 
								position: 'absolute', 
								bottom: '0', 
								left: '0', 
								right: '0', 
								textAlign: 'center', 
								color: 'black',
								fontSize: '8px'
							}}
						>
							{Array(currentDayData.length).fill().map((_, index) => (
								<span key={index} style={{color: '#A59D9D', fontSize: '15px'}}>●</span>
							))}
						</div>
					);
				}
			}
		}
		return null; // 데이터가 없거나, view가 'month'가 아닌 경우
	};

  return (
    <MainContainer>
			<SearchContainer>
				<ForSearch/>
			</SearchContainer>
      <CalendarContainer>
				<UpperCalendar>
					<UpperRed/>
					<UpperBlue/>
				</UpperCalendar>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={handleDateClick}
					showNeighboringMonth={false}
					tileClassName={({ date, view }) => dateClassName(date)}
					tileContent={({ date, view }) => dateTileContent({ date, view })}
        />
				<LowerCalendar>
					<LowerRed/>
					<LowerBlue/>
				</LowerCalendar>
      </CalendarContainer>
			<Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Date"
      >
				{selectedDate && <DateModal date={selectedDate} setDate={setSelectedDate} closeModal={closeModal} />}
      </Modal>
			<ChartsContainer>
					{data &&
          <MonthlyChart data={data} />
          }
          <YearlyChart />
			</ChartsContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 98%;
  min-height: 90vh;
  margin: 0 1%;
`;
const SearchContainer = styled.div`
	width: 100%;
`;

const UpperCalendar = styled.div`
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

const LowerCalendar = styled.div`
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

const CalendarContainer = styled.div`
  display: flex;
	flex-direction: column;
  justify-content: center;
  margin: 1.5em auto;
  width: 80%;

  .react-calendar {
		color: #221E1E;
    width: 100%;
    min-height: 58vh;
    border: 1px solid #eeeeee;
  }

	.react-calendar__navigation {
		min-height: 4.5em;
		padding: 0 2.5em;

		.react-calendar__navigation__label {
			font-size: 20px;
			font-weight: bold;
		}
	}

	.react-calendar__month-view__weekdays__weekday {
		min-height: 3em;
    font-size: 15px;
		font-weight: bold;
  }
	
  .react-calendar__tile {
    /* each cell css */
    line-height: 7vh;
    padding: 0 0 20px 0;
		border: 2px solid transparent;
		position: relative;
  }

	// 선택타일
	.react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: #ffffff;
		color: #221E1E;
		border: 2px solid #A59D9D;
		border-radius: 10px;
		
  }

	// 현재타일
	.react-calendar__tile--now {
			background: transparent;
			border: 2px solid #221E1E;
			border-radius: 10px;
	}

	// 주말
	.react-calendar__month-view__weekdays__weekday,
  .react-calendar__month-view__days__day--weekend { 
    color: #221E1E;
  }

	.highlight {
		// background-color: red;
	}
}
`;

const ChartsContainer = styled.div`
	width: 100%;
	min-height: 3em;
  display: flex;
  flex-direction: row;
`;

export default Main;