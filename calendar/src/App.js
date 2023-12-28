import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/Main';
import Info from './pages/Info';
import Funding from './pages/Funding';

function App() {
  return (
    <Router>
      <StyledApp>
        <Header>
          <HeaderTitle>
            <Link to="/">독립달력</Link>
          </HeaderTitle>
          <HeaderTitle>
            <Link to="/info">소개</Link>
          </HeaderTitle>
          <HeaderTitle>
            <Link to="/funding">펀딩</Link>
          </HeaderTitle>
        </Header>
        <div id='body'>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/info" element={<Info />} />
            <Route path="/funding" element={<Funding />} />
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
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #F4EEEE;
  padding: 10px;
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
  padding: 10px;
`;

const FooterFirstLine = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: row;
  margin-bottom: -2%;
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
