import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/theme';

import { Box, Container } from '@mui/system';
import Sidebar from 'modules/Components/Sidebar';
import Header from 'modules/Components/Header';

import Photos from 'modules/Components/Pages/Photos';
import { Stack } from '@mui/material';



const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="App" sx={{bgcolor: 'background.default'}}>
        <Container maxWidth="lg">
          <Header/>
        </Container>
        <main>
          <Container>
              <Stack direction="row">
                <Sidebar/>
                <Photos/>
              </Stack>
          </Container>
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default App;
