import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme, darkTheme } from './theme';

const Root = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <App toggleTheme={toggleTheme} darkMode={darkMode} />
    </ThemeProvider>
  );
};

// Create the root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
