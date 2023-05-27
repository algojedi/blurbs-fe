import React, { useContext } from 'react';
import Posts from '../../organisms/posts/posts';
import { ThemeContext } from '../../../context/theme-provider';
import { NavigationBar } from '../../organisms/navbar/navbar';

// TODO: this should be a layout component
const MainComponent: React.FC = () => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div
      className='app'
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <NavigationBar />
    </div>
  );
};

export default MainComponent;

      // <button type='button' onClick={toggleTheme}>
      //   Toggle theme
      // </button>