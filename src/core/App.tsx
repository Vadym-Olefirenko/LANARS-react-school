import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/theme';

import { Box, Container } from '@mui/system';
import Sidebar from 'modules/Components/Sidebar';
import Header from 'modules/Components/Header';

import { styled } from '@mui/system';

const StyledContainer = styled(Container)({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '&.MuiContainer-root': {
      pl: '40px',
      pr: '40px',
    },
});

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{bgcolor: 'background.default'}}>
        <StyledContainer>
          <Header/>
        </StyledContainer>
        <main>
          <StyledContainer>
              <Sidebar/>
          </StyledContainer>
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default App;
