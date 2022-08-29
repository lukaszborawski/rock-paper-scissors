import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/Theme';
import './assets/styles/fonts.css';
import GlobalStyle from './assets/styles/GlobalStyle';
import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
import GameProvider from './providers/GameProvider';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <GameProvider>
            <Content>
              <Header />
              <BrowserRouter>
                <AnimatedRoutes />
              </BrowserRouter>
              <Footer />
            </Content>
          </GameProvider>
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  padding: 25px;
`
