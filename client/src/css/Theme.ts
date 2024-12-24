import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeText {
    title?: string;
    white?: string
  }

  interface Palette {
    text: TypeText;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
  }
}

const colors = {
  primary: '#d0ffbf', 
  secondary: '#f2c79b', 
  backgroundPrimary: '#f035be', 
  backgroundSecondary: '#151714', 
  surface: '#3455eb',  
  textPrimary: '#151714', 
  textSecondary: '#fff',
  accent: '#fc44b3', 
  transparent: 'transparent',
  title: '#3455eb',
};

const Theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.backgroundPrimary,
      paper: colors.backgroundSecondary,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      title: colors.title,
      white: colors.surface
    },
    error: {
      main: '#F44336', 
    },
    warning: {
      main: colors.accent,
    },
  },
  typography: {
    allVariants: {
      textAlign: "start"
    },
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: '"Dancing Script", serif',
      fontSize: '4.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
});

export default Theme;