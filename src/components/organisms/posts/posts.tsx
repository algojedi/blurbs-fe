import React, { useContext } from 'react';
import { Post } from '../../../types/types';
import { ThemeContext } from '../../../context/theme-provider';
import { NavLink } from 'react-router-dom';
import './posts.scss';

export type PostsProps = { classNames?: string; posts?: Post[] };

const Posts: React.FC<PostsProps> = ({ classNames, posts }) => {
  const { theme } = useContext(ThemeContext);

  // TODO: apply these somewhere
  const cardClassNames =
    'card card-link mb-3 link-unstyled ' + theme === 'dark'
      ? 'bg-dark text-white'
      : '';

  return (
    <div className={classNames}>
      <h3 className='title'>Posts</h3>
      {posts ? (
        posts.map((post) => (
          <NavLink to={`/posts/${post.id}`} key={post.id}>
            <div className='card-body link-unstyled card-link'>
              <h3 className='card-title'>{post.title}</h3>
              <p className='card-text'>{post.content}</p>
            </div>
          </NavLink>
        ))
      ) : (
        <div>No posts</div>
      )}
    </div>
  );
};
export default Posts;
