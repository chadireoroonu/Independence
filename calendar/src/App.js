import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Sub from './pages/Sub';

function App() {
  return (
    <Router>
      <div>
        <header>
          <div id='header'>
            <p>헤더입니다.</p>
            <ul>
              <Link to="/">메인</Link>
            </ul>
            <ul>
              <Link to="/sub">서브</Link>
            </ul>
          </div>
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sub" element={<Sub />} />
          </Routes>
        </body>
        <footer>
          <p>푸터입니다.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
