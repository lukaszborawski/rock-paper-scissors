import React, { useState } from 'react';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/Theme';
import './assets/styles/fonts.css';
import Header from './components/Header';
import Rules from './components/Rules';

function App() {

  const [showRules, setShowRules] = useState(true);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Rules showRules={showRules} setShowRules={setShowRules} />
      </ThemeProvider>
    </>
  );
}

export default App;
