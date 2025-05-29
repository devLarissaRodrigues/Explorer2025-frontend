import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { Profile } from './pages/Profile';
import theme from './styles/theme';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </StrictMode>,
)

