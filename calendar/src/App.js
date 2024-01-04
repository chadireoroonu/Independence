import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main';
import About from './pages/About';
import Funding from './pages/Funding';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <Router>
      <StyledApp>
        <Header>
          <HeaderTitle>
            <Link to="/Independence/">독립달력</Link>
          </HeaderTitle>
          <HeaderTitle>
            <Link to="/Independence/about">소개</Link>
          </HeaderTitle>
          <HeaderTitle>
            <Link to="/Independence/funding">펀딩</Link>
          </HeaderTitle>
        </Header>
        <div id='body'>
          <Routes>
            <Route path="/Independence/" element={<Main />} />
            <Route path="/Independence/about" element={<About />} />
            <Route path="/Independence/funding" element={<Funding />} />
            <Route path="/Independence/searchresult" element={<SearchResult />} />
          </Routes>
        </div>
        <Footer>
          <FooterFirstLine>
            <InnerFooterLine>
              <p>CSES Fellowship 5기</p>
            </InnerFooterLine>
            <InnerFooterFirstLine>
              <p>만년형 우리나라 독립달력</p>
            </InnerFooterFirstLine>
          </FooterFirstLine>
          <FooterSecondLine>
            <InnerFooterLine>
              <p>이소정</p>
            </InnerFooterLine>
            <InnerFooterLine>
              <p>문의: chadireoroonu@gmail.com</p>
            </InnerFooterLine>
          </FooterSecondLine>
        </Footer>
      </StyledApp>
    </Router>
  );
}

const StyledApp = styled.div`
  background-color: #FFFFFF;
`;

const Header = styled.div`
  width: 99%;
  height: 2.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  // background-color: #F4EEEE;
  padding: 0.5em 0 0.5em 1%;
`;

const HeaderTitle = styled.h3`
  margin: 0 10px;
`;

const Footer = styled.div`
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #221E1E;
  color: white;
  font-size: 10pt;
  // padding: 1em;
`;

const FooterFirstLine = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  // margin-bottom: -2%;
`;

const InnerFooterLine = styled.div`
  display: flex;
  padding: 0 1%;
`;

const InnerFooterFirstLine = styled(InnerFooterLine)``;

const FooterSecondLine = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export default App;
