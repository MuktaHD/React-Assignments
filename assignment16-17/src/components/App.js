import React from 'react';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import { NotificationProvider, useNotification } from '../contexts/NotificationContext';
import { SettingsProvider, useSettings } from '../contexts/SettingsContext';

import '../assets/styles/App.css';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();
  const { language, switchLanguage } = useLanguage();
  const { notifications, addNotification } = useNotification();
  const { settings } = useSettings();

  return (
    <div className={`app ${theme}`}>
      <header>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <button onClick={() => login({ name: 'John Doe' })}>Login</button>
        <button onClick={logout}>Logout</button>
        <button onClick={() => switchLanguage('es')}>Switch to Spanish</button>
        <button onClick={() => addNotification('New notification')}>Add Notification</button>
      </header>
      <main>
        <h1>Welcome, {user ? user.name : 'Guest'}</h1>
        <p>Current language: {language}</p>
        <p>Settings example: {settings.exampleSetting.toString()}</p>
      </main>
      <div className="notifications">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification">
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default () => (
  <ThemeProvider>
    <AuthProvider>
      <LanguageProvider>
        <NotificationProvider>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </NotificationProvider>
      </LanguageProvider>
    </AuthProvider>
  </ThemeProvider>
);