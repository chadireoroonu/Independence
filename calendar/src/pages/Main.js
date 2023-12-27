import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Main.css';
import 'react-calendar/dist/Calendar.css';

function Main() {
	const [date, setDate] = useState(new Date());
  return (
    <div id='main'>
    	<h2>메인페이지</h2>
			<div>
				<Calendar setDate={setDate} date={date}/>
			</div>
    </div>
  );
}

export default Main;