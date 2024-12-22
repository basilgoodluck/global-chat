import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeText {
    title?: string;
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
  background: '#f7dbd7', 
  surface: '#ffffff',  
  textPrimary: '#151714', 
  textSecondary: '#1c3b11',
  accent: '#fc44b3', 
  transparent: 'transparent',
  title: '#df5eff',
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
      default: colors.background,
      paper: colors.surface,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
      title: colors.title
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