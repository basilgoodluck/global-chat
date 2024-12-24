import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Theme from '@/css/Theme';
import { CssBaseline } from '@mui/material';
import "@/css/App.css";
import { ThemeProvider } from '@emotion/react';
import NotificationContextProvider from '@/hooks/Notifications/Provider';
import MainLayout from './Layouts/MainLayout';
import { ModalContextProvider } from './hooks/modals/Provider';

const Home: React.FC = lazy(() => import("@/pages/Home"));
const NotFound: React.FC = lazy(() => import("@/pages/NotFound"));
const Dashboard: React.FC = lazy(() => import("@/pages/Dashboard"));
const ChatRoom: React.FC = lazy(() => import("@/pages/ChatRoom"));

const App: React.FC = () => (
  <>
    <CssBaseline />
    <ThemeProvider theme={Theme}>
      <ModalContextProvider>
        <NotificationContextProvider>
          <Router>
            <Routes>
              <Route path='/' element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/chatroom' element={<ChatRoom />} />
                <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </Router>
        </NotificationContextProvider>
      </ModalContextProvider>
    </ThemeProvider>
  </>
)

export default App;
