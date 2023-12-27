import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import Modal from 'react-modal';
import DateModal from '../components/DateModal';

Modal.setAppElement('#root');

function Main() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
	const [modalOpen, setModalOpen] = useState(false);
	const [data, setData] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
		console.log(selectedDate);
		setModalOpen(true);
  };

	const closeModal = () => {
		setModalOpen(false);
	}

	useEffect(() => {
    fetch('/data.json')
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

	const dateClassName = (date) => {
		if (data) {
			const currentMonthData = data.find(item => item.month === (date.getMonth() + 1).toString());
			if (currentMonthData) {
				const currentDayData = currentMonthData.days[date.getDate().toString()];
				if (currentDayData) {
					return 'highlight';
				}
			}
		}
	};


  return (
    <MainContainer>
      <CalendarContainer>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={handleDateClick}
					tileClassName={({ date, view }) => dateClassName(date)}
        />
      </CalendarContainer>
			<Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Date"
      >
				{selectedDate && <DateModal date={selectedDate} closeModal={closeModal} />}
      </Modal>
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
	.highlight {
		background-color: red;
	}
}
`;

export default Main;
