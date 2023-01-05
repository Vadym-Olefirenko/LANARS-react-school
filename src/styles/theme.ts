/* eslint-disable @typescript-eslint/naming-convention */
import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

declare module '@mui/material/styles' {
    interface Palette {
        border: Palette['primary'];
    }
    interface PaletteOptions {
        border: PaletteOptions['primary'];
    }
   }

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary.main,
            light: colors.primary.light,
        },
        secondary: {
            main: colors.secondary,
        },
        background: {
            default: colors.background,
        },
        text: {
            primary: colors.text.primary,
            secondary: colors.text.secondary,
        },
        border: {
            main: '#E5EDF2',
        },
    },
    typography: {
        fontFamily: 'Saira',
    },
  });

export default theme;
