import Header from 'modules/Components/Header';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/theme';

import { Box } from '@mui/system';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Header/>
      </Box>
    </ThemeProvider>
  );
};

export default App;
