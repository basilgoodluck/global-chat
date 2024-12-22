import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Theme from '@/css/Theme';
import "@/css/app.css";
import { ThemeProvider } from '@emotion/react';
import NotificationContextProvider from '@/hooks/Notifications/Provider';
import MainLayout from './Layouts/MainLayout';

const Home: React.FC = lazy(() => import("@/pages/Home"));
const NotFound: React.FC = lazy(() => import("@/pages/NotFound"));
const Dashboard: React.FC = lazy(() => import("@/pages/Dashboard"));
const ChatRoom: React.FC = lazy(() => import("@/pages/ChatRoom"));

const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <NotificationContextProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/chatroom' element={<ChatRoom />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </NotificationContextProvider>
  </ThemeProvider>
)

export default App;
