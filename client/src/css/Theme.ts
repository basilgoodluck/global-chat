import { createTheme } from '@mui/material/styles';

// Custom colors (replace with any colors you liked earlier)
const colors = {
  primary: '#4CAF50',  // Cool green
  secondary: '#FFC107', // Warm yellow
  background: '#F4F5F7', // Light background
  surface: '#FFFFFF',   // White for card-like surfaces
  textPrimary: '#333333', // Dark gray
  textSecondary: '#757575', // Medium gray
  accent: '#FF5722', 
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
    },
    error: {
      main: '#F44336', // Error red
    },
    warning: {
      main: colors.accent, // Accent color for warnings
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
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

export default Theme