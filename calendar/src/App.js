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
          <p>헤더입니다.</p>
          <nav>
            <ul>
              <li>
                <Link to="/">메인</Link>
              </li>
              <li>
                <Link to="/sub">서브</Link>
              </li>
            </ul>
          </nav>
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
