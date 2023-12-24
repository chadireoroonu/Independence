import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Sub from './pages/Sub';

function App() {
  return (
    <Router>
      <div>
        {/* <header> */}
          <div id='header'>
            <p>헤더입니다.</p>
            <ul>
              <Link to="/">메인</Link>
            </ul>
            <ul>
              <Link to="/sub">서브</Link>
            </ul>
          </div>
        {/* </header> */}
        <body>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sub" element={<Sub />} />
          </Routes>
        </body>
        <div id='footer'>
          <div id='footer-first-line'>
            <div class='inner-footer-first-line'>
              <p>CSES Fellowship 5기</p>
            </div>
            <div class='inner-footer-first-line'>
              <p>만년형 우리나라 독립달력</p>
            </div>
          </div>
          <div id='footer-second-line'>
            <div class='inner-footer-second-line'>
              <p>이소정</p>
            </div>
            <div class='inner-footer-second-line'>
              <p>문의 : chadireoroonu@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
