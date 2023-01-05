import * as React from 'react';
import{ AppBar, Typography, Toolbar } from '@mui/material';
import { MainLogo } from './MainLogo';
import logo from '../../assets/images/mainlogo.png';

const Header = (): JSX.Element => {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: 'primary.light',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderBottomColor: 'border.main',
      }}
    >
      <Toolbar sx={{
        // eslint-disable-next-line @typescript-eslint/naming-convention
        '&.MuiToolbar-root': {
          pl: '40px',
          pr: '40px',
        },
      }}>
        <MainLogo src={logo} />
        <Typography
          variant="h6"
          component="h6"
          color={'text.primary'}
          sx={{
            fontSize: '22px',
            lineHeight: '24px',
          }}
        >
                React school
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
