import React, { useContext } from 'react';
import Posts from '../components/posts/posts';
import { ThemeContext } from '../context/theme-provider';

const MainComponent: React.FC = () => {
  const { isDark, toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div
      className='app'
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <h1 className='h2 text-center'>Main Component</h1>
      <div className='text'>It's a {isDark ? 'Dark' : 'Light'} theme</div>
      <button type='button' onClick={toggleTheme}>
        Toggle theme
      </button>
      <Posts />
    </div>
  );
};

export default MainComponent;
