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
      <h1 className='h2 text-center'>All Posts</h1>
      <div className='text'>It's a {isDark ? 'Dark' : 'Light'} theme</div>
      <Posts />
    </div>
  );
};

export default MainComponent;

      // <button type='button' onClick={toggleTheme}>
      //   Toggle theme
      // </button>