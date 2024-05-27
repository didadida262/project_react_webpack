import React, { createContext, useEffect, useState } from 'react';

export enum ThemeMode {
  DARK_MODE = 'Dark Mode',
  LIGHT_MODE = 'Light Mode'
}

const darkModeStyles = [
  { key: '--bg-color', value: '#2e353d' },
  { key: '--text-primary-color', value: '#d1d5da' },
  { key: '--bg-primary-color', value: '#1e2428' },


];
const lightModeStyles = [
  { key: '--bg-color', value: '#ddeaf3' },
  { key: '--text-primary-color', value: '#525253' },
  { key: '--bg-primary-color', value: '#F0F1F2' },

];

interface ThemeContext {
  currentTheme: ThemeMode;
  setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

interface PropsType {
  children?: JSX.Element;
}

export const ThemeContext = createContext({} as ThemeContext);

export const ThemeProvider = (props: PropsType) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(
    ThemeMode.DARK_MODE
  );

  useEffect(() => {
    console.log({ currentTheme });
    if (currentTheme === ThemeMode.LIGHT_MODE) {
      lightModeStyles.forEach((item) =>
        document.documentElement.style.setProperty(item.key, item.value)
      );
    }
    if (currentTheme === ThemeMode.DARK_MODE) {
      darkModeStyles.forEach((item) =>
        document.documentElement.style.setProperty(item.key, item.value)
      );
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
