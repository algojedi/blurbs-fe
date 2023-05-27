import React, { createContext, useState, useEffect } from 'react';
import { IS_DARK, ThemeContextProps } from '../types/types';
import { themes } from '../themes/themes';


interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.light,
  toggleTheme: () =>  { return },
  isDark: false,
});

const ThemeProvider : React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    localStorage.setItem(IS_DARK, JSON.stringify(!isDark));
    setIsDark(!isDark);
  };
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const isDark = localStorage.getItem(IS_DARK) === "true";
    setIsDark(isDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
