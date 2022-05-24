import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/Theme';
import './assets/styles/fonts.css';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
