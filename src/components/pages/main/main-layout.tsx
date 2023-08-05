import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/theme-provider';
import { NavBar } from '../../organisms/navbar/navbar';
import { Outlet } from 'react-router-dom';

// todo: move layout component to it's own folder
const MainLayout: React.FC = () => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div
      className='app'
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
