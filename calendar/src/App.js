import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Info from './pages/Info';
import Funding from './pages/Funding';

function App() {
  return (
    <Router>
      <div id='app'>
        <div id='header'>
          <h3>
            <Link to="/">독립달력</Link>
          </h3>
          <h3>
            <Link to="/info">소개</Link>
          </h3>
          <h3>
            <Link to="/funding">운용</Link>
          </h3>
        </div>
        <div id='body'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/funding" element={<Funding />} />
          </Routes>
        </div>
        <div id='footer'>
          <div id='footer-first-line'>
            <div class='inner-footer-line'>
              <p>CSES Fellowship 5기</p>
            </div>
            <div class='inner-footer-first-line'>
              <p>만년형 우리나라 독립달력</p>
            </div>
          </div>
          <div id='footer-second-line'>
            <div class='inner-footer-line'>
              <p>이소정</p>
            </div>
            <div class='inner-footer-line'>
              <p>문의 : chadireoroonu@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
