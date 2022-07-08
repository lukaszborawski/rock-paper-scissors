import React, { useState } from 'react';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/Theme';
import './assets/styles/fonts.css';
import Header from './components/Header';
import Rules from './components/Rules';
import Button from './components/Button';
import { BrowserRouter } from 'react-router-dom'
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {

  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
        <Button onClick={() => setShowRules(true)}>Rules</Button>
        <Rules showRules={showRules} setShowRules={setShowRules} />
      </ThemeProvider>
    </>
  );
}

export default App;
