import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { NotificationProvider, useNotification } from './context/NotificationContext';
import { SettingsProvider, useSettings } from './context/SettingContext';

import { TiAdjustBrightness } from "react-icons/ti";
import { FaRegIdBadge, FaLanguage } from "react-icons/fa";
import { RiLogoutCircleFill } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import './assets/styles/App.css';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useAuth();
  const { language, switchLanguage, t } = useLanguage();
  const { notifications, addNotification } = useNotification();
  const { settings } = useSettings();

  return (
    <div className={`app ${theme}`}>
      <header>
        <TiAdjustBrightness size={30}  onClick={toggleTheme} title={t('toggleTheme')}  />
        <FaRegIdBadge size={30} onClick={() => login({ name: 'Mukta' })} title={t('login')} />
        <RiLogoutCircleFill size={30} onClick={logout} title={t('logout')} />
        {/* <button onClick={logout}>{t('logout')}</button> */}
        {language === 'en' ? (
          <FaLanguage size={30} onClick={() => switchLanguage('marathi')} title={t('switchToMarathi')} />
        ) : (
          <FaLanguage  size={30} onClick={() => switchLanguage('en')} title={t('switchToEnglish')} />
        )}
        <IoNotifications size={30} onClick={() => addNotification(t('addNotification'))} title={t('addNotification')}/>
       
      </header>
      <main >
        <h1>{t('welcome')}, {user ? user.name : t('Please Login')}</h1>
        <p>{t('currentLanguage')}: {language}</p>
        <p>{t('settingsExample')}: {settings.exampleSetting.toString()}</p>
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


// import React from 'react';
// import { ThemeProvider, useTheme } from './context/ThemeContext';
// import { AuthProvider, useAuth } from './context/AuthContext';
// import { LanguageProvider, useLanguage } from './context/LanguageContext';
// import { NotificationProvider, useNotification } from './context/NotificationContext';
// import { SettingsProvider, useSettings } from './context/SettingContext';

// import { TiAdjustBrightness } from "react-icons/ti";
// import { FaRegIdBadge } from "react-icons/fa";
// import { FaLanguage } from "react-icons/fa";
// import './assets/styles/App.css';

// const App = () => {
//   const { theme, toggleTheme } = useTheme();
//   const { user, login, logout } = useAuth();
//   const { language, switchLanguage, t } = useLanguage();
//   const { notifications, addNotification } = useNotification();
//   const { settings } = useSettings();

//   // const LanguageSwitcher = ({ t }) => {
//     const [language, setLanguage] = useState('en');
  
//     // const switchLanguage = (newLanguage) => {
//     //   setLanguage(newLanguage);
//       // You might need to add additional logic here to actually switch the language in your app
//     // };
  



//   return (
//     <div className={`app ${theme}`}>
//       <header>
//         <TiAdjustBrightness size={30} onClick={toggleTheme} title={t('toggleTheme')} />

        
//         <FaRegIdBadge size={30} onClick={() => login({ name: 'Mukta' })} title={t('login')} />
//         <button onClick={logout}>{t('logout')}</button>
//         {language === 'en' ? (
//         <FaLanguage onClick={() => switchLanguage('marathi')} title={t('switchToMarathi')} />
//       ) : (
//         <FaLanguage onClick={() => switchLanguage('en')} title={t('switchToEnglish')} />
//       )}
//         {/* <FaLanguage onClick={() => switchLanguage('marathi')} title={t('switchToMarathi')}/>
//         <FaLanguage onClick={() => switchLanguage('en')} title={t('switchToEnglish')}/> */}

//         {/* <button onClick={() => switchLanguage('marathi')}>{t('switchToMarathi')}</button> */}
//         <button onClick={() => addNotification(t('addNotification'))}>{t('addNotification')}</button>
//       </header>
//       <main>
//         <h1>{t('welcome')}, {user ? user.name : t('guest')}</h1>
//         <p>{t('currentLanguage')}: {language}</p>
//         <p>{t('settingsExample')}: {settings.exampleSetting.toString()}</p>
//       </main>
//       <div className="notifications">
//         {notifications.map((notification) => (
//           <div key={notification.id} className="notification">
//             {notification.message}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default () => (
//   <ThemeProvider>
//     <AuthProvider>
//       <LanguageProvider>
//         <NotificationProvider>
//           <SettingsProvider>
//             <App />
//           </SettingsProvider>
//         </NotificationProvider>
//       </LanguageProvider>
//     </AuthProvider>
//   </ThemeProvider>
// );
