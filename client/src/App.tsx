import React from 'react';
import { CssBaseline } from '@mui/material';
import Theme from './css/theme';
import "./css/app.css"
import { ThemeProvider } from '@emotion/react';

type Props = {}

const App = (props: Props) => {
  <ThemeProvider theme={Theme}>
    <CssBaseline />
  </ThemeProvider>
}
export default App